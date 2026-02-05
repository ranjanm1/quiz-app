import { useState } from "react";
import { getHealth } from "./api/api";

function App() {
  const [message, setMessage] = useState("");

  const checkBackend = async () => {
    const data = await getHealth();
    setMessage(JSON.stringify(data));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Quiz App – Test Connection</h1>

      <button onClick={checkBackend}>
        Check Backend Connection
      </button>

      <p>Response:</p>
      <pre>{message}</pre>
    </div>
  );
}

export default App;
