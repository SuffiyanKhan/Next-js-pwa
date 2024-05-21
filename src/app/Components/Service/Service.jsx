import React from 'react'
import Image from 'next/image'
import './Services.css'

function Services() {
    return (
        <>
            <div className="container mt-5 py-5">
                <h3 className='text-center'>About</h3>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card ">
                            <Image
                                src="/card-1 (1).jpg"
                                style={{objectFit:'cover'}}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <div className="position-absolute cards-detail bottom-0 bg-light px-3 py-2">
                                <h5>Title 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero labore velit ducimus!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card ">
                            <Image
                                src="/card-1 (2).jpg"
                                style={{objectFit:'cover'}}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <div className="position-absolute cards-detail bottom-0 bg-light px-3 py-2">
                                <h5>Title 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero labore velit ducimus!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card ">
                            <Image
                                src="/card-1 (3).jpg"
                                style={{objectFit:'cover'}}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <div className="position-absolute cards-detail bottom-0 bg-light px-3 py-2">
                                <h5>Title 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero labore velit ducimus!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card ">
                            <Image
                                src="/card-1 (4).jpg"
                                style={{objectFit:'cover'}}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <div className="position-absolute cards-detail bottom-0 bg-light px-3 py-2">
                                <h5>Title 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero labore velit ducimus!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card ">
                            <Image
                                src="/card-1 (2).jpg"
                                style={{objectFit:'cover'}}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <div className="position-absolute cards-detail bottom-0 bg-light px-3 py-2">
                                <h5>Title 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero labore velit ducimus!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="card ">
                            <Image
                                src="/card-1 (1).jpg"
                                style={{objectFit:'cover'}}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <div className="position-absolute cards-detail bottom-0 bg-light px-3 py-2">
                                <h5>Title 1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero labore velit ducimus!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services