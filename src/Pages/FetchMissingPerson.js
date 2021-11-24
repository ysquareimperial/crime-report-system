import React, { useCallback, useEffect, useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";
import { Input } from 'reactstrap';
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


    const [state, setSearch] = useState({
        search: "",
    });
    const handleChanges = ({ target: { name, value } }) => {
        setSearch({ [name]: value });
    };

    let rows = [];
    result &&
        result.forEach((item, index) => {
            if (
                item.fullName.toLowerCase().indexOf(state.search.toLowerCase()) ===
                -1
            ) {
                return;
            }
            rows.push(
                <tr key={index}>
                    <td>{item.id}</td>
                    <th>{item.fullName}</th>
                    <td>{item.address}</td>
                    {/* <td>@mdo</td> */}
                    <td>{item.lastSeen}</td>
                    <td>{item.description}</td>
                    {/* <button className='btn btn-primary'>Resolve</button>  */}
                </tr>
            );
        });
    return (
        <>
            {/* {JSON.stringify(result)} */}
            <Input
                type="search"
                name="search"
                placeholder="Search by name..."
                onChange={handleChanges}
            />
            <br></br>
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
                    {rows}
                    {/* {result && result.map((item, i) => (
                    ))} */}
                </tbody>
            </table>
            <h5 className="text-center  mt-5" style={{ color: 'red' }}> {!result.length && !result.length ? <div>No data found</div> : null}</h5>
        </>
    )
}