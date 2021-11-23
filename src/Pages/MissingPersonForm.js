import React, { useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";

export default function MissingPersonForm() {
    let form = {
        fullName: "",
        address: "",
        phone: "",
        lastSeen: "",
        description: "",
        image: ""
    }
    const [name, setName] = useContext(UserContext);

    const [missingPerson, setMissingPerson] = useState(form)

    const handleChange = ({ target: { name, value } }) => {
        setMissingPerson(prev => ({ ...prev, [name]: value }))
    }

    const reset = () => { setMissingPerson(form) }

    const submit = () => {
        const {
            fullName,
            address,
            phone,
            lastSeen,
            description,
            image
        } = missingPerson

        if (fullName === "" ||
            address === "" ||
            phone === "" ||
            lastSeen === "" ||
            description === "" ||
            image === "") {
            alert("Please complete the form!")
        }
        else {
            reset()
            let obj = {
                ...missingPerson,
                email: name.email
            }
            console.log(obj)

            fetch('http://localhost:9090/missingperson', {
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
                        <label>Full Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="fullName"
                            placeholder=""
                            value={missingPerson.fullName}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            class="form-control"
                            name="address"
                            placeholder=""
                            value={missingPerson.address}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="num"
                            class="form-control"
                            name="phone"
                            placeholder=""
                            value={missingPerson.phone}
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
                            value={missingPerson.lastSeen}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            type="file"
                            class="form-control"
                            name="image"
                            placeholder=""
                            value={missingPerson.image}
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            class="form-control"
                            name="description"
                            placeholder=""
                            value={missingPerson.description}
                            onChange={handleChange} />
                    </div>

                    <button className="btn btn-primary" style={{ float: 'right' }} onClick={submit}>Submit</button>
                </div>
            </div>
        </>
    )
}