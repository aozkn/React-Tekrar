import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const PersonDetail = () => {
  // let { state: person } = useLocation();
  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  let navigate = useNavigate();
  //   console.log(state);
  // console.log(person);
  let { id } = useParams();
  console.log(id);
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const [person, setPerson] = useState({});
  const getPerson = () => {
    axios(`https://reqres.in/api/users/${id}`)
      .then((res) => setPerson(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />

      <p>{person?.email}</p>
      <div>
        <button className="btn btn-success m-3" onClick={() => navigate("/")}>
          Go Home
        </button>
        <button className="btn btn-warning m-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
