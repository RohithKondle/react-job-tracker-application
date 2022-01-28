import { useState } from "react";
import "./Form.css";

const FormDisplay = (props) => {
  const [formData, setFormData] = useState({ name: "", job: "" });

  const nameChangeHandler = (event) => {
    setFormData({
      ...formData,
      name: event.target.value
    });
  };

  const jobRoleChangedHandler = (event) => {
    setFormData({
      ...formData,
      job: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.formSubmitHandler(formData);
    setFormData({
        name:"",
        job:""
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-job__controls">
      <div>
        <div className="new-job__control">
          <label>Name of Job Holder</label>
          <input type="text" value={formData.name} onChange={nameChangeHandler} />
        </div>

        <div className="new-job__control">
          <label>Job Role</label>
          <input type="text" value={formData.job} onChange={jobRoleChangedHandler} />
        </div>

        
          <br />
          <br />
          <button type="submit" className="button-3" role="button">
            Add Member
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormDisplay;
