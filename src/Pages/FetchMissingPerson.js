import React, { useCallback, useEffect, useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";

export default function FetchMissingPerson() {
    const [result, setResult] = useState([])
    const [name, setName] = useContext(UserContext);
    const fetchData = useCallback(() => {
        fetch(`http://localhost:9090/missingperson_get?email=${name.email}`)
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
                        <th>Full Name</th>
                        <th>Address</th>
                        {/* <th>Image</th> */}
                        <th>Last Seen</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {result && result.map((item, i) => (
                        <tr>
                            <td>{item.id}</td>
                            <th>{item.fullName}</th>
                            <td>{item.address}</td>
                            {/* <td>@mdo</td> */}
                            <td>{item.lastSeen}</td>
                            <td>{item.description}</td>
                            {/* <button className='btn btn-primary'>Resolve</button>  */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5 className="text-center  mt-5" style={{ color: 'red' }}> {!result.length && !result.length  ? <div>No data found</div> : null}</h5>
        </>
    )
}