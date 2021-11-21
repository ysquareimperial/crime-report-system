import React, { useEffect, useContext, useCallback } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import Dashboard from "./dashboard"
import { UserContext } from "./contextApi/user_context";
import Login from "./component/Login"
import { api } from "./config/apiUrl";
import Navbar from "./component/NavBar";
import FrontID from "./component/IdCard/FrontID"
import BackID from "./component/IdCard/BackID"
import ID from "./component/IdCard"

function App() {

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

      fetch(`${api}/verify-token`, {
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
            if(location.pathname.includes('dashboard')){
              console.log('page already opened, stay on the page')

              console.log("I'm home nigga!")
               history.push(location.pathname);
            } else {
              console.log('go to home page')
             history.push("/dashboard");
            }

          } else {
            console.log('verification failed, token not valid')

            // unauthorized
            // navigate to login page
            if(location.pathname.includes('/dashboard')) {
              history.push(`${location.pathname}`);
            } else {
              history.push("/");
            }
            // console.log(resp.msg)
          }
        })
        .catch((err) => {
           if(location.pathname.includes('/dashboard')) {
              history.push(`${location.pathname}`);
            } else {
               history.push("/");
            }
          // unauthorized
          // navigate to login page
          // history.push("/");
          // console.log(err)
        });
    } else {
       if(location.pathname.includes('/dashboard')) {
              history.push(`${location.pathname}`);
            } else {
              // history.push("/");
            }

    console.log('token not found')
      // user has never used this app
      // goto login
      // history.push("/");
    }
  }, [ history, location.pathname, setName]);

  useEffect(() => {
    initializeApp();
  }, [initializeApp, history, setName]);






  // function useKeyPress(targetKey) {
  //   // State for keeping track of whether key is pressed
  //   const [
  //   keyPressed,
  //   setKeyPressed] = useState(false);
  //   // If pressed key is our target key then set to true
  //   function downHandler({ key }) {
  //     console.log(keyPressed)
  //     if (key === targetKey) {
  //       setKeyPressed(true);
  //       setKeyPressedModal(true);
  //       setModal(!modal);

  //       // alert("Hello");
  //     }
  //   }
  //   // If released key is our target key then set to false
  //   const upHandler = ({ key }) => {
  //     if (key === targetKey) {
  //       setKeyPressed(false);
  //     }
  //   };
  //   // Add event listeners
  //   useEffect(() => {
  //     window.addEventListener("keydown", downHandler);
  //     // window.addEventListener("keyup", downHandler);
  //     window.addEventListener("keyup", upHandler);
  //     // Remove event listeners on cleanup
  //     return () => {
  //       window.removeEventListener("keydown", downHandler);
  //       // window.removeEventListener("keyup", downHandler);
  //       window.removeEventListener("keyup", upHandler);
  //     };
  //   }, []); // Empty array ensures that effect is only run on mount and unmount
  //   return keyPressed;
  // }


  return (
    <>


      <Navbar />
        {// <Modal toggle={toggle} modal={modal} />
               // {JSON.stringify(name)}
                }



          <Switch>
          <Route path="/" exact component={Login}  />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/front_id" component={FrontID} />
          <Route path="/back_id" component={BackID} />
          <Route path="/id" component={ID} />
            {// <Route path="/" exact component={SignIn} />

            // <Route path="/signup" component={SignUp} />
            // <Route path="/cloudinary" component={Cloudinary} />
            }
          </Switch>

    </>
  );
}