import React from 'react'
export default function CustomButton({ type = 'text', className = '', btnText = 'click', handleSubmit = f => f }) {
    return (
        <div>
            <button
                style={{ borderRadius: 20 }}
                className={className}
                type={type}
                onClick={handleSubmit}
            >
                {btnText}
            </button>
        </div>
    )
}