import { StyledNavigation } from "./Navigation.Styled";

import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <StyledNavigation>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </StyledNavigation>
    </>
  );
}
