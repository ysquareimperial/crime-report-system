import React, { useState, createContext } from 'react'

export const UserContext = createContext([[], () => { }])

export const UserProvider = (props) => {
    const [name, setName] = useState([])
    return (
        <UserContext.Provider value={[name, setName]}>
            {props.children}
        </UserContext.Provider>
    )
}