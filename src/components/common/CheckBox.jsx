import React from 'react'

const CheckBox = ({title, name}) => {
    return (
        <label>
            <input type='checkbox' name={name} />
            <span className="checkBox"></span>
            <span>{title}</span>
        </label>
    )
}

export default CheckBox