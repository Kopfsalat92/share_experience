import React from "react";
import "./design.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/404/">MyBookmarks</NavLink>
              </NavItem> */}
              <NavItem
                style={{
                  margin: `0 auto`,
                  padding: `2 rem`
                }}
              >
                <NavLink href="/">Back</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Destinations
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/page-6/">Guatemala</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/page-4/">Malawi</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/page-5/">Mexiko</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/page-2">Namibia</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/page-7/">New Zealand</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/page-3/">Tanzania</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
