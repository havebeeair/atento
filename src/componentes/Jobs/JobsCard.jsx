import React from "react";

function JobsCard(props) {
  return (
    <>
      <div className="jobs-card">
        <img src={props.img || props.logo} alt="" />
        <div>
          <h3>{props.title}</h3>
          <h5>
            {props.location.length > 0 ? props.location[0].display_name : null}
          </h5>
          <a
            href={`https://apply.worcket.com/?id=${props.id}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver más
          </a>
        </div>
      </div>
    </>
  );
}

export default JobsCard;
