import React, { useState } from "react";
import "./Form.css";
const Form = ({ onSubmitUser }) => {
  const [fName, setFname] = useState("");
  const [lName, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [apply, setApply] = useState("");
  const [errors, setErrors] = useState({});

  // error handling
  const newErrors = {};
  function errorHandler() {
    if (fName.length <= 1) {
      newErrors.name = "First name must be of 2 character or more";
    }
    if (lName.length <= 1) {
      newErrors.lastName = "Last name must be of 2 character or more";
    }
    if (apply.length <= 1) {
      newErrors.apply = "Position must be of at least 2 characters";
    }
    if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.startsWith("@") ||
      email.endsWith("@")
    ) {
      newErrors.emailId = "Enter valid email address";
    }
    setErrors(newErrors);
  }

  // submiting the form
  function handleSubmit(e) {
    e.preventDefault();

    errorHandler(e);

    let user = {
      name: fName,
      lastName: lName,
      emailId: email,
      position: apply,
    };

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    onSubmitUser(user);
  }

  return (
    <div className="form-container  h-100 w-150 bg-amber-50 text-black rounded-md shadow-2xl shadow-blue-500 relative">
      <h1 className="p-5 font-bold underline">Registration Form</h1>
      <form
        className="form flex flex-col gap-6 mt-1 p-3 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-20">
          <label className="flex flex-col text-left gap-0.5">
            First Name :
            <input
              className={`border ${errors.name ? "border-red-500" : "border-slate-400"}  rounded-sm w-42 p-1`}
              type="text"
              placeholder="Enter your first name"
              required
              value={fName}
              onChange={(e) => setFname(e.target.value)}
            ></input>
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 absolute top-35">
                {errors.name}
              </span>
            )}
          </label>
          {/* name error */}

          <label className="flex flex-col text-left gap-0.5">
            Last Name :
            <input
              className={`border ${errors.lastName ? "border-red-500" : "border-slate-400"}  rounded-sm w-42 p-1 relative`}
              type="text"
              placeholder="Enter your last name"
              required
              value={lName}
              onChange={(e) => setlname(e.target.value)}
            ></input>
            {errors.lastName && (
              <span className="text-red-500 text-sm mt-1 absolute top-35 left-75.5">
                {errors.lastName}
              </span>
            )}
          </label>
        </div>

        <div className="flex gap-20">
          <label className="flex flex-col text-left gap-0.5">
            Email Id
            <input
              className={`border ${errors.emailId ? "border-red-500" : "border-slate-400"}  rounded-sm w-42 p-1 relative`}
              type="text"
              placeholder="Enter your email id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {errors.emailId && (
              <span className="text-red-500 text-sm mt-1 absolute bottom-35 left-24">
                {errors.emailId}
              </span>
            )}
          </label>

          <label className="flex flex-col text-left gap-0.5">
            Applying for
            <input
              className={`border ${errors.apply ? "border-red-500" : "border-slate-400"}  rounded-sm w-42 p-1 relative`}
              type="text"
              placeholder="Enter the position applying for"
              required
              value={apply}
              onChange={(e) => setApply(e.target.value)}
            ></input>
            {errors.apply && (
              <span className="text-red-500 text-sm mt-1 absolute bottom-35 left-75.5">
                {errors.apply}
              </span>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-90 border rounded-md bg-red-500 text-white p-1.5 hover:bg-red-600 cursor-pointer absolute bottom-15"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
