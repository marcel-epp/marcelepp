import styled from "styled-components";
import { usePathname } from "next/navigation";

export const StyledNavigation = styled.nav`
  padding-right: 1.5em;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    list-style-type: none;
  }
  ul li a {
    color: var(--primary-color);
    font-weight: 600;
    display: block;
    text-decoration: none;
    padding: 1em;
  }
  ul .active a {
    color: var(--secondary-color);
  }
  ul li a:hover {
    color: var(--secondary-color);
    transition: all 500ms ease-in-out;
  }
`;
