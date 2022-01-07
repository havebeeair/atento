import React from "react";

function JobsCard(props) {
  return (
    <>
      <div className="jobs-card">
        <img src={props.img} alt="" />
        <div>
          <h3>{props.title}</h3>
          <h5>Ciudad de México</h5>
          <a href="">Ver más</a>
        </div>
      </div>
    </>
  );
}

export default JobsCard;
