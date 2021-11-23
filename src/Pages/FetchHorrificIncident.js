import React, { useCallback, useEffect, useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";
export default function FetchHorrificIncident() {
    const [result, setResult] = useState([])
    const [name, setName] = useContext(UserContext);

    const fetchData = useCallback(() => {
        fetch(`http://localhost:9090/horrificincident_get?email=${name.email}`)
            .then(raw => raw.json())
            .then(data => setResult(data.result))
            .catch(err => console.log(err))
    }, [name.email])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <>
            {/* {JSON.stringify(result)} */}
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Incident Name</th>
                        {/* <th>Incident Image</th> */}
                        <th>Incident Address</th>
                        <th>Incident Description</th>
                        <th>Incident Date</th>
                    </tr>
                </thead>
                <tbody>
                    {result && result.map((item, i) => (
                        <tr>
                            <th>{item.id}</th>
                            <td>{item.incidentName}</td>
                            {/* <td>Otto</td> */}
                            <td>{item.incidentAddress}</td>
                            <td>{item.incidentDescription}</td>
                            <td>{item.incidentDate}</td>
                            {/* <button className='btn btn-primary'>Resolve</button> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5 className="text-center mt-5" style={{ color: 'red' }}> {!result.length && !result.length  ? <div>No data found</div> : null}</h5>
        </>
    )
}