import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [full_name, setFullName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkConditions, setCheckConditions] = useState(false)

  const { actions } = useContext(Context)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkConditions && full_name && dni && email && password) {
      let isLogged = await actions.createUser(full_name, dni, email, password);
      if (isLogged) {
        setFullName("");
        setDni("");
        setEmail("");
        setPassword("");
        navigate("/");
      }
    }
  };


  return (
    <div className="container-fluid h-screen d-flex align-items-center justify-content-center">
      <div className="col-sm-6 bg-gray-800">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-100 p-4 rounded-lg bg-gray-900"
        >
          <h2 className="text-4xl text-white font-bold text-center mb-4">
            Sign Up
          </h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
              className="form-control rounded-lg bg-gray-700 mt-2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label text-white">
              DNI:
            </label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="form-control rounded-lg bg-gray-700 mt-2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-lg bg-gray-700 mt-2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-lg bg-gray-700 mt-2"
              required
            />
          </div>
          <div className="m-3 form-check ">
          <input type="checkbox" className="form-check-input" id="checkConditions" onChange={e => setCheckConditions(e.target.checked)} />
                      <label className="form-check-label" htmlFor="checkConditions">I agree to the terms of service.</label>
                    </div>

          <button  
          type="submit"
          className="btn btn-primary w-100 mt-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
