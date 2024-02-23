import {
  StyledHeader,
  StyledHeaderInner,
  StyledBrand,
  StyledBrandImage,
  StyledMenuIcon,
} from "./Header.Styled";
import Navigation from "../Navigation";
import Image from "next/image";
import plusIcon from "../../public/images/plus-solid.svg";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderInner>
          <StyledBrand>
            <StyledBrandImage
              src="/images/logo.png"
              width={80}
              height={44}
              alt="Marcel Epp Webseiten Logo"
            />
            <StyledMenuIcon src={plusIcon} width={32} height={32} alt="Menu" />
          </StyledBrand>
          <Navigation />
        </StyledHeaderInner>
      </StyledHeader>
    </>
  );
}
