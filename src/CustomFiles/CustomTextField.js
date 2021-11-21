import React from 'react'
export default function CustomTextField({ name = '', label = '', value = '', onfocus = '', type = 'text', placeholder = '', handleChange = f => f }) {
    return (
        <div>
            <label>{label}</label>
            <textarea className="form-control"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
        </div>
            )

}