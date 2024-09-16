import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_MOBILE } from "./variables";

export const Wrapper = styled.section`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: blue;

  @media screen and (min-width: ${BREAKPOINT_MOBILE}) {
    background-color: red;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    background-color: transparent;
  }
`;
