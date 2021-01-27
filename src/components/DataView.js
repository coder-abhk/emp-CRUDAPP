import React from "react";

const DataView = ({ onShowHandler, data, toggle, setToggle}) => {
  return (
    <div className="container">
      <button
        className="btn btn-sm btn-outline-dark"
        onClick={() => {
          onShowHandler();
          toggle?setToggle(false):setToggle(true)
        }}
      >
        Show data
      </button>
      <div className="container mt-5">
        {data.map((d) => (
          <div key={d.emp_id} className={`card p-3 mb-3 bg-primary`} style={toggle?{display:"block"}:{display:"none"}}>
            <h3 className="card-header mb-2 text-warning">Employee: {d.name}</h3>
            <p className="card-content text-light">Age: {d.age}</p>
            <p className="card-content text-light">Role: {d.role}</p>
            <p className="card-content text-light">Salary: {d.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataView;
