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
  padding: 0;
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
  margin: 1.5em 0 1.5em 1.5em;
`;

export const StyledMenuIcon = styled(Image)`
  margin: 1.5em 1.5em 1.5em 0;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
