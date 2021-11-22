import React, { useState, useContext } from 'react'
import CustomInput from '../CustomFiles/CustomInput'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../contextApi/UserContext";
export default function Signup() {
    const [
        name,
        setName] = useContext(UserContext);

    const history = useHistory()
    const [signup, setSignup] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        nin: "",
        password: ""
    })
    const handleSignupchange = ({ target: { name, value } }) => {
        setSignup(prev => ({ ...prev, [name]: value }))
    }
    const reset = () => {
        setSignup({
            fullName: "",
            phone: "",
            email: "",
            address: "",
            nin: "",
            password: ""
        })
    }
    const handleSubmit = () => {

        let obj = {
            signup
        }
        // reset()
        console.log(obj)


        fetch('http://localhost:9090/signup', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                ...signup
            })
        }).then(function (response) {
            return response.json()
        }).then((data) => {
            if (!data.success) {
                alert(data.msg)
            }
            else {
                alert("Registered successfully")
                localStorage.setItem("key", JSON.stringify(data.token))
                setName(data.user)
                history.push("/dashboard/home")
                reset()
            }
            console.log(data)
        }).catch((err) => { console.log(err) })
    }

    return (
        <>
            {/* <h3 className="text-left text-white bg-primary p-1">Crime Report System</h3> */}
            <div className="row m-0 p-0 text-white">
                <div className="col-md-4">

                </div>
                <div className="col-md-4 mt-3">
                    <div className="jumbotron bg-secondary pt-2" style={{ width: 400, height: 595 }}>
                        <p className="text-center">Crime Report System</p>
                        <h4 className="text-center text-white mb-1 mt-5 pt-1">SignUp</h4>
                        <CustomInput
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                            value={signup.fullName}
                            handleChange={handleSignupchange}
                        />
                        <CustomInput
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={signup.phone}
                            handleChange={handleSignupchange}
                        />
                        <CustomInput
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={signup.email}
                            handleChange={handleSignupchange}
                        />
                        <CustomInput
                            name="address"
                            type="text"
                            placeholder="Address"
                            value={signup.address}
                            handleChange={handleSignupchange}
                        />
                        <CustomInput
                            name="nin"
                            type="text"
                            placeholder="NIN"
                            value={signup.nin}
                            handleChange={handleSignupchange}
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={signup.password}
                            handleChange={handleSignupchange}
                        />
                        <button className="mt-3 btn btn-primary"
                            onClick={() => {
                                handleSubmit()

                            }
                            }
                            style={{ width: "100%" }}>Signup</button>
                        <p className="text-center mt-4" style={{ cursor: 'pointer' }}>Have an existing Account? | <span className="text-primary"><b onClick={() => history.push('/')}>Login Here!</b></span></p>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </>
    )

}