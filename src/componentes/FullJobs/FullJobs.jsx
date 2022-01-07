import { useState, useEffect } from "react";
import Header from "../../componentes/Header/Header";
import Contact from "../../componentes/Contact/Contact";
import Footer from "../../componentes/Footer/Footer";
import Loading from "../../resources/svg/loading.svg";
import Select from "react-select";
import { useLocation } from "react-router-dom";

import "./Fulljobs.css";

function FullJobs() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch("https://api2.worcket.com/public/company/opportunitiesbyname/atento")
      .then(response => response.json())
      .then(data => {
        data = data.slice(0, 30);
        setFulljobs(data);
      });
  }, []);

  const values = [
    {
      value: "algo",
      label: "algo",
    },
    {
      value: "algo1",
      label: "algo1",
    },
    {
      value: "algo2",
      label: "algo2",
    },
  ];

  const ciudades = [
    { value: "Aguascalientes", label: "AguascalientesBaja" },
    { value: "Baja California", label: "Baja California" },
    { value: "Baja California Sur", label: "Baja California SurBaja" },
    { value: "Campeche", label: "Campeche" },
    { value: "Coahuila", label: "Coahuila" },
    { value: "Colima", label: "Colima" },
    { value: "Chiapas", label: "Chiapas" },
    { value: "Chihuahua", label: "Chihuahua" },
    { value: "Durango", label: "Durango" },
    { value: "Distrito Federal", label: "Distrito Federal" },
    { value: "Guanajuato", label: "Guanajuato" },
    { value: "Guerrero", label: "Guerrero" },
    { value: "Hidalgo", label: "Hidalgo" },
    { value: "Jalisco", label: "Jalisco" },
    { value: "México", label: "México" },
    { value: "Michoacán", label: "Michoacán" },
    { value: "Morelos", label: "Morelos" },
    { value: "Nayarit", label: "Nayarit" },
    { value: "Nuevo León", label: "Nuevo" },
    { value: "Oaxaca", label: "Oaxaca" },
    { value: "Puebla", label: "Puebla" },
    { value: "Querétaro", label: "Querétaro" },
    { value: "Quintana Roo", label: "Quintana Roo" },
    { value: "San Luis Potosí", label: "San Luis Potosi" },
    { value: "Sinaloa", label: "Sinaloa" },
    { value: "Sonora", label: "Sonora" },
    { value: "Tabasco", label: "Tabasco" },
    { value: "Tamaulipas", label: "Tamaulipas" },
    { value: "Tlaxcala", label: "Tlaxcala" },
    { value: "Veracruz", label: "Veracruz" },
    { value: "Yucatán", label: "Yucatán" },
    { value: "Zacatecas", label: "Zacatecas" },
  ];

  const mappedCiudades = ciudades.map(ciudad => {
    return {
      value: ciudad.value.toLowerCase(),
      label: ciudad.label,
    };
  });

  const customStyles = {
    dropdownIndicator: () => ({
      display: "none",
    }),
    menuList: () => ({
      maxHeight: 200,
      overflow: "hidden",
    }),
    valueContainer: values => ({
      ...values,
      fontSize: "30px",
      padding: "13px",
      borderWidth: "0px",
      borderBottom: "4px solid white",
      backgroundColor: "#E4E4E4",
    }),
  };

  return (
    <div className="CC-fulljobs">
      <div className="fulljobs-buscador">
        <Select
          className="select-city"
          isClearable
          openMenuOnClick={false}
          openMenuOnFocus={false}
          options={mappedCiudades}
          pageSize={5}
          placeholder="Buscar"
          styles={customStyles}
          value={selectedCity}
          onChange={setSelectedCity}
          onInputChange={setCity}
        />
      </div>
      <div className="fulljobs-container">
        {fulljobs.length > 0 ? (
          fulljobs.map(job => {
            return (
              <div className="fulljobs-card" key={job.id}>
                <div className="fulljobs-image">
                  <img
                    className="fj-img-card"
                    width="400px"
                    src={job.companyLogo}
                    alt="companyLogo"
                  />
                </div>
                <div className="text-card-container">
                  <h3 className="title-card-fj">{job.title}</h3>
                  <h5 className="city-card-fj">
                    {job.geolocations.length > 0
                      ? job.geolocations[0].display_name
                      : null}
                  </h5>
                  <h5 className="type-card-fj">
                    {job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1)}
                  </h5>
                </div>
                <button className="btn-card-fj">APLICAR</button>
              </div>
            );
          })
        ) : (
          <img width="50px" src={Loading} alt="loading" />
        )}{" "}
      </div>
    </div>
  );
}

export default FullJobs;
