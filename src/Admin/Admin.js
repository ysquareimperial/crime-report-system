import React, { useCallback, useState, useEffect, useContext } from 'react'
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import FetchHorrificIncident from '../Pages/FetchHorrificIncident';
import FetchMissingVehicle from '../Pages/FetchMissingVehicle';
import FetchMissingPerson from '../Pages/FetchMissingPerson';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CustomInput from '../CustomFiles/CustomInput'
import { UserContext } from '../contextApi/UserContext';


export default function Admin(props) {
    
    const [name, setName] = useContext(UserContext)

    const [signup, setSignup] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        nin: "",
        password: "",
        id: ''
    })
    const handleSignupchange = ({ target: { name, value } }) => {
        setSignup(prev => ({ ...prev, [name]: value }))
    }

    const {
        className
    } = props;
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);

    const [activeTab, setActiveTab] = useState('0');
    const toggle2 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const [result, setResult] = useState([])

    const fetchData = () => {
        fetch('http://localhost:9090/users')
            .then(raw => raw.json())
            .then(data => setResult(data.result))
            .catch(err => console.log(err))
    }

    const getUser = useCallback(() => {
        fetch(`http://localhost:9090/get-user/new?id=${signup.id}`)
            .then(raw => raw.json())
            .then(data => setSignup(data.result[0]))
            .catch(err => console.log(err))
    }, [signup.id])

    useEffect(() => {
        fetchData()
        getUser()
    }, [getUser])
    /////////////////////////////////////////
    const handleUserUpdate = () => {
        fetch(`http://localhost:9090/update-user/new?id=${signup.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                ...signup
            })
        }).then(function (response) {
            return response.json()
        }).then((data) => {
            console.log(data)
            fetchData()
            alert("Update successful")
        }).catch((err) => { console.log(err) })
    }

    /////////////////////////////////////
    const handleDelete = (id) => {
        fetch(`http://localhost:9090/delete-user/new?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({

            })
        }).then(function (response) {
            return response.json()
        }).then((data) => {
            console.log(data)
            fetchData()
            alert("Deleted successful")
        }).catch((err) => { console.log(err) })
    }
    return (
        <>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit Details</ModalHeader>
                <ModalBody>
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
                    <button className="btn btn-primary mt-3" onClick={() => {
                        toggle()
                        handleUserUpdate()
                    }}>Save</button>
                </ModalBody>
            </Modal>
            <h2 style={{ marginLeft: 100 }}>Admin Dashboard</h2>
            <div>
                <div className="row mt-5" >
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: activeTab === '0' })}
                                    onClick={() => { toggle2('0'); }}
                                >
                                    All Users
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle2('1'); }}
                                >
                                    Missing Person
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle2('2'); }}
                                >
                                    Horrific Incident
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle2('3'); }}
                                >
                                    Missing Vehicle
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle2('4'); }}
                                >
                                    Solved Crimes
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="0">
                                <Row>
                                    <Col sm="12">
                                        <table class="table table-dark table-striped">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Full Name</th>
                                                    <th>NIN</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {result.map((item, i) => (
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.fullName}</td>
                                                        <td>{item.nin}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.address}</td>
                                                        <td><button className="btn btn-primary" onClick={() => {
                                                            toggle()
                                                            setSignup(p => ({ ...p, id: item.id }))
                                                        }}>Edit</button>


                                                            <button className="btn btn-secondary" onClick={() => {
                                                                handleDelete(item.id)
                                                            }}>Del</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <FetchMissingPerson />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col md="12">
                                        <FetchHorrificIncident />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col md="12">
                                        <FetchMissingVehicle />
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col md="12">
                                        {/* <Posts /> */}
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div>
               <h5 className="text-center text-danger mt-5"> {!result.length ? <div>No user found</div> : null}</h5>
            </div>
        </>
    )
}