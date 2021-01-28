import React from "react";

const DataView = ({
  onShowHandler,
  updateHandler,
  data,
  toggle,
  setToggle,
  setNewSalary,
  onDeleteHandler,
}) => {
  return (
    <div className="container">
      <button
        className="btn btn-sm btn-outline-dark"
        onClick={() => {
          onShowHandler();
          toggle ? setToggle(false) : setToggle(true);
        }}
      >
        Show data
      </button>
      <div className="mt-5">
        {data.map((d) => (
          <div
            key={d.emp_id}
            className={`card p-3 mb-3 bg-primary`}
            style={toggle ? { display: "block" } : { display: "none" }}
          >
            <h3 className="card-header mb-2 text-warning">
              Employee: {d.name}
            </h3>
            <p className="card-content text-light">Age: {d.age}</p>
            <p className="card-content text-light">Role: {d.role}</p>
            <p className="card-content text-light">Salary: {d.salary}</p>
            <input
              className="border border-1 border-primary rounded-1 p-1"
              type="number"
              placeholder="update salary"
              onChange={(e) => {
                if (e.currentTarget) {
                  setNewSalary(e.target.value);
                }
                e.preventDefault();
              }}
            />
            <br />
            <button
              className="btn btn-sm btn-dark mt-2"
              onClick={() => {
                updateHandler(d.emp_id);
              }}
            >
              Update
            </button>
            <span className="m-1"></span>
            <button
              className="btn btn-sm btn-danger mt-2"
              onClick={() => {
                onDeleteHandler(d.emp_id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataView;
