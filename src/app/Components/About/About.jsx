import React from 'react'
import './About.css'
function About() {
    return (
        <section className='bg-image d-flex  justify-content-center align-items-center '>
            <div className='container w-50 '>
                <div className="row ">
                    <div className="d-flex flex-column text-center text-light">
                        <p className='fs-1 text-center fw-bold'>Creating a narrative for your brain</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eaque harum ratione commodi quidem fugit? Ratione, eius sapiente quam omnis minus iste numquam at explicabo nemo! Atque, soluta illo? Sequi!</p>
                        <div className="">
                        <button className='btn btn-light'>Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About