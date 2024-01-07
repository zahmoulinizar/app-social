import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UserService from "../Services/UserServices";


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errors, setErrors] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    email: "",
    password: "",
    bio: "",
    birthdate: "",
  });

  const formValidation = () => {
    let status = true ;
    const localErrors = {...errors}
    if (firstName === "") {
      localErrors.firstName = "firstName is required";
      status = false ;
    }
    if (lastName === "") {
      localErrors.lastName = "lastName is required";
      status = false ;
    }
    if (email === "") {
      localErrors.email = "email is required";
      status = false ;
    }
    if (password === "" || password.length < 8) {
      localErrors.password = "password is required";
      status = false ;
    }
    setErrors(localErrors);
    console.log(localErrors);
    return status;
  };

  const register = async (e) => {
    e.preventDefault();
    console.log("form submited");
    console.log(
      "form data",
      firstName,
      lastName,
      email,
      password,
      bio,
      birthdate
    );
    if (formValidation()) {
      // form valide
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        bio: bio,
        birthdate: birthdate,
        picture: picture,
      };
      try {
        const response = await UserService.register(data);
        console.log(response);
        toast.success("Successfully created!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthdate("");
        setBio("");
      } catch (error) {
        console.log(error);
        toast.error("created failed");
      }
    } else {
      console.log('form invalid')
  }
}
  return (
    <div className="register">
      <div className="register-cover"></div>
      <div className="register-content">
        <div>
          <h1> Dark space</h1>
          <p> Dark space social media application </p>
        </div>
        <div className="regis">
          <form onSubmit={register}>
            <div className="form-group">
              <label> Firstname </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <>
              {
                errors.firstName !="" ? <div className="msg">
                  {errors.firstName}
                </div> : ''
              }
              </>
            </div>
            <div className="form-group">
              <label> Lastname</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
               <>
              {
                errors.lastName !="" ? <div className="msg">
                  {errors.lastName}
                </div> : ''
              }
              </>
            </div>
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

            <div className="form-group">
              <label> Bio </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label> Picture </label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label> Birthdate </label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <button className="btn signup" type="submit">
              Sign up
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
