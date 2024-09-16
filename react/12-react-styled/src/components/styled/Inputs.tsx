import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 10px;
`;

export const Password = styled(Input).attrs(() => ({
  type: "password",
}))``;
