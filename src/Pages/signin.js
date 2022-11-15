import React from 'react'

export default function Signin() {
  return (
    <section style={{ display: "grid", height: "100vh", placeItems: "center" ,backgroundColor:'#ffff' }} >
    <form style={{ display: "flex", flexDirection: "column", gap: "15px" ,width:'400px'}}>
    <h2 style={{margin:0}}>SIGN IN</h2>
      <div >
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary w-25">
        Sign In
      </button>
    </form>
  </section>
  )
}
