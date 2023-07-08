import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);

  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let isLogged = await actions.login(email, password);
    if (isLogged) {
      navigate("/dashboard");
    }
  }

  return (
    <div className="container-fluid h-screen d-flex align-items-center justify-content-center">
      <div className="col-sm-6 bg-gray-800">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-100 p-4 rounded-lg bg-gray-900"
        >
          <h2 className="text-4xl text-white font-bold text-center mb-4">
            Log in
          </h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-lg bg-gray-700 mt-2"
              id="email"
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-lg bg-gray-700 mt-2"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div className="d-flex justify-content-between text-white mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />
              <label className="form-check-label text-white" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-4">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
