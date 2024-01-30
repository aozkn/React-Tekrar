import styled from "styled-components";

export const Button = styled.button`
  background-color: #25aa58;
  color: white;
  border-radius: 20px;
  margin: 1rem;
  border: 2px solid hotpink;
  padding: 0.7rem 3rem;
  font-size: 1.3 rem;
  font-family: "Times New Roman", Times, serif;
  &:hover {
    cursor: pointer;
    transform: scale(0.75);
  }
`;
//?Extension
export const DarkButton = styled(Button)`
  background-color: black;
  color: red;
  border: none;
`;

export const OutlinedButton = styled.button`
  background-color: ${({ primary }) => (primary ? "white " : "hotpink")};
  color: ${({ primary }) => (primary ? "hotpink" : "white")};
  border-radius: 20px;
  margin: 1rem;
  border: 2px solid hotpink;
  padding: 0.7rem 3rem;
  font-size: 1.3 rem;
  font-family: "Times New Roman", Times, serif;
  &:hover {
    cursor: pointer;
    transform: scale(0.75);
  }
`;
