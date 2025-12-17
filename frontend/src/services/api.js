const API_URL = "http://127.0.0.1:8000";

export async function searchEmployees(query) {
  const res = await fetch(`${API_URL}/employees?search=${query}`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}
