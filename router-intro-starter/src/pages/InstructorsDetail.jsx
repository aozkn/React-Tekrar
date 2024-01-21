import React from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

const InstructorsDetail = () => {
  //   let param = useParams();
  //* Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  //* yakalanan id'ye ait güncel veriler fetch yapılabilir
  let { id } = useParams();
  //* navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //* Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz

  console.log(id);
  //   console.log(param);

  let { state, pathname } = useLocation();
  console.log({ pathname });
  console.log({ state });
  return (
    <div className="p-3">
      <p>
        From useParam: I'm Instructor{" "}
        <span className="text-warning fw-bolder">{id}</span>
      </p>
      <p>
        From useLocation: I'm Instructor{" "}
        <span className="text-warning fw-bolder">{state?.name}</span>
      </p>
      <p>
        Our path is : <span className="text-warning fw-bolder">{pathname}</span>
      </p>
    </div>
  );
};

export default InstructorsDetail;
