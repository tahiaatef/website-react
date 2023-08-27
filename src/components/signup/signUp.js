import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    navigate('/login')
  };
  return (
    <div className="container">
      <div className="row justify-content-center my-2">
      <div className="col-7">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <p className="mt-3">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Signup;
