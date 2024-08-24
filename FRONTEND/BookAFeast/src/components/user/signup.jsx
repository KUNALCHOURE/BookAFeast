import React from "react";
import './signup.css'
export default function Signup(){
    return (
    <form className="signup-form">
    <h2><b>Sign Up</b></h2>
    <div className="form-group">
      <label htmlFor="name">User Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
      />
    </div>
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
    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
      />
    </div>
    <button type="submit">Sign Up</button>
  </form>
    )

}