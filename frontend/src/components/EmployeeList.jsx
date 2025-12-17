import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees }) => {
  if (employees.length === 0) {
    return <p>No results</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;
