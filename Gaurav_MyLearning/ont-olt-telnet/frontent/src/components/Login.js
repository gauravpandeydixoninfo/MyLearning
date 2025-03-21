import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [ip, setIp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const connectToOLT = async () => {
    if (!ip || !username || !password) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/connect", {
        ip,
        username,
        password,
      });

      if (response.data.success) {
        navigate("/dashboard", { state: { ip, username } });
      } else {
        setMessage(response.data.message || "Connection failed.");
      }
    } catch (error) {
      setMessage("Connection failed: " + (error.response?.data?.message || "Unexpected error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>OLT Connection</h1>
      <label>OLT IP:</label>
      <input type="text" placeholder="OLT IP" value={ip} onChange={(e) => setIp(e.target.value)} />
      
      <label>Username:</label>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      
      <label>Password:</label>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button onClick={connectToOLT} disabled={loading}>
        {loading ? "Connecting..." : "Connect"}
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Login;
