import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ip, username } = location.state || {};

  const [uplinkPort, setUplinkPort] = useState("");
  const [downlinkPort, setDownlinkPort] = useState("");
  const [message, setMessage] = useState("");

  const connectPorts = () => {
    if (!uplinkPort || !downlinkPort) {
      setMessage("Please enter both ports.");
      return;
    }
    setMessage(`Connected: Uplink ${uplinkPort}, Downlink ${downlinkPort}`);
  };

  return (
    <div className="container">
      <h1>OLT Dashboard</h1>
      <p><strong>OLT IP:</strong> {ip}</p>
      <p><strong>Username:</strong> {username}</p>

      <label>Uplink Port:</label>
      <input type="text" placeholder="Uplink Port" value={uplinkPort} onChange={(e) => setUplinkPort(e.target.value)} />

      <label>Downlink Port:</label>
      <input type="text" placeholder="Downlink Port" value={downlinkPort} onChange={(e) => setDownlinkPort(e.target.value)} />

      <button onClick={connectPorts}>Connect Ports</button>

      <p>{message}</p>

      <button onClick={() => navigate("/")}>Back to Login</button>
    </div>
  );
}

export default Dashboard;
