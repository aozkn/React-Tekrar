import styled from "styled-components";

const Title = styled.h1`
  color: ${({ color }) => color || "black"};
  background-color: ${({ bgcolor }) => bgcolor || "transparent"};
`;

export default Title;
