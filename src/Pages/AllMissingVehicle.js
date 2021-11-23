import React, { useCallback, useEffect, useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";
export default function AllMissingVehicle() {
    const [result, setResult] = useState([])
    // const [name, setName] = useContext(UserContext);

    const fetchData = () => {
        fetch(`http://localhost:9090/all_missingvehicle_get`)
            .then(raw => raw.json())
            .then(data => setResult(data.result))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {/* {JSON.stringify(result)} */}
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Model</th>
                        {/* <th>Vehicle Image</th> */}
                        <th>Vehicle Plate Number</th>
                        <th>Last Seen</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {result && result.map((item, i) => (
                        <tr>
                            {/* {JSON.stringify(item)} */}

                            <th>{item.id}</th>
                            <td>{item.vehicleName}</td>
                            <td>{item.vehicleModel}</td>
                            {/* <td>@mdo</td> */}
                            <td>{item.vehiclePlateNo}</td>
                            <td>{item.lastSeen}</td>
                            <td>{item.description}</td>
                            {/* <button className='btn btn-primary'>Resolve</button> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5 className="text-center mt-5" style={{ color: 'red' }}> {!result.length && !result.length ? <div>No data found</div> : null}</h5>
        </>
    )
}