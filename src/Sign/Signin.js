import React, { useContext, useState } from 'react'
import CustomInput from '../CustomFiles/CustomInput'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contextApi/UserContext';
import { BiLike } from 'react-icons/bi'
export default function Signin() {
    const [name, setName] = useContext(UserContext)
    const history = useHistory();
    const [signin, setSignin] = useState({
        phone: "",
        password: ""
    })
    const handleSigninchange = ({ target: { name, value } }) => {
        setSignin(prev => ({ ...prev, [name]: value }))
    }
    // const reset = () => {
    //     setSignin({
    //         phone: "",
    //         password: ""
    //     })
    // }

    const handleSubmit = () => {
        if (signin.phone == "" || signin.password == "") {
            alert("Please complete the form")
        }
        else {
            // reset()
            let obj = {
                signin
            }
            // reset()
            console.log(obj)

            fetch('http://localhost:9090/signin', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    ...signin
                })
            }).then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        alert(data.msg)
                        ///////////////
                        localStorage.setItem("key", JSON.stringify(data.token))
                        setName(data.user)
                        //////////////
                        history.push("/dashboard/home")
                    }
                    else {
                        alert(data.msg)
                    }
                    console.log(data)
                })
                .catch((err) => { console.log(err) })
        }
    }

    return (
        <>
            {/* {JSON.stringify(name)} */}
            {/* <h3 className="text-left text-white bg-primary p-1">Crime Report System</h3> */}
            <div className="row m-0 p-0 text-white pt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="jumbotron bg-secondary pt-2" style={{ width: 400 }}>
                        <p className="text-center">Crime Report System</p>
                        <h4 className="text-center text-white mb-1 mt-5">User SignIn</h4>
                        <CustomInput
                            name="phone"
                            type="number"
                            placeholder="Phone Number"
                            value={signin.phone}
                            handleChange={handleSigninchange}
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={signin.password}
                            handleChange={handleSigninchange}
                        />
                        <button className="mt-3 btn btn-primary" onClick={handleSubmit} style={{ width: "100%" }}>SignIn</button>
                        <p className="text-center mt-4" style={{ cursor: 'pointer' }}>Forgotten Password? | <span className="text-primary"><b onClick={() => history.push('/user/signup')}>Create an account</b></span></p>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    )

}