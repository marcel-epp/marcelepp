import { StyledNavigation, StyledNavUl, StyledLink } from "./Navigation.Styled";
import { useRouter } from "next/router";

export default function Navigation({ isActive, ontoggleStateActive }) {
  const router = useRouter();

  return (
    <>
      <StyledNavigation $active={isActive}>
        <StyledNavUl>
          <li>
            <StyledLink
              href="/"
              $active={router.pathname === "/"}
              onClick={ontoggleStateActive}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="/posts"
              $active={router.pathname === "/posts"}
              onClick={ontoggleStateActive}>
              Posts
            </StyledLink>
          </li>
        </StyledNavUl>
      </StyledNavigation>
    </>
  );
}
