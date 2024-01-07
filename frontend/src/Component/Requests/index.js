import React from "react";
import "./style.css";
import Request from "./Request";
const Requests = () => {
  const requests = [
    {
      username: "Nizar",
      profile_image:
        "https://images.pexels.com/photos/10061611/pexels-photo-10061611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "ALi",
      profile_image:
        "https://images.pexels.com/photos/15486860/pexels-photo-15486860/free-photo-of-homme-appareil-photo-photographe-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "nermine",
      profile_image:
        "https://images.pexels.com/photos/16308653/pexels-photo-16308653/free-photo-of-mains-appareil-photo-porter-mise-au-point-selective.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="requests">
      <div className="requests_title">
        <h4>requests</h4>
        <h4 className="request_number">5</h4>
      </div>
      {requests.map((req) => (
        <Request data={req} />
      ))}
    </div>
  );
};

export default Requests;
