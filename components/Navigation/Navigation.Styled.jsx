import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.nav`
  @media only screen and (min-width: 600px) {
    padding-right: 1.5em;
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
  padding: 1em 1.5em;
  @media only screen and (min-width: 600px) {
    padding: 1em;
    background-color: var(--secondary-background-color);
    &:hover {
      color: var(--secondary-color);
      transition: all 500ms ease-in-out;
    }
  }
`;
