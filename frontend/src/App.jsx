import { useEffect, useState } from "react";
import SearchBar from "./components/searchBar";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setEmployees([]);
      setError("");
      return;
    }

    const timer = setTimeout(() => {
      fetchEmployees(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchEmployees = async (search) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `http://127.0.0.1:8000/employees?search=${encodeURIComponent(search)}`
      );

      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      setEmployees(data);
    } catch {
      setError("Failed to fetch employees");
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Employee Directory</h1>

      <SearchBar query={query} setQuery={setQuery} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
