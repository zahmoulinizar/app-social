import React from "react";
import './style.css'
const Post = () => {
  return (
    <div className="post">
      <div className="post_user_details">
        <div className="user_image">
          <img
            src="https://images.pexels.com/photos/18096084/pexels-photo-18096084/free-photo-of-homme-mains-appareil-photo-photographe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
        </div>
        <div className="user_name">
          <h5>Zahmouli nizar</h5>
          <span>14 hours ago</span>
        </div>
      </div>
      <div className="post_actions"></div>
      <div className="post_content_details">
        <p>
            Hello , this is my first .........
        </p>
      </div>
      <div className="post_buttons"></div>
    </div>
  );
};

export default Post;
