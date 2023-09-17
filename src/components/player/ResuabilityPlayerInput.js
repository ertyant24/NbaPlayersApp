import React from 'react'

function ResuabilityPlayerInput(props) {

    // OBJECT DESTRUCTİNG
    const {type, className, name, id, placeholder, onChange, value, autoFocus, validation} = props;

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
            {/* <span style={{fontSize: "0.8rem"}} className='ps-1 fw-semibold text-danger'>{validation}</span> */}
        </>
    )
}

export default ResuabilityPlayerInput
