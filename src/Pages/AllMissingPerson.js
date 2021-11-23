import React, { useCallback, useEffect, useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";

export default function AllMissingPerson() {
    const [result, setResult] = useState([])
    // const [name, setName] = useContext(UserContext);
    const fetchData = () => {
        fetch(`http://localhost:9090/all_missingperson_get`)
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