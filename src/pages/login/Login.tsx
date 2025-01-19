import React, { useState } from 'react';
import SERVER from '../../utils/server'
import './login.scss';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await SERVER.post("auth/login", { email, password });
      localStorage.setItem("currentUser", JSON.stringify(res?.data));
      window.location.replace('/')
    } catch (err: any) {
      console.log(err)
      setError(err?.response?.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Email</label>
        <input
          name="username"
          type="email"
          placeholder="user@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  )
}

export default Login;
