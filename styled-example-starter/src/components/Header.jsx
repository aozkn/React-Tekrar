import React from "react";
import HeaderStyled from "./styled/Header.styled";
import StyledButton from "./styled/Button.styled";
import ImageStyled from "./styled/Image.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h1>The IT Career of Your Dreams Starts Here!</h1>
        <p>
          Clarusway is a leading international software Bootcamp. Join a micro
          class online with other trainees and learn coding skills with a
          highly-skilled instructor.
        </p>
        <StyledButton primary>Start Your New Carier</StyledButton>
      </div>
      <ImageStyled src="./images/hero.jpg" />
    </HeaderStyled>
  );
};

export default Header;
