import { StyledNavigation } from "./Navigation.Styled";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <StyledNavigation>
        <ul>
          <li className={router.pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname === "/posts" ? "active" : ""}>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </StyledNavigation>
    </>
  );
}
