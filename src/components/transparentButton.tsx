import React from 'react'

interface ITransparentButton {
    text?: string;
    handleClick?: any;
}

function TransparentButton({ text = "Create account", handleClick }: ITransparentButton) {
    return (
        <button className="btn-2" onClick={handleClick}>{text}</button>
    )
}

export default TransparentButton
