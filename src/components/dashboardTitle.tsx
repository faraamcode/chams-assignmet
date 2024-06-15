import React from 'react'
interface IDashboardTitle {
    heading: string;
    paragraph: string
}
function DashboardTitle({ heading, paragraph }: IDashboardTitle) {
    return (
        <div className="board-title">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    )
}

export default DashboardTitle
