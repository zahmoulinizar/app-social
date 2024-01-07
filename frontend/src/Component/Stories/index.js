import React from "react";
import "./style.css";
import Story from "./Storie";
const Stories = () => {
  const stories = [
    {
      username: "Ahmed",
      user_photo:
        "https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=2048x2048&w=is&k=20&c=MjMsoqFYi0ZExcPB588mOu04dBGiQoOQbI27AFy6HZc=",
      story_photo:
        "https://images.pexels.com/photos/2406875/pexels-photo-2406875.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "abir",
      user_photo:
        "https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=2048x2048&w=is&k=20&c=MjMsoqFYi0ZExcPB588mOu04dBGiQoOQbI27AFy6HZc=",
      story_photo:
        "https://media.istockphoto.com/id/160531133/photo/the-national-congress-in-buenos-aires-argentina.jpg?s=2048x2048&w=is&k=20&c=PG9_b_yB46gsrMnjcqfBVRQDA4vxE2hA_ldNAOcACKA=",
    },
    {
      username: "bilel",
      user_photo:
        "https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=2048x2048&w=is&k=20&c=MjMsoqFYi0ZExcPB588mOu04dBGiQoOQbI27AFy6HZc=",
      story_photo:
        "https://images.pexels.com/photos/17421343/pexels-photo-17421343/free-photo-of-ville-horizon-gratte-ciel-espagne.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "nizar",
      user_photo:
        "https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?s=2048x2048&w=is&k=20&c=MjMsoqFYi0ZExcPB588mOu04dBGiQoOQbI27AFy6HZc=",
      story_photo:
        "https://media.istockphoto.com/id/91703855/photo/trafalgar-square-fountain.jpg?s=2048x2048&w=is&k=20&c=29vyNbUXHBavu7ftF-IMqMMGOoi6a2RNJU47yAkXquA=",
    },
  ];
  return (
    <>
      <div className="stories">
        <Story type="new" />
        {stories.map((story) => (
          <Story type="old" data={story} />
        ))}
      </div>
    </>
  );
};

export default Stories;
