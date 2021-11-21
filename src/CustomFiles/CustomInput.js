import React from 'react'
export default function CustomInput({ name = '', label = '', value = '', onfocus='', type = 'text', placeholder = '', handleChange = f => f }) {
    return (
        <div>
            <label>{label}</label>
            <input
                className="form-control"
                onFocus={onfocus}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )

}