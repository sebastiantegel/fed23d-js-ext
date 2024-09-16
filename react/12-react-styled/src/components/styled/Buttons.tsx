import styled from "styled-components";

interface IButtonProps {
  background: string;
  color: string;
  hoverColor: string;
}

export const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: grey;
`;

export const SecondaryButton = styled(Button)`
  background-color: antiquewhite;
  color: black;
`;

export const MagicButton = styled(Button)<IButtonProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
