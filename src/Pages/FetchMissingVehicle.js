import React, { useCallback, useEffect, useState } from 'react'
export default function FetchMissingVehicle() {
    const [result, setResult] = useState([])

    const fetchData = () => {
        fetch('http://localhost:9090/missingvehicle')
            .then(raw => raw.json())
            .then(data => setResult(data.result))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vehicle Name</th>
                        <th>Vehicle Model</th>
                        <th>Vehicle Image</th>
                        <th>Vehicle Plate Number</th>
                        <th>Last Seen</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, i) => (
                        <tr>
                            {/* {JSON.stringify(item)} */}

                            <th>{item.id}</th>
                            <td>{item.vehicleName}</td>
                            <td>{item.vehicleModel}</td>
                            <td>@mdo</td>
                            <td>{item.vehiclePlateNo}</td>
                            <td>{item.lastSeen}</td>
                            <td>{item.description}</td>
                            {/* <button className='btn btn-primary'>Resolve</button> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5 className="text-center mt-5" style={{color:'red'}}> {!result.length ? <div>No data found</div> : null}</h5>
        </>
    )
}