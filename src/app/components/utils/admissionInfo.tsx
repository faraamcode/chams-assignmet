import Link from 'next/link'
import React from 'react'

function AdmissionInfo() {
    return (
        <div className='section admission-title'>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt harum delectus ipsum fugit ad a ullam error illo alias, enim eius cum deserunt accusantium molestiae, numquam eum. Reiciendis tempora dolor nulla ipsa a voluptatum minus? Cumque nihil aut adipisci sed!</p>
            <Link href="/schedule-tour" className="button-wrapper">

                <button className="btn">schedule a visit</button>
            </Link>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident ducimus mollitia fugiat aliquam excepturi corporis quam</h4>
        </div>
    )
}

export default AdmissionInfo
