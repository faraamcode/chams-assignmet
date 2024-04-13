import React from 'react'
import Image from 'next/image'
import Project3 from "../../../assets/project-3.jpeg"



const Team = () => {
    return (
        <section className="section blog">
            {/* <!-- section title --> */}
            <div className="section-title">
                <h2>Our team</h2>
            </div>
            {/* <!--end of section title --> */}
            <div className="section-center news-center">
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure>
                        <Image width={100} height={100} src={Project3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><Image width={100} height={100} src={Project3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><Image width={100} height={100} src={Project3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
