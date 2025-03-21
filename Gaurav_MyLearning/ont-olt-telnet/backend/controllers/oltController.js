const { exec } = require("child_process");

exports.connectOLT = (req, res) => {
    const { ip, username, password } = req.body;

    if (!ip || !username || !password) {
        return res.status(400).json({ error: "IP, username, and password are required" });
    }

    const mobaPath = `"C:\\Program Files (x86)\\Mobatek\\MobaXterm\\MobaXterm.exe"`;

    // Construct the Telnet command string
    const command = `${mobaPath} -newtab "telnet ${ip}"`;  // Corrected command to open a new tab with Telnet session

    console.log(`🚀 Connecting to ${ip} with MobaXterm Telnet...`);

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`❌ Error launching MobaXterm: ${error.message}`);
            return res.status(500).json({ error: "Failed to launch MobaXterm session" });
        }

        // Optionally log stdout and stderr for debugging
        console.log(`✅ MobaXterm Telnet session started.`);
        console.log("stdout:", stdout);
        console.error("stderr:", stderr);

        res.json({ message: "MobaXterm Telnet session started" });
    });
};
