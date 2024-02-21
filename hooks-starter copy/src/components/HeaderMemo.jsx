import React, { memo } from "react";

const HeaderMemo =  memo(() => {
  console.log("render=> headermemo");
  return <div className="text-center text-success">HeaderMemo Componenti</div>;
});

export default HeaderMemo;
