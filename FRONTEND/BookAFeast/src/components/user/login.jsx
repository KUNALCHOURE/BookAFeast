import React from "react";
import './login.css';
export default function Login(){
    return(
        <form className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    )
}