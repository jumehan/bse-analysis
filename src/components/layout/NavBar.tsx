import { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar light color="faded" expand="lg" className="gap-10 px-3">
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="../logos/icons8-basketball-32.png"
          style={{
            height: 32,
            width: 32,
          }}
        />
        Player Statistics
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} aria-controls="navbar-navigation" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="me-auto">
          <NavItem></NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              NBA Teams
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
