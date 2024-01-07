import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
const NewPost = () => {
  return (
    <>
      <div className="new_post">
        <div className="new_post_details">
          <div className="new_post_profile_image">
            <img src="https://images.pexels.com/photos/16308653/pexels-photo-16308653/free-photo-of-mains-appareil-photo-porter-mise-au-point-selective.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="new_post_textbox">
            <textarea placeholder="whtat's in your mind ...."></textarea>
          </div>
        </div>
        <div className="new_post_buttons">
          <button><FontAwesomeIcon icon={faShare} /> Post it !</button>
        </div>
      </div>
    </>
  );
};

export default NewPost;
