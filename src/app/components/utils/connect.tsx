import React from 'react'

const Connect = () => {
  return (
    <section className="connect-video-section">
      <div className='section-title'>
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, id?</p>
      </div>
    <div className='connect-video-container'>
      <video controls={false} autoPlay muted className='video-connect'>
        <source  src="/connect.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
         <button className="btn connect-btn">
          Message us
         </button>
    </div>
    </section>
  )
}

export default Connect
