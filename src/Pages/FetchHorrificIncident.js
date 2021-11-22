import React, { useCallback, useEffect, useState } from 'react'
export default function FetchHorrificIncident() {
    const [result, setResult] = useState([])

    const fetchData = () => {
        fetch('http://localhost:9090/horrificincident_get')
            .then(raw => raw.json())
            .then(data => setResult(data.result))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Incident Name</th>
                        {/* <th>Incident Image</th> */}
                        <th>Incident Address</th>
                        <th>Incident Description</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, i) => (
                        <tr>
                            <th>{item.id}</th>
                            <td>{item.incidentName}</td>
                            {/* <td>Otto</td> */}
                            <td>{item.incidentAddress}</td>
                            <td>{item.incidentDescription}</td>
                            {/* <button className='btn btn-primary'>Resolve</button> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5 className="text-center mt-5" style={{ color: 'red' }}> {!result.length ? <div>No data found</div> : null}</h5>
        </>
    )
}