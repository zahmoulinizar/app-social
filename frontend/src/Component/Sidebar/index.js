import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarDays,
  faGear,
  faHome,
  faPhotoFilm,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_menu">
        <a className="active">
          {" "}
          <FontAwesomeIcon className="me-3" icon={faHome} /> 
          <b>Home</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon className="me-3" icon={faUsers} /> 
          <b>People</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon className="me-3" icon={faPhotoFilm} />
          <b>Photos</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon className="me-3" icon={faCalendarDays} />
          <b>News Feed</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon className="me-3" icon={faUser} />
          <b>Profile</b>
        </a>
        <a>
          {" "}
          <FontAwesomeIcon className="me-3" icon={faGear} />
          <b>Settings</b>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
