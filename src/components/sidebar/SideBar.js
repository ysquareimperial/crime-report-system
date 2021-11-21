import React from "react";
import {IoSettings} from 'react-icons/io5'
import {FaSignOutAlt, FaUserAlt} from 'react-icons/fa'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className="bg-primary">
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="primary" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
    </div>
    <div className="side-menu bg-primary">
      <Nav vertical className="list-unstyled pb-3">
        {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
        <NavItem>
        </NavItem>
        {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
        <h5 className="ml-3">C R S - M E N U</h5>
        <NavItem>
          <NavLink className="text-white" tag={Link} to={"/profile"}>
            {/* <FontAwesomeIcon icon={faImage} className="mr-2" /> */}
            <FaUserAlt size="1.7em"/> Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-white" tag={Link} to={"/settings"}>
            {/* <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> */}
            <IoSettings size="2em"/> Settings
          </NavLink> 
        </NavItem>
        <NavItem>
          <NavLink className="text-white" tag={Link} to={""}>
            {/* <FontAwesomeIcon icon={faQuestion} className="mr-2" /> */}
            <FaSignOutAlt size="2em"/> Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
  </div>
);

const submenus = [
  [

  ],
  [
  ],
];

export default SideBar;
