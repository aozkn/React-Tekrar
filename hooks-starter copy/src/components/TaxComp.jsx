import React, { memo } from "react";

const TaxComp = ({ dataState }) => {
  console.log("render=> taxData comp.");
  console.log(dataState);
  return <div>TaxComp</div>;
};

export default memo(TaxComp);
