import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <Logo></Logo>
      <HamburgerIcon>{menuIcon}</HamburgerIcon>
      <Menu>
        <MenuLink>ham</MenuLink>
        <MenuLink>ham</MenuLink>
        <MenuLink>ham</MenuLink>
        <MenuLink>ham</MenuLink>
        <MenuLink>ham</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
