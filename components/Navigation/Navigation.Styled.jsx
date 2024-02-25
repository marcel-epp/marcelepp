import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.nav`
  padding: 1em 0;
  display: ${(props) => (props.$active ? "block" : "none")};
  @media only screen and (min-width: 600px) {
    padding: 0;
    display: block;
  }
`;

export const StyledNavUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5em;
  list-style-type: none;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) =>
    props.$active ? "var(--secondary-color)" : "var(--primary-color)"};
  background-color: var(--secondary-background-color);
  display: block;
  font-weight: 600;
  text-decoration: none;
  padding: 1em 0;
  @media only screen and (min-width: 600px) {
    padding: 1em;
    background-color: var(--secondary-background-color);
    &:hover {
      color: var(--secondary-color);
      transition: all 500ms ease-in-out;
    }
  }
`;
