const EmployeeCard = ({ employee }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "6px",
      }}
    >
      <h3>{employee.name}</h3>
      <p><b>Designation:</b> {employee.designation}</p>
      <p><b>Department:</b> {employee.department}</p>
      <p><b>Date of Joining:</b> {employee.date_of_joining}</p>
    </div>
  );
};

export default EmployeeCard;
