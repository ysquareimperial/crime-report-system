import React, { useState, useContext } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { UserContext } from '../../contextApi/UserContext';
import { FaUserAlt } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'



const Topbar = ({ toggleSidebar }) => {
  const [name, setName] = useContext(UserContext)
  const location = useLocation()
  const history = useHistory()
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  const logout = () => {
    localStorage.removeItem("key")
    setName([])
    history.push("/")
  }

  return (
    <div className="container">
      <Navbar
        color=""
        light
        className="navbar shadow-sm p-2 mb-5 "
        expand="md"
      >

        <NavbarToggler onClick={toggleTopbar} />
        <Collapse isOpen={topbarIsOpen} navbar>
          {location.pathname.includes("/signup") || location.pathname.includes("/signin") ?
            null :
            <Nav className="" navbar>
              <NavItem>
                <NavLink className="text-primary " tag={Link} to={"home"}>
                  <h3 className="text-left" style={{ marginLeft: 11 }}>C R S</h3>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to={"home"} style={{ marginTop: 5 }}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" style={{ marginTop: 5 }} tag={Link} to={"report-crime"}>
                  Report a Crime
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" style={{ marginTop: 5 }} tag={Link} to={"view-reported-crimes"}>
                  View Reported Crimes
                </NavLink>
              </NavItem>
            </Nav>
          }
        </Collapse>
        {location.pathname.includes('/signin') || location.pathname.includes('/signup')
          ?
          null :
          <div>
            <Button color="primary" tag={Link} to={"profile"} style={{ marginLeft: 300 }}>
              <FaUserAlt size="1.5em" />
            </Button>
            <Button color="secondary" onClick={logout} style={{ marginLeft: 10 }}>
              <FaSignOutAlt size="1.5em" />
            </Button>
            {name.role === "admin" &&
              <Button color="secondary" tag={Link} to={"crs-admin"} style={{ marginLeft: 10 }}>
                Dashboard
              </Button>
            }
          </div>
        }
      </Navbar>
    </div>
  );
};

export default Topbar;
