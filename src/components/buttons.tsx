import React from 'react'

interface ITransparentButton {
    text?: string;
    handleClick?: any;
}
function HeroButton({ text = "Sign In", handleClick }: ITransparentButton) {

    return (
        <button className="btn" onClick={handleClick}>{text}</button>
    )
}

export default HeroButton
