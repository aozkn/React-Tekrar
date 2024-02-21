import React, { memo } from "react";

const TaxComp = ({ dataState }) => {
  console.log("render=> taxData comp.");
  return <div>TaxComp</div>;
};

export default memo(TaxComp);
