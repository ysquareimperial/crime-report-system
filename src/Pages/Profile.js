import React, { useCallback, useState, useEffect, useContext } from 'react'

import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UserContext } from "../contextApi/UserContext";
import { FaUserAlt } from 'react-icons/fa'
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import {FaMapMarkerAlt} from 'react-icons/fa'
import {HiOutlineIdentification} from 'react-icons/hi'
import CustomInput from '../CustomFiles/CustomInput';
export default function Profile(props) {

    const [profile, setProfile] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        nin: "",
        password: "",
        id: ''
    })
    const [name, setName] = useContext(UserContext);

    const handleProfilechange = ({ target: { name, value } }) => {
        setProfile(prev => ({ ...prev, [name]: value }))
    }
    const reset = () => {
        setProfile({
            fullName: "",
            phone: "",
            email: "",
            address: "",
            nin: "",
            password: ""
        })
    }
    const handleSubmit = () => {
        reset()
        let obj = {
            profile
        }
        reset()
        console.log(obj)
    }
    const {
        buttonLabel,
        className
    } = props;
    const [modal3, setModal3] = useState(false);
    const toggle3 = () => setModal3(!modal3);
    const [result, setResult] = useState([])

    return (
        <>
            <div>
                {/* {JSON.stringify(name)} */}
                <Modal isOpen={modal3} toggle3={toggle3} className={className}>
                    <ModalHeader className='bg-secondary' toggle3={toggle3}>Update Profile</ModalHeader>
                    <ModalBody className='bg-secondary' >
                        <CustomInput
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                            value={profile.fullName}
                            handleChange={handleProfilechange}
                        />
                        <CustomInput
                            name="nin"
                            type="text"
                            placeholder="NIN"
                            value={profile.nin}
                            handleChange={handleProfilechange}
                        />
                        <CustomInput
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={profile.phone}
                            handleChange={handleProfilechange}
                        />
                        <CustomInput
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={profile.email}
                            handleChange={handleProfilechange}
                        />
                        <CustomInput
                            name="address"
                            type="text"
                            placeholder="Address"
                            value={profile.address}
                            handleChange={handleProfilechange}
                        />
                        <CustomInput
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={profile.password}
                            handleChange={handleProfilechange}
                        />
                    </ModalBody>
                    <ModalFooter className='bg-secondary' >
                        <Button color="primary text-white" onClick={toggle3}>Save</Button>{' '}
                        <Button color="secondary text-white" onClick={toggle3}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <Card style={{ marginLeft: 100, marginRight: 100 }}>
                <CardHeader className='bg-secondary' >
                    <h2 style={{ marginLeft: "" }} className="text-white">Profile</h2>
                </CardHeader>
                <CardBody className='bg-secondary text-white' >
                    {/* {result.map((item, i) => ( */}
                    <div className="row">
                        <div className="col-md-6">
                            <p><b><FaUserAlt  size="1.5em" color="rgb(91, 192, 222)"/> Full Name : </b>{name.fullName}</p>
                            <p><b><AiTwotonePhone  size="1.5em" color="rgb(91, 192, 222)"/> Phone : </b>{name.phone}</p>
                            <p><b><MdEmail size="1.5em" color="rgb(91, 192, 222)"/> Email : </b>{name.email}</p>
                        </div>
                        <div className="col-md-6">
                            <p><b><FaMapMarkerAlt size="1.5em" color="rgb(91, 192, 222)"/> Address : </b>{name.address}</p>
                            <p><b><HiOutlineIdentification size="1.7em" color="rgb(91, 192, 222)"/> NIN : </b>{name.nin}</p>
                            {/* <p><b>Password :</b>{name.password}</p> */}
                        </div>
                    </div>
                    {/* ))} */}
                </CardBody>
                <CardFooter className='bg-secondary' >
                    <button className="btn btn-primary text-white" style={{ float: '' }} onClick={toggle3}>Edit Profile</button>
                </CardFooter>
            </Card>
        </>
    )
}