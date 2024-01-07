import React from "react"
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquarePlus ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
  <>
    <div className="navbar">
        <div className="navbar_left">
            <b>DARK SPACE</b>

        </div>
        <div className="navbar_right">
            <div className="navbar_profile_search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="gray small" />
                <input type="text" placeholder="Search....."/>
            </div>
            <button className="navbar_profile_button">
            <FontAwesomeIcon icon={faSquarePlus}  /> Create
            </button>

            <div  className="navbar_profile_image">
                <img src='https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=2048x2048&w=is&k=20&c=MjMsoqFYi0ZExcPB588mOu04dBGiQoOQbI27AFy6HZc=' alt="img"/>
            </div>
        </div>
        
    
    </div>
  </>
  )
};
export default Navbar ;
