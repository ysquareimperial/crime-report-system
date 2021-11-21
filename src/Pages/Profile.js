import React, {useState} from 'react'
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CustomInput from '../CustomFiles/CustomInput';
export default function Profile(props) {
    const [profile, setProfile] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        nin: "",
        password: ""
    })
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

    return (
        <>
            <div>
                <Modal isOpen={modal3} toggle3={toggle3} className={className}>
                    <ModalHeader className='bg-secondary'  toggle3={toggle3}>Update Profile</ModalHeader>
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
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Full Name : </b>M,NFFHJSDKF</p>
                            <p><b>Phone : </b>M,NFFHJSDKF</p>
                            <p><b>Email : </b>M,NFFHJSDKF</p>
                        </div>
                        <div className="col-md-6">
                            <p><b>Address :</b>M,NFFHJSDKF</p>
                            <p><b>NIN :</b>M,NFFHJSDKF</p>
                            <p><b>Password :</b>M,NFFHJSDKF</p>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className='bg-secondary' >
                    <button className="btn btn-primary text-white" style={{ float: '' }} onClick={toggle3}>Edit Profile</button>
                </CardFooter>
            </Card>
        </>
    )
}