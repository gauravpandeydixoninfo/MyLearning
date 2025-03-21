import express from "express";
import { Telnet } from "telnet-client";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Telnet server is running!");
});

app.post("/telnet", async (req, res) => {
    console.log("Received Request:", req.body);

    const { ip, username, password, command } = req.body;
    if (!ip || !username || !password || !command) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const connection = new Telnet();
    const params = {
        host: ip,
        port: 23,
        timeout: 30000, // Increased timeout
        negotiationMandatory: false,
        debug: true,
        shellPrompt: ">", // OLT prompt
        stripShellPrompt: true,
    };

    try {
        console.log(`Connecting to ${ip}...`);
        await connection.connect(params);
        console.log("Connected successfully!");

        // 1️⃣ Wait for "User name:" and send username
        let response = await connection.send(username, { newline: true });
        console.log("Username sent, response:", response);

        // 2️⃣ Wait for "User password:" and send password
        response = await connection.send(password, { newline: true });
        console.log("Password sent, response:", response);

        // 3️⃣ Execute command
        console.log(`Executing command: ${command}`);
        response = await connection.exec(command);
        console.log("Command response:", response);

        connection.end();
        res.json({ response: response.trim() });
    } catch (error) {
        console.error("Telnet Error:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`✅ Telnet server running on http://localhost:${port}`);
});
