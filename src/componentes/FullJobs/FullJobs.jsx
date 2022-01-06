import { useState, useEffect } from "react";
import Header from "../../componentes/Header/Header";
import Contact from "../../componentes/Contact/Contact";
import Footer from "../../componentes/Footer/Footer";
import Loading from "../../resources/svg/loading.svg"
import "./Fulljobs.css";

function FullJobs() {
  return (
    <div>
      <Header />
      <FullJobsCard />
      <Contact />
      <Footer />
    </div>
  );
}

function FullJobsCard() {
  const [fulljobs, setFulljobs] = useState([]);

  useEffect(() => {
    fetch("https://api2.worcket.com/public/company/opportunitiesbyname/atento")
      .then((response) => response.json())
      .then((data) => {
        data = data.slice(0, 30);
        setFulljobs(data);
      });
  }, []);

  return (
    <div className="CC-fulljobs">
      <div className="fulljobs-container">
        {fulljobs.length > 0
          ? fulljobs.map((job) => {
              return (
                <div className="fulljobs-card" key={job.id}>
                  <img
                    className="fj-img-card"
                    width="400px"
                    src={job.companyLogo}
                    alt="companyLogo"
                  />
                  <div className="text-card-container">
                    <h3 className="title-card-fj">{job.title}</h3>
                    <h5 className="city-card-fj">
                      {job.geolocations.length > 0
                        ? job.geolocations[0].display_name
                        : null}
                    </h5>
                    <h5 className="type-card-fj">
                      {job.jobType.charAt(0).toUpperCase() +
                        job.jobType.slice(1)}
                    </h5>
                  </div>
                  <button className="btn-card-fj">APLICAR</button>
                </div>
              );
            })
          : <img src={Loading} alt="loading" />}{" "}
      </div>
    </div>
  );
}

export default FullJobs;
