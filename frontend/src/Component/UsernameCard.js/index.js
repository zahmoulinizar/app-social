import React from "react";
import "./style.css";

const UsernameCard = (props) => {
  return (
    <>
      <div className="username_card">
        <div className="username_card_image">
          {props.user?.picture == "" ? (
            <h3 className="profile_caractere"> {props.user?.firstName[0]}</h3>
          ) : (
            <img src="https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=2048x2048&w=is&k=20&c=MjMsoqFYi0ZExcPB588mOu04dBGiQoOQbI27AFy6HZc=" />
          )}
        </div>
        <div className="username_card_info">
          <h3 className="username">
            {props.user?.firstName + " " + props.user?.lastName}
          </h3>
          <span className="small">@nizarzahmouli</span>
        </div>
      </div>
    </>
  );
};
export default UsernameCard;
