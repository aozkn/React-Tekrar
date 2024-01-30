import styled, { css } from "styled-components";
// import {Link} from "react-router-dom"
// const A = styled.Link`
//   /* ... */
// `;

// export default A;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 50px;
  color: #0ecfcf;
  &:hover {
    color: #852b30;
  }
  ${({ react }) =>
    react &&
    css`
      background-color: black;
      color: turquoise;
      font-size: 40px;
      padding: 0.5rem;
      border-radius: 20px;
      margin: auto;
      &:hover {
        opacity: 0.5;
        transition: opacity 1s ease-in-out;
      }
    `}
`;

export default StyledLink;
