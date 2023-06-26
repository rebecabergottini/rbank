import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && email !== "" && password !== "") {
      actions.createUser(username, email, password);
      navigate("/login");
    } else {
      alert("Fill out all fields");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center text-center mt-5 align-items-center">
        <p className="d-flex justify-content-center"></p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label
              htmlFor="exampleFormControlInput1"
              className=" col-sm-4 col-form-label"
            >
              Username
            </label>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="exampleFormControlInput2"
              className=" col-sm-4 col-form-label"
            >
              Email
            </label>
            <div className="col-md-8">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
              Password
            </label>
            <div className="col-md-8">
              <input
                type="password"
                className="form-control"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              type="submit"
              onSubmit={() => actions.createUser}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;