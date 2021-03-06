import React, { useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";
export default function HorrificIncidentForm() {
    let form = {
        incidentName: "",
        incidentAddress: "",
        incidentDescription: "",
        incidentImage: "",
        incidentDate: ""
    }
    const [name, setName] = useContext(UserContext);

    const [horrificIncident, setHorrificIncident] = useState(form)

    const handleChange = ({ target: { name, value } }) => {
        setHorrificIncident(prev => ({ ...prev, [name]: value }))
    }

    const reset = () => { setHorrificIncident(form) }

    const submit = () => {
        const {
            incidentName,
            incidentAddress,
            incidentDescription,
            incidentImage,
            incidentDate
        } = horrificIncident
        if (incidentName === "" ||
            incidentAddress === "" ||
            incidentDescription === "" ||
            incidentImage === "" ||
            incidentDate === "") {
            alert("Please complete the form!")
        }
        else {
            reset()
            let obj = {
                ...horrificIncident,
                email: name.email

            }
            console.log(obj)

            fetch('http://localhost:9090/horrificincident', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(obj)
            }).then(function (response) {
                return response.json()
            }).then((data) => {
                console.log(data)
            }).catch((err) => { console.log(err) })
            alert("Your Report has been sent successfully, we will contact you soon!")
        }

    }
    return (
        <>
            {/* {JSON.stringify(horrificIncident)} */}
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="text-white">Incident Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="incidentName"
                            style={{backgroundColor:"#6c757d", color:"white"}}
                            placeholder=""
                            value={horrificIncident.incidentName}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="text-white">Incident Date</label>
                        <input
                            type="date"
                            class="form-control"
                            name="incidentDate"
                            style={{backgroundColor:"#6c757d", color:"white"}}
                            placeholder=""
                            value={horrificIncident.incidentDate}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="text-white">Incident Description</label>
                        <textarea
                            type="text"
                            class="form-control"
                            name="incidentDescription"
                            style={{backgroundColor:"#6c757d", color:"white"}}
                            placeholder=""
                            value={horrificIncident.incidentDescription}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="text-white">Incident Image</label>
                        <input
                            type="file"
                            class="form-control"
                            name="incidentImage"
                            style={{backgroundColor:"#6c757d", color:"white"}}
                            placeholder=""
                            value={horrificIncident.incidentImage}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="text-white">Incident Address</label>
                        <input
                            type="text"
                            class="form-control"
                            name="incidentAddress"
                            style={{backgroundColor:"#6c757d", color:"white"}}
                            placeholder=""
                            value={horrificIncident.incidentAddress}
                            onChange={handleChange} />
                    </div>

                    <button className="btn btn-primary" style={{ float: 'right' }} onClick={submit}>Submit</button>

                </div>
            </div>
        </>
    )
}