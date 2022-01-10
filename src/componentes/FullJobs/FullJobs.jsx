import { useState, useEffect } from "react";
import Header from "../../componentes/Header/Header";
import Contact from "../../componentes/Contact/Contact";
import Footer from "../../componentes/Footer/Footer";
import Loading from "../../resources/svg/loading.svg";
import Search from "../../resources/iconos/search.svg";
import AtentoLogoVacante from "../../resources/iconos/Atento-logo-vacante.svg";
import Select from "react-select";
import MobileMenu from "../Header/MobileMenu";
import "../Header/header.css";
import { useLocation, Link } from "react-router-dom";

import "./Fulljobs.css";

function FullJobs() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <FullJobsHeader />
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
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api2.worcket.com/public/company/opportunitiesbyname/atento")
      .then(response => response.json())
      .then(data => {
        let jobsmexico = data.filter(job => {
          return job.companyName === "Atento México";
        });
        setData(jobsmexico);
      });
  }, []);

  useEffect(() => {
    if (selectedCity) {
      let filterCity = data.filter(city => {
        if (city.geolocations.length > 0) {
          return city.geolocations[0].display_name
            .toLowerCase()
            .includes(selectedCity.value.toLowerCase());
        }
      });
      console.log();
      setFilteredJobs(filterCity);
    } else {
      setFilteredJobs(data);
    }
  }, [selectedCity]);

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
    { value: "Aguascalientes", label: "Aguascalientes" },
    { value: "Baja California", label: "Baja California" },
    { value: "Baja California Sur", label: "Baja California Sur" },
    { value: "Campeche", label: "Campeche" },
    { value: "Coahuila", label: "Coahuila" },
    { value: "Colima", label: "Colima" },
    { value: "Chiapas", label: "Chiapas" },
    { value: "Chihuahua", label: "Chihuahua" },
    { value: "Durango", label: "Durango" },
    { value: "Ciudad de México", label: "Ciudad de México" },
    { value: "Distrito Federal", label: "Distrito Federal" },
    { value: "Guanajuato", label: "Guanajuato" },
    { value: "Guerrero", label: "Guerrero" },
    { value: "Hidalgo", label: "Hidalgo" },
    { value: "Jalisco", label: "Jalisco" },
    { value: "Michoacán", label: "Michoacán" },
    { value: "Morelos", label: "Morelos" },
    { value: "Nayarit", label: "Nayarit" },
    { value: "Nuevo León", label: "Nuevo León" },
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
      {data.length > 0 && (
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
          {!selectedCity && (
            <img className="search" height="40px" src={Search} alt="search" />
          )}
        </div>
      )}
      <div className="fulljobs-container">
        {data.length > 0 ? (
          selectedCity ? (
            filteredJobs.length > 0 ? (
              filteredJobs.map(job => {
                return <Vacante key={job.id} job={job} />;
              })
            ) : (
              <h2>No hay coincidencias con su búsqueda</h2>
            )
          ) : (
            data.map(job => {
              return <Vacante key={job.id} job={job} />;
            })
          )
        ) : (
          <img width="50px" src={Loading} alt="loading" />
        )}
      </div>
    </div>
  );
}

function Vacante({ job }) {
  return (
    <div className="fulljobs-card" key={job.id}>
      <div className="fulljobs-image">
        <img
          className="fj-img-card"
          width="400px"
          src={job.image || job.companyLogo}
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
      <a
        href={`https://apply.worcket.com/?id=${job.id}`}
        rel="noopener noreferrer"
        target="_blank">
        <button className="btn-card-fj">APLICAR</button>
      </a>
    </div>
  );
}

function FullJobsHeader() {
  const [open, setOpen] = useState(false);

  const styles = {
    display: "flex",
    color: "white",
    width: "100%",
  };
  const plus = {
    color: "orange",
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "66%",
    textAlign: "center",
  };
  return (
    <div className="header-container">
      <div className="atento-title" style={styles}>
        <Link to="/">
          <img src={AtentoLogoVacante} alt="Atento logo" />
        </Link>
        <div style={center}>
          <div>
            <h3>
              Encuentra <span style={plus}>+</span>
            </h3>
            <h2>de lo que buscas!</h2>
            <MobileMenu open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullJobs;
