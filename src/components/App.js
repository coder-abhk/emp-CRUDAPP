import React, { useState } from "react";
import DataView from "./DataView";
import Form from "./Form";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)

  const onSubmitHandler = (e) => {
    async function postHandler() {
      await axios
        .post("http://localhost:5000/emp_data", {
          name: name,
          age: age,
          role: role,
          salary: salary,
        })
        .then((res) => res)
        .catch((err) => console.error(err));
    }
    postHandler();
    setName("");
    setAge("");
    setRole("");
    setSalary("");
  };

  const onShowHandler = () => {
    async function getHandler() {
      await axios
        .get("http://localhost:5000/get_data")
        .then((res) => {
          setData(res.data)
        })
        .catch((err) => console.error(err));
    }
    getHandler();
  };
  return (
    <div className="container">
      <div className="form">
        <Form
          name={name}
          age={age}
          role={role}
          salary={salary}
          setName={setName}
          setAge={setAge}
          setRole={setRole}
          setSalary={setSalary}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
      <div className="data__view">
        <DataView toggle={toggle} setToggle={setToggle} data={data} onShowHandler={onShowHandler} />
      </div>
    </div>
  );
};

export default App;
