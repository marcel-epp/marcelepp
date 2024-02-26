import {
  StyledHeader,
  StyledHeaderInner,
  StyledBrand,
  StyledBrandImage,
  StyledBrandButton,
  StyledMenuIcon,
} from "./Header.Styled";
import Navigation from "../Navigation";
import plusIcon from "../../public/images/plus-solid.svg";

export default function Header({ isActive, ontoggleStateActive }) {
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
              priority={true}
            />
            <StyledBrandButton type="button" onClick={ontoggleStateActive}>
              <StyledMenuIcon
                src={plusIcon}
                width={32}
                height={32}
                alt="Menu"
                $active={isActive}
              />
            </StyledBrandButton>
          </StyledBrand>
          <Navigation
            isActive={isActive}
            ontoggleStateActive={ontoggleStateActive}
          />
        </StyledHeaderInner>
      </StyledHeader>
    </>
  );
}
