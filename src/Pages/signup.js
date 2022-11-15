import React, { useState } from "react";
import NotValid from "../Validations/notValid";
export default function Signup() {
  const [allvalues, setAllvalues] = useState({
    username: { val: "", isValid: false, errInfo: "enter user name" },
    email: { val: "", isValid: false, errInfo: "enter email" },
    phone: { val: "", isValid: false, errInfo: "enter phone" },
    password: { val: "", isValid: false, errInfo: "enter password" },
    // confirm_password: { val: '', isValid: false,errInfo:'enter user name' }
  });
  const changeHandler = (e) => {
    let key = e.target.name;
    let val = e.target.value?.trim();
    let isValid = true;
    switch (key) {
      case "username":
        if (val?.length) isValid = false;
        else isValid = true;
        setAllvalues({
          ...allvalues,
          [key]: { val, isValid, errInfo: "enter user name" },
        });
        break;
      case "email":
        if (val?.length && /\S+@\S+\.\S+/.test(val)) isValid = false;
        else isValid = true;
        setAllvalues({
          ...allvalues,
          [key]: { val, isValid, errInfo: "enter email" },
        });
        break;
      case "password":
        if (val?.length && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(val))
          isValid = false;
        else isValid = true;
        console.log(isValid);
        setAllvalues({
          ...allvalues,
          [key]: { val, isValid, errInfo: "enter password" },
        });
        break;
      case "phone":
        if (val?.length && /^\d{10}$/.test(val)) isValid = false;
        else isValid = true;
        console.log(isValid);
        isValid = true;
        setAllvalues({
          ...allvalues,
          [key]: { val, isValid, errInfo: "enter phone no." },
        });
        break;
      // case 'confirm_password':
      //     console.log(key, val?.length);

      //     if (val?.length && val === allvalues.password.val)
      //         isValid = false;
      //     setAllvalues({ ...allvalues, [key]: { val, isValid } })
      //     break;
      default:
        break;
    }
  };
  console.log("first", allvalues);

  const handleSubmitForm = (e) => {};

  return (
    <section
      style={{
        display: "grid",
        height: "100vh",
        placeItems: "center",
        backgroundColor: "#ffff",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input
            value={allvalues?.username?.val}
            name="username"
            onChange={(e) => changeHandler(e)}
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
          />
          {allvalues.username.isValid ? (
            <NotValid errInfo={allvalues.username.errInfo} />
          ) : null}
        </div>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={allvalues?.email?.val}
            onChange={(e) => changeHandler(e)}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          {allvalues.email.isValid ? (
           ( <NotValid errInfo={allvalues?.email?.errInfo} />)
          ) : null}{" "}
          
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Phone</label>
          <input
            val={allvalues?.phone?.val}
            onChange={(e) => changeHandler(e)}
            name="phone"
            type="number"
            className="form-control"
            id="phone"
            placeholder="phone"
          />
          {allvalues.phone.isValid ? (
           ( <NotValid errInfo={allvalues?.phone?.errInfo} />)
          ) : null}{" "}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={allvalues?.password?.val}
            onChange={(e) => changeHandler(e)}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {allvalues?.password?.isValid ? (
           ( <NotValid errInfo={allvalues?.password?.errInfo || "enter valid detail"} />)
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
