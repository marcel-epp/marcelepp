import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--secondary-background-color);
`;

export const StyledHeaderInner = styled.div`
  max-width: var(--max-width);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: auto;
  img {
    margin: 1.5em 0 1.5em 1.5em;
  }
`;
