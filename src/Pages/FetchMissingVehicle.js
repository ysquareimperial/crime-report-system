import React, { useCallback, useEffect, useState, useContext } from 'react'
import { UserContext } from "../contextApi/UserContext";
import { Input } from 'reactstrap';
export default function FetchMissingVehicle() {
    const [result, setResult] = useState([])
    const [name, setName] = useContext(UserContext);

    const fetchData = useCallback(() => {
        fetch(`http://localhost:9090/missingvehicle_get?email=${name.email}`)
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
                item.vehicleName.toLowerCase().indexOf(state.search.toLowerCase()) ===
                -1
            ) {
                return;
            }
            rows.push(
                <tr key={index}>
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
            );
        });
    return (
        <>
            <Input
                type="search"
                name="search"
                placeholder="Search by vehicle name..."
                onChange={handleChanges}
            />
            <br></br>
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
                    {/* {result && result.map((item, i) => (
                        <tr>
                            {JSON.stringify(item)}

                            <th>{item.id}</th>
                            <td>{item.vehicleName}</td>
                            <td>{item.vehicleModel}</td>
                            <td>@mdo</td>
                            <td>{item.vehiclePlateNo}</td>
                            <td>{item.lastSeen}</td>
                            <td>{item.description}</td>
                            <button className='btn btn-primary'>Resolve</button>
                        </tr>
                    ))} */}
                    {rows}
                </tbody>
            </table>
            <h5 className="text-center mt-5" style={{ color: 'red' }}> {!result.length && !result.length ? <div>No data found</div> : null}</h5>
        </>
    )
}