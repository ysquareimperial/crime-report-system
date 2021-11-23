import React, { useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";
export default function MissingVehicleForm() {
    let form = {
        vehicleName: "",
        vehicleModel: "",
        vehiclePlateNo: "",
        lastSeen: "",
        description: "",
        image: ""
    }
    const [name, setName] = useContext(UserContext);

    const [missingVehicle, setMissingVehicle] = useState(form)

    const handleChange = ({ target: { name, value } }) => {
        setMissingVehicle(prev => ({ ...prev, [name]: value }))
    }

    const reset = () => { setMissingVehicle(form) }

    const submit = () => {
        const {
            vehicleName,
            vehicleModel,
            vehiclePlateNo,
            lastSeen,
            description,
            image
        } = missingVehicle

        if (vehicleName === "" ||
            vehicleModel === "" ||
            vehiclePlateNo === "" ||
            lastSeen === "" ||
            description === "" ||
            image === "") {
            alert("Please complete the form!")
        }
        else {
            reset()
            let obj = {
                ...missingVehicle,
                email:name.email
            }
            console.log(obj)

            fetch('http://localhost:9090/missingvehicle', {
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
            {/* {JSON.stringify(name)} */}
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Vehicle Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="vehicleName"
                            placeholder=""
                            value={missingVehicle.vehicleName}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>vehicleModel</label>
                        <input
                            type="text"
                            class="form-control"
                            name="vehicleModel"
                            placeholder=""
                            value={missingVehicle.vehicleModel}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>vehicle Plate Number</label>
                        <input
                            type="num"
                            class="form-control"
                            name="vehiclePlateNo"
                            placeholder=""
                            value={missingVehicle.vehiclePlateNo}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Last Seen</label>
                        <input
                            type="date"
                            class="form-control"
                            name="lastSeen"
                            placeholder=""
                            value={missingVehicle.lastSeen}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Vehicle Image</label>
                        <input
                            type="file"
                            class="form-control"
                            name="image"
                            placeholder=""
                            value={missingVehicle.image}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            class="form-control"
                            name="description"
                            placeholder=""
                            value={missingVehicle.description}
                            onChange={handleChange} />
                    </div>
                    <button className="btn btn-primary" style={{ float: 'right' }} onClick={submit}>Submit</button>
                </div>
            </div>
        </>
    )
}