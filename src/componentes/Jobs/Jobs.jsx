import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import "./jobs.css";

function Jobs(props) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let petition = fetch(
      "https://api2.worcket.com/public/company/opportunitiesbyname/atento"
    );
    petition
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data = data.slice(0, 8);
        setJobs(data);
      });
  }, []);

  return (
    <div className="jobsContainer">
      <h1 className="jobs-title">Trabaja con nosotros</h1>
      <div className="jobs-card-container">
        {jobs.length > 0
          ? jobs.map((job) => (
              <JobsCard
                img={job.companyLogo}
                title={job.title}
                location={job.geolocations.display_name}
                key={job.id}
              />
            ))
          : "Loading"}
      </div>
      <button className="jobs-button">Conoce nuestras vacantes</button>
    </div>
  );
}

export default Jobs;
