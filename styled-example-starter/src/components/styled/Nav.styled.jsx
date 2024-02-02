import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default StyledNav;
