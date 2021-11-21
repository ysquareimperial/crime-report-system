import React,{useState} from 'react'
export default function MissingVehicleForm() {
    let form = {
        vehicleName: "",
        vehicleModel: "",
        vehiclePlateNo: "",
        lastSeen: "",
        description: "",
        image: ""
    }
    const [missingVehicle, setMissingVehicle] = useState(form)

    const handleChange = ({ target: { name, value } }) => {
        setMissingVehicle(prev => ({ ...prev, [name]: value }))
    }

    const reset = () => { setMissingVehicle(form) }

    const submit = () => {
        reset()
        let obj = {
            missingVehicle
        }
        console.log(obj)

        fetch('http://localhost:9090/missingvehicle', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                ...missingVehicle
            })
        }).then(function (response) {
            return response.json()
        }).then((data) => {
            console.log(data)
        }).catch((err) => { console.log(err) })
    }
    return (
        <>
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
                    <button className="btn btn-primary" style={{float:'right'}} onClick={submit}>Submit</button>
                </div>
            </div>
        </>
    )
}