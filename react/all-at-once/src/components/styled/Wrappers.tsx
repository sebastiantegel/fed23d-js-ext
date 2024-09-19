import styled from "styled-components";

interface IProductWrapperProps {
  selected: boolean;
}

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ProductWrapper = styled.div<IProductWrapperProps>`
  width: calc((100% / 3) - 1rem);
  display: flex;
  flex-direction: column;

  background-color: ${(props) => (props.selected ? "red" : "transparent")};
`;

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    max-width: 100%;
  }
`;
