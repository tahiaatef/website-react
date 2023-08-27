import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      navigate('/')
    } else {
       return `<h2>error</h2>` ;     
    }
  };

  return (
    <div className="container ">
            <div className="row justify-content-center my-2">
      <div className="col-7">

      <h2 className='text-center'>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
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
        <button type="submit" className="btn btn-primary">Log In</button>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Login;
