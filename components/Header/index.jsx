import { StyledHeader, StyledHeaderInner } from "./Header.Styled";
import Navigation from "../Navigation";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderInner>
          <Image src="/images/logo.png" width={80} height={44} alt="Marcel Epp Webseiten Logo" />
          <Navigation />
        </StyledHeaderInner>
      </StyledHeader>
    </>
  );
}
