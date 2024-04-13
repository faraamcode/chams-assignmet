import Image from 'next/image'
import React from 'react'
import Projet1 from "../../../assets/project-1.jpeg"
import Project2 from "../../../assets/project-2.jpeg"
import Project3 from "../../../assets/project-3.jpeg"
import Project4 from "../../../assets/project-4.jpeg"

const Gallery = () => {
    return (
        <section className="section projects">
            {/* <!-- section title --> */}
            <div className="section-title">
                <h2>Our Gallery</h2>
            </div>
            {/* <!--end of section title --> */}
            <div className="section-center projects-center">
                {/* <!-- single project --> */}
                <a href="/" className="project-1">
                    <article className="project">
                        <Image
                            width={100}
                            height={100}
                            src={Projet1}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>School library</h4>
                            <p>Unlocking worlds through the power of knowledge</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --> */}
                {/* <!-- single project --> */}
                <a href="/" className="project-2">
                    <article className="project">
                        <Image
                            width={100}
                            height={100}
                            src={Project2}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>Laboratory</h4>
                            <p>Exploring the realms of science one experiment at a time.</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --><!-- single project --> */}
                <a href="/" className="project-3">
                    <article className="project">
                        <Image
                            width={100}
                            height={100}
                            src={Project3}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>Sport</h4>
                            <p>Where champions rise and dreams take flight.</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --><!-- single project --> */}
                <a href="/" className="project-4">
                    <article className="project">
                        <Image
                            width={100}
                            height={100}
                            src={Project4}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>Class rooms</h4>
                            <p>Where minds ignite and futures take shape</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --> */}
            </div>
        </section>
    )
}

export default Gallery
