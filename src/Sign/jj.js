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