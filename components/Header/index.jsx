import Image from "next/image";
import { StyledHeader, StyledHeaderInner } from "./Header.Styled";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderInner>
          <Image src="/images/logo.png" width={80} height={44} alt="Marcel Epp Webseiten Logo" />
          <h1>Hello from NextJS!</h1>
        </StyledHeaderInner>
      </StyledHeader>
    </>
  );
}
