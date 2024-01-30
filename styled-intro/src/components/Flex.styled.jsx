import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  max-width: 1000px;
  margin: auto;
  background-color: ${(props) => props.bg || "transparent"};
  /* background-color: ${({bg}) => bg || "transparent"}; */
`;

export default Flex;
