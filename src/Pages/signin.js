import React, { useState } from "react";
import NotValid from "../components/notValid";
import { changeHandler } from "../Validations/validation";

export default function Signin() {
  const [userDetail, setuserDetail] = useState({
    email: { val: "", isValid: false, errInfo: "enter email" },   
    password: { val: "", isValid: false, errInfo: "enter password" },
  });

  const handleSignin =()=>{
    console.log("sign in")
  }

  return (
    <section
      style={{
        backgroundImage: `url("https://www.kindpng.com/picc/m/87-874727_colored-smoke-transparent-background-page-transparent-transparent-background.png")`,
        display: "grid",
        height: "100vh",
        width:"100%",
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        placeItems: "center",
        backgroundColor: "#ffff",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "350px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding:'30px'
        }}
      >
        <h2 style={{ margin: 0 }}>SIGN IN</h2>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={userDetail?.email?.val}
            onChange={(e) => changeHandler(e, userDetail, setuserDetail)}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {userDetail.email.isValid ? (
            <NotValid errInfo={userDetail?.email?.errInfo} />
          ) : null}{" "}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={userDetail?.password?.val}
            onChange={(e) => changeHandler(e, userDetail, setuserDetail)}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {userDetail?.password?.isValid ? (
            <NotValid
              errInfo={userDetail?.password?.errInfo || "enter valid detail"}
            />
          ) : null}{" "}
        </div>
        <button type="submit" className="btn btn-primary " onClick={handleSignin}>
          Sign In
        </button>
      </form>
    </section>
  );
}
