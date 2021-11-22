import React, { useState, useContext, useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "./contextApi/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";
// import "./App.css";
import Signup from "./Sign/Signup";
import Signin from "./Sign/Signin"

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  const history = useHistory();
  const location = useLocation()
  const [
    ,
    setName] = useContext(UserContext);
  // const [user, setUser] = useState({});


  const initializeApp = useCallback(() => {
    let token = localStorage.getItem("key");
    console.log('checking key', token)
    if (token) {
      console.log('token found', token)

      token = JSON.parse(token);
      // console.log(token, 'token')

      fetch(`http://localhost:9090/verifyToken`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      })
        .then((data) => data.json())
        .then((resp) => {
          console.log('verification complete', resp)

          // console.log(resp)
          if (resp.success) {
            console.log('verification successful')
            // console.log(resp);
            // user is authorized and profile is returned as resp.user
            // setUser(resp.user);
            setName(resp.user[0]);
            // console.log(resp.user[0])
            // console.log(name)
            console.log('check user current page')
            if (location.pathname.includes('dashboard')) {
              console.log('page already opened, stay on the page')

              console.log("I'm home nigga!")
              // history.push(location.pathname);
            } else {
              console.log('go to home page')
              history.push("/dashboard/home");
            }

          } else {
            console.log('verification failed, token not valid')

            // unauthorized
            // navigate to login page
            history.push("/");
            // console.log(resp.msg)
          }
        })
        .catch((err) => {
          // unauthorized
          // navigate to login page
          history.push("/");
          // console.log(err)
        });
    } else {
      if (location.pathname.includes('dashboard')) {
        history.push("/")
      }
      console.log('token not found')
      // user has never used this app
      // goto login
      // history.push("/");
    }
  }, [history, location.pathname, setName]);

  useEffect(() => {
    initializeApp();
  }, [initializeApp, history, setName]);

  return (
    <div className="bg-dark">
      
      <div className="App wrapper">
        {/* <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} /> */}
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/dashboard" component={Content} />
          <Route path="/user/signup" component={Signup} />
        </Switch>
        {/* <Content /> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

    </div>

  );
};

export default App;
