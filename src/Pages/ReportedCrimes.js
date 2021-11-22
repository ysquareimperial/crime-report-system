
import React, { useCallback, useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FetchHorrificIncident from './FetchHorrificIncident';
import FetcHorr from './FetchHorrificIncident';
import FetchMissingPerson from './FetchMissingPerson';
import FetchMissingVehicle from './FetchMissingVehicle';
import './Modal.css'
export default function ReportedCrimes(props) {


    const {
        buttonLabel,
        className,
        customModal
    } = props;

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);

    const toggle1 = () => setModal1(!modal1);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);

    const [result, setResult] = useState([])

    const fetchData = () => {
        fetch('http://localhost:9090/missingperson')
            .then(raw => raw.json())
            .then(data => setResult(data.result))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    })





    // getUser()

    // }, [getUser])
    return (
        <>
            <div>
                <Modal size="xl" isOpen={modal1} toggle1={toggle1} >
                    <ModalHeader className='bg-secondary' toggle1={toggle1}>Missing Person Report <button className="btn btn-primary" onClick={window.print} style={{ marginLeft: 10 }}>Print Page</button></ModalHeader>
                    <ModalBody className='bg-secondary' >
                        <FetchMissingPerson />
                    </ModalBody>
                    <ModalFooter className='bg-secondary'>
                        <Button color="outline-secondary text-white" onClick={toggle1}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
                <Modal size='xl' isOpen={modal2} toggle2={toggle2} className="customModal">
                    <ModalHeader className='bg-secondary' toggle2={toggle2}>Horrific Incident Report <button className="btn btn-primary" onClick={window.print} style={{ marginLeft: 10 }}>Print Page</button></ModalHeader>
                    <ModalBody className='bg-secondary' >
                        <FetchHorrificIncident />
                    </ModalBody>
                    <ModalFooter className='bg-secondary' >
                        <Button color="outline-secondary text-white" onClick={toggle2}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
                <Modal size='xl' isOpen={modal3} toggle3={toggle3} className="customModal">
                    <ModalHeader className='bg-secondary' toggle3={toggle3}>Missing Vehicle Report <button className="btn btn-primary" onClick={window.print} style={{ marginLeft: 10 }}>Print Page</button></ModalHeader>
                    <ModalBody className='bg-secondary' >
                        <FetchMissingVehicle />
                    </ModalBody>
                    <ModalFooter className='bg-secondary' >
                        <Button color="outline-secondary text-white" onClick={toggle3}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <h2 style={{ marginLeft: 100 }}>Crimes Reported by You</h2>
            <div className="row" style={{ marginLeft: 100 }}>
                <div className="col-md-3 text-center border p-4 m-1 jumbotron bg-dark">
                    <h4 class=""><b>Missing Person Report</b></h4>
                    <button className="btn btn-outline-light" onClick={toggle1}>View Report</button>
                </div>
                <div className="col-md-4 text-center border p-4 m-1 jumbotron bg-dark">
                    <h4 class=""><b>Horrific Incident Report</b></h4>
                    <button className="btn btn-outline-light" onClick={toggle2}>View Report</button>
                </div>
                <div className="col-md-3 text-center border p-4 m-1 jumbotron bg-dark">
                    <h4 class=""><b>Missing Vehicle Report</b></h4>
                    <button className="btn btn-outline-light" onClick={toggle3}>View Report</button>
                </div>
            </div>
        </>
    )
}