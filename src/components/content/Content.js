import React, { useContext } from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import ReportedCrimes from "../../Pages/ReportedCrimes";
import ReportCrime from "../../Pages/ReportCrime";
import Home from "../../Pages/Home";
import Settings from "../../Pages/Settings";
import Profile from "../../Pages/Profile";
import Admin from "../../Admin/Admin";
import Signin from "../../Sign/Signin";
import Signup from "../../Sign/Signup";
import { UserContext } from '../../contextApi/UserContext';
import { Redirect } from "react-router-dom";

const Content = ({ sidebarIsOpen, toggleSidebar }) => {
  const [name, setName] = useContext(UserContext)
  
  // if(Object.keys(name).length == 0){
  // <Redirect to = '/user/signin'/>
  // }
  return (

    <div className="container bg-dark text-white">
      {JSON.stringify(name)}
      <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
      >
        <Topbar toggleSidebar={toggleSidebar} />
        <Switch>
          {/* <Route exact path="/signin" compon ent={Signin}/>
        <Route exact="/signup" component={Signup}/> */}
          
            <>
              <Route exact path="/dashboard/home" component={Home} />
              <Route exact path="/dashboard/profile" component={Profile} />
              <Route exact path="/dashboard/settings" component={Settings} />
              <Route exact path="/dashboard/report-crime" component={ReportCrime} />
              <Route exact path="/dashboard/view-reported-crimes" component={ReportedCrimes} />
              <Route exact path="/dashboard/profile" component={Profile} />
              <Route exact path="/dashboard/crs-admin" component={Admin} />
            </>
          
        </Switch>
      </Container>
    </div>
  )

};

export default Content;
