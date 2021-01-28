import React, { useState } from "react";
import DataView from "./DataView";
import Form from "./Form";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [newSalary, setNewSalary] = useState("");

  const onSubmitHandler = (e) => {
    async function postHandler() {
      await axios
        .post("/emp_data", {
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
        .get("/get_data")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    getHandler();
  };

  const updateHandler = (id) => {
    async function update() {
      await axios
        .put("/update", { newSalary: newSalary, id: id })
        .then((res) => res)
        .catch((err) => console.log(err));
    }
    update();
    setData(
      data.map((d) => {
        return d.emp_id === id
          ? {
              emp_id: d.emp_id,
              name: d.name,
              age: d.age,
              role: d.role,
              salary: newSalary,
            }
          : d;
      })
    );
    setNewSalary("");
  };

  const onDeleteHandler = (id) => {
    async function deleteHandler(){
     await axios
      .delete(`/delete/${id}`)
      .then((res) => console.log("deleted!"))
      .catch((err) => {
        console.log(err);
      });
  } deleteHandler()

  setData(data.filter(d=>{
    return (d.emp_id !== id)
  }))
}
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
        <DataView
          toggle={toggle}
          setToggle={setToggle}
          data={data}
          newSalary={newSalary}
          setNewSalary={setNewSalary}
          onShowHandler={onShowHandler}
          updateHandler={updateHandler}
          onDeleteHandler={onDeleteHandler}
        />
      </div>
    </div>
  );
};

export default App;
