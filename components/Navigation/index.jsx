import { StyledNavigation, StyledNavUl, StyledLink } from "./Navigation.Styled";
import { useRouter } from "next/router";

export default function Navigation({ isActive }) {
  const router = useRouter();

  return (
    <>
      <StyledNavigation $active={isActive}>
        <StyledNavUl>
          <li>
            <StyledLink href="/" $active={router.pathname === "/"}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/posts" $active={router.pathname === "/posts"}>
              Posts
            </StyledLink>
          </li>
        </StyledNavUl>
      </StyledNavigation>
    </>
  );
}
