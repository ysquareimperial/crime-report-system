import React, { useState } from 'react'
export default function HorrificIncidentForm() {
    let form = {
        incidentName: "",
        incidentAddress: "",
        incidentDescription: "",
        incidentImage: ""
    }
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
            incidentImage
        } = horrificIncident
        if (incidentName === "" ||
            incidentAddress === "" ||
            incidentDescription === "" ||
            incidentImage === "") {
            alert("Please complete the form!")
        }
        else {
            reset()
            let obj = {
                horrificIncident
            }
            console.log(obj)

            fetch('http://localhost:9090/horrificincident', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    ...horrificIncident
                })
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
                        <label>Incident Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="incidentName"
                            placeholder=""
                            value={horrificIncident.incidentName}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Incident Description</label>
                        <textarea
                            type="text"
                            class="form-control"
                            name="incidentDescription"
                            placeholder=""
                            value={horrificIncident.incidentDescription}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Incident Image</label>
                        <input
                            type="file"
                            class="form-control"
                            name="incidentImage"
                            placeholder=""
                            value={horrificIncident.incidentImage}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Incident Address</label>
                        <input
                            type="text"
                            class="form-control"
                            name="incidentAddress"
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