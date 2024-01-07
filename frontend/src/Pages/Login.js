import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UserService from "../Services/UserServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate =  useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const formValidation = () => {
    let status = true;
    const localErrors = {...errors };
    if (email === "") {
      localErrors.email = "email is required";
      status = false;
    }
    if (password === "" || password.length < 8) {
      localErrors.password = "password is required";
      status = false;
    }
    setErrors(localErrors);
    console.log(localErrors);
    return status;
  };
  const signin = async (e) => {
    e.preventDefault();
    console.log("login submited");
    
    if (formValidation()) {
      // form valide
      const data = {
        email: email,
        password: password,  
      };
      try {
        const response = await UserService.login(data);
        // save data localstorage
        localStorage.setItem('user_data', JSON.stringify(response.data.user))
        localStorage.setItem('token' , response.data.token)
        console.log(response.data.user);
        toast.success("Login successfully !");
        setEmail("");
        setPassword("");

        // redirection 
        navigate("/home")

      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    } else {
      console.log("form invalid");
    }
  };
  return (
    <div className="login">
      <Toaster />
      <div className="login-cover"></div>
      <div className="login-content">
        <div>
          <h1> Dark space</h1>
          <p> Dark space social media application </p>
        </div>
        <div className="regis">
          <form onSubmit={signin}>
            <div className="form-group">
              <label> Email </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <>
                {
                  errors.email !="" ? <div className="msg">
                  {errors.email}
                  </div> : ''
                }
              </>
            </div>
            <div className="form-group">
              <label> Password </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <>
                {
                  errors.password !="" ? <div className="msg">
                  {errors.password}
                  </div> : ''
                }
              </>
            </div>

            <button className="btn signin" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
