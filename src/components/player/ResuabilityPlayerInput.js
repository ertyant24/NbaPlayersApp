import React from 'react'

function ResuabilityPlayerInput(props) {

    // OBJECT DESTRUCTİNG
    const {type, className, name, id, placeholder, onChange, value, autoFocus} = props;

    return (
        <>
            <input
                onChange={onChange}
                type={type}
                className={className}
                name={name}
                id={id}
                placeholder={placeholder}
                autoFocus={autoFocus}
                value={value}
            />
            <label htmlFor={id}>{placeholder}</label>
        </>
    )
}

export default ResuabilityPlayerInput
