import React from "react";

const Form = ({
  name,
  age,
  role,
  salary,
  setName,
  setAge,
  setRole,
  setSalary,
  onSubmitHandler,
}) => {
  return (
    <div className="container mt-2">
      <h1>Add employee data</h1>
      <hr />
      <label className="text-dark">Name:</label>
      <br />
      <input
        className="border border-1 border-primary rounded-1"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label className="text-dark mt-2">Age:</label>
      <br />
      <input
        className="border border-1 border-primary rounded-1"
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br />
      <label className="text-dark mt-2">Role:</label>
      <br />
      <input
        className="border border-1 border-primary rounded-1"
        type="text"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />
      <br />
      <label className="text-dark mt-2">Salary:</label>
      <br />
      <input
        className="border border-1 border-primary rounded-1"
        type="number"
        value={salary}
        onChange={(e) => {
          setSalary(e.target.value);
        }}
      />
      <br />
      <input
        onClick={(e) => {
          onSubmitHandler();
        }}
        className="btn btn-sm btn-primary mt-3 mb-2"
        type="submit"
        value="Submit"
      />
      <hr />
    </div>
  );
};

export default Form;
