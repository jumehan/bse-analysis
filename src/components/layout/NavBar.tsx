import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  UncontrolledAccordion,
  UncontrolledDropdown,
} from "reactstrap";
import { eastConference, westConference } from "../../data/nbaTeams";

/** React Navigation Bar Component
 * Conains Logo and Header
 * Dropdown menu displays list generated from `EastConfTeams and `WestConfTeams`
 * @returns {JSX.Element} containing the navbar elements
 */
export default function NavBar(): JSX.Element {
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
              <UncontrolledAccordion flush defaultOpen="east">
                <EastConfTeams />
                <WestConfTeams />
              </UncontrolledAccordion>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

/** React Component that displays a list of teams
 * @returns {JSX.Element} list of teams in the Eastern Conference to display in dropdown menu
 */
const EastConfTeams = (): JSX.Element => {
  return (
    <AccordionItem>
      <AccordionHeader targetId="east">Eastern Conference</AccordionHeader>
      <AccordionBody accordionId="east">
        {eastConference.map((team) => (
          <DropdownItem key={team.code} tag={Link} to="">
            {team.name}
          </DropdownItem>
        ))}
      </AccordionBody>
    </AccordionItem>
  );
};

/** React Component that displays a list of teams
 * @returns {JSX.Element} list of teams in the Eastern Conference to display in dropdown menu
 */
const WestConfTeams = (): JSX.Element => {
  return (
    <AccordionItem>
      <AccordionHeader targetId="west">Western Conference</AccordionHeader>
      <AccordionBody accordionId="west">
        {westConference.map((team) => (
          <DropdownItem className="px-0" key={team.code} tag={Link} to="">
            {team.name}
          </DropdownItem>
        ))}
      </AccordionBody>
    </AccordionItem>
  );
};
