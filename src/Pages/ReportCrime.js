import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MissingPersonForm from './MissingPersonForm';
import MissingVehicleForm from './MissingVehicleForm';
import { Jumbotron } from 'reactstrap'
import {BiEditAlt} from 'react-icons/bi'
import HorrificIncidentForm from './HorrificIncidentForm';
export default function ReportCrime(props) {


    const {
        buttonLabel,
        className
    } = props;

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);

    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);

    return (
        <>
            <h2 style={{ marginLeft: 100 }}>Report a Crime</h2>
            <div>
                <Modal isOpen={modal1} toggle1={toggle1} className={className}>
                    <ModalHeader className='bg-secondary text-white' toggle1={toggle1}>Missing Person Form</ModalHeader>
                    <ModalBody className='bg-secondary'>
                        <MissingPersonForm />
                    </ModalBody>
                    <ModalFooter className='bg-secondary'>
                        {/* <Button color="primary" onClick={toggle1}>Submit</Button>{' '} */}
                        <Button color="secondary" onClick={toggle1}>Close Form</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
                <Modal isOpen={modal2} toggle2={toggle2} className={className}>
                    <ModalHeader className='bg-secondary text-white' toggle2={toggle2}>HorrificIncident Form</ModalHeader>
                    <ModalBody className='bg-secondary'>
                        <HorrificIncidentForm />
                    </ModalBody>
                    <ModalFooter className='bg-secondary'>
                        {/* <Button color="primary " onClick={toggle2}>Submit</Button>{' '} */}
                        <Button color="secondary " onClick={toggle2}>Close Form</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
                <Modal isOpen={modal3} toggle3={toggle3} className={className}>
                    <ModalHeader className='bg-secondary text-white' toggle3={toggle3}>Missing Vehicle Form</ModalHeader>
                    <ModalBody className='bg-secondary'>
                        <MissingVehicleForm />
                    </ModalBody>
                    <ModalFooter className='bg-secondary'>
                        {/* <Button color="primary " onClick={toggle3}>Submit</Button>{' '} */}
                        <Button color="secondary " onClick={toggle3}>Close Form</Button>
                    </ModalFooter>
                </Modal>
            </div>

            <div className="row" style={{ marginLeft: 100 }}>
                <div className="col-md-3 text-center border p-4 m-1 jumbotron bg-dark">
                    <h4 class=""><b>Missing Person Form</b></h4>
                    <p class="lead">Click the button below to fill the form</p>
                    <button className="btn btn-outline-primary" onClick= {  toggle1 }>Fill Form <BiEditAlt size="1.5em"/></button>
                </div>
                <div className="col-md-4 text-center border p-4 m-1 jumbotron bg-dark">
                    <h4 class=""><b>Horrific Incident Form</b></h4>
                    <p class="lead">Click the button below to fill the form</p>
                    <button className="btn btn-outline-primary" style={{ marginTop: 50 }} onClick={toggle2
                    }>Fill Form <BiEditAlt size="1.5em"/></button>
                </div>
                <div className="col-md-3 text-center border p-4 m-1 jumbotron bg-dark">
                    <h4 class=""><b>Missing Vehicle Form</b></h4>
                    <p class="lead">Click the button below to fill the form</p>
                    <button className="btn btn-outline-primary" onClick={toggle3}>Fill Form <BiEditAlt size="1.5em"/></button>
                </div>
            </div>
        </>
    )
}