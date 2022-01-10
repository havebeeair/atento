import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobsCard from "./JobsCard";
import Loading from "../../resources/svg/loading.svg";
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
        let jobsMexico = data.filter((job) => {
          return job.companyName === "Atento México";
        });

        jobsMexico = jobsMexico.slice(0, 8);
        setJobs(jobsMexico);
      });
  }, []);

  return (
    <div className="jobsContainer" id="trabajos">
      <h1 className="jobs-title">Trabaja con nosotros</h1>
      <div className="jobs-card-container">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobsCard
              id={job.id}
              img={job.image}
              logo={job.companyLogo}
              title={job.title}
              location={job.geolocations}
              key={job.id}
            />
          ))
        ) : (
          <img width="50px" src={Loading} alt="loading" />
        )}
      </div>
      <Link to="/vacantes">
        <button className="jobs-button">Conoce nuestras vacantes</button>
      </Link>
    </div>
  );
}

export default Jobs;
