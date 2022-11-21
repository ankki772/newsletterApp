export const changeHandler = (e,userDetail,setuserDetail) => {
    let key = e.target.name;
    let val = e.target.value?.trim();
    let isValid = true;
    switch (key) {
      case "username":
        if (val?.length) isValid = false;
        else isValid = true;
        setuserDetail({
          ...userDetail,
          [key]: { val, isValid, errInfo: "enter user name" },
        });
        break;
      case "email":
        if (val?.length && /\S+@\S+\.\S+/.test(val)) isValid = false;
        else isValid = true;
        setuserDetail({
          ...userDetail,
          [key]: { val, isValid, errInfo: "enter email" },
        });
        break;
      case "password":
        if (val?.length && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(val))
          isValid = false;
        else isValid = true;
        console.log(isValid);
        setuserDetail({
          ...userDetail,
          [key]: { val, isValid, errInfo: "enter password" },
        });
        break;
      case "phone":
        if (val?.length && /^\d{10}$/.test(val)) isValid = false;
        else isValid = true;
        console.log(isValid);
        setuserDetail({
          ...userDetail,
          [key]: { val, isValid, errInfo: "enter phone no." },
        });
        break;
      // case 'confirm_password':
      //     console.log(key, val?.length);

      //     if (val?.length && val === userDetail.password.val)
      //         isValid = false;
      //     setuserDetail({ ...userDetail, [key]: { val, isValid } })
      //     break;
      default:
        break;
    }
  };