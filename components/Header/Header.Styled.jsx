import styled from "styled-components";
import Image from "next/image";

export const StyledHeader = styled.header`
  background-color: var(--secondary-background-color);
`;

export const StyledHeaderInner = styled.div`
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--main-padding-sides);
  margin: auto;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledBrand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBrandImage = styled(Image)`
  margin: 1.5em 0;
`;

export const StyledBrandButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const StyledMenuIcon = styled(Image)`
  margin: 1.5em 0;
  cursor: pointer;
  transform: ${(props) => (props.$active ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
