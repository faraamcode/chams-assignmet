import React from 'react'
interface IdropDown {
    left: number;
    height: number;
    closeDropDown: any
}
function DropDown({ left, height, closeDropDown }: IdropDown) {
    return (
        <ul className="drop-downs" style={{ left, height }} onClick={closeDropDown}>
            <li className="drop-down">Creche</li>
            <li className="drop-down">Primary school</li>
            <li className="drop-down">Secondary</li>
        </ul>
    )
}

export default DropDown
