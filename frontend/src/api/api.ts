const API_BASE = "https://quiz-app-production-393f.up.railway.app";

export async function getHealth() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json();
}
