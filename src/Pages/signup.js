import React, { useState } from "react";
import NotValid from "../components/notValid";
import { changeHandler } from "../Validations/validation";
export default function Signup() {
  const [allfields, setAllfiels] = useState(false);

  const [userDetail, setuserDetail] = useState({
    username: { val: "", isValid: false, errInfo: "enter user name" },
    email: { val: "", isValid: false, errInfo: "enter email" },
    phone: { val: "", isValid: false, errInfo: "enter phone" },
    password: { val: "", isValid: false, errInfo: "enter password" },
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let allFields = Object.keys(userDetail).filter(
      (data) => !userDetail[data].val === true
    );
    let valid = Object.keys(userDetail).filter((data) => {
      return userDetail[data].isValid === true;
    });

    console.log(valid);
    if (allFields.length) {
      setAllfiels(true);
      return;
    }
    if (valid.length) return;
    
    // api call here 
    console.log("apiii calll here ");
  };
  return (
    <section
      style={{
        backgroundImage: `url("https://www.kindpng.com/picc/m/87-874727_colored-smoke-transparent-background-page-transparent-transparent-background.png")`,
        display: "grid",
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
          padding: "30px",
        }}
      >
        {allfields ? <NotValid errInfo={"Please Fill all the fields"} /> : null}
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            value={userDetail?.username?.val}
            name="username"
            onChange={(e) => changeHandler(e, userDetail, setuserDetail)}
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
          />
          {userDetail?.username?.isValid ? (
            <NotValid errInfo={userDetail?.username?.errInfo} />
          ) : null}
        </div>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={userDetail?.email?.val}
            onChange={(e) => changeHandler(e, userDetail, setuserDetail)}
            name="email"
            type="email"
            className="form-control"
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
          <label htmlFor="exampleInputPassword1">Phone</label>
          <input
            val={userDetail?.phone?.val}
            onChange={(e) => changeHandler(e, userDetail, setuserDetail)}
            name="phone"
            type="number"
            className="form-control"
            id="phone"
            placeholder="phone"
          />
          {userDetail.phone.isValid ? (
            <NotValid errInfo={userDetail?.phone?.errInfo} />
          ) : null}{" "}
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
        <button
          type="submit"
          className="btn btn-primary "
          onClick={handleSubmitForm}
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
