import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para enviar los datos de registro al servidor
    // utilizando fetch o axios

    // Resetear los campos del formulario
    setName('');
    setAddress('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container-fluid h-screen d-flex align-items-center justify-content-center">
      <div className="col-sm-6 bg-gray-800">
        <form onSubmit={handleSubmit} className="max-w-md w-100 p-4 rounded-lg bg-gray-900">
          <h2 className="text-4xl text-white font-bold text-center mb-4">Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control rounded-lg bg-gray-700 mt-2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label text-white">
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
          <button type="submit" className="btn btn-primary w-100 mt-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
