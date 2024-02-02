import React from "react";
import StyledNav from "./styled/Nav.styled";
import StyledButton from "./styled/Button.styled";

const Nav = () => {
  return (
    <StyledNav>
      <div>
        <img src="./images/logo.png" width="250px" alt="logo" />
      </div>
      <div>
        <StyledButton>Apply Courses</StyledButton>
        <StyledButton primary>Talk to Adviser</StyledButton>
      </div>
    </StyledNav>
  );
};

export default Nav;
