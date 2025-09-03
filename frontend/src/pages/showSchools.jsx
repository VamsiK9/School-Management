import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/schools")
      .then(res => setSchools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="showschools-bg">
      <div className="schools-grid">
        {schools.map((school) => (
          <div key={school.id} className="school-card">
            <img src={`http://localhost:5000${school.image}`} alt={school.name} />
            <div className="info">
              <h3>{school.name}</h3>
              <p>{school.address}</p>
              <p>{school.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
