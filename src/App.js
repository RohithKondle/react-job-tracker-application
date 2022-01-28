import "./App.css";
import { useState } from "react";
import TableJob from "./TableDisplay/Table";
import Form from "./Form/Form";

const App = () => {
  const [jobs, setJobs] = useState([
    {
      name: "Rohith",
      job: "Dev",
    },
    {
      name: "Varun",
      job: "Colud",
    },
  ]);

  const submitHandler = (formData) => {
    console.log(formData);
    setJobs([...jobs, formData]);
  };

  const deleteHandler = (index) => {
    console.log(index);
    setJobs(
      jobs.filter((eachPerson, i) => {
        return i !== index;
      })
    );
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <Form formSubmitHandler={submitHandler} />
      <TableJob data={jobs} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
