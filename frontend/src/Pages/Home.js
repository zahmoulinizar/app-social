import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import UsernameCard from "../Component/UsernameCard.js";
import Sidebar from "../Component/Sidebar";
import Stories from "../Component/Stories";
import Requests from "../Component/Requests";
import Posts from "../Component/Posts";

const Home = () => {
  const [connectedUser, setConnectedUser] = useState();
  const navigate = useNavigate();

  const getConnectedUserData = () => {
    setConnectedUser(JSON.parse(localStorage.getItem("user_data")));

    if (localStorage.getItem("user_data") == null) {
      // redirection vers la page login
      navigate("/login");
    }
  };
  useEffect(() => {
    getConnectedUserData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="layout-app">
        {/* left box */}
        <div style={{width:"25%"}}>
          <UsernameCard user={connectedUser} />
          <Sidebar />
        </div>
        {/* Middle box */}
        <div style={{width:"50%"}}>
          <Stories/>
          <Posts/>
        </div>
        {/* right  box */}
        <div style={{width:"25%"}}>
          <Requests/>
        </div>
      </div>
    </>
  );
};

export default Home;
