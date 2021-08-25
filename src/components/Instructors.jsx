import React from 'react'

import "../styles/instructors.css"

const Instructors = () => {
    return (
        <>
            <div className="instruction__container">
                <div className="constraint__space">
                    <h2>Our Instructors</h2>
                    <p>Passionate Instructor driving at the sucess of the program</p>
                    <br />
                    <div className="instruction__row">
                        <div className="instruction__box">
                            <div className="image__box">
                            </div>
                            <br />
                            <h4>Akamo Dolapo</h4>
                            <p>Web developer</p>
                            <br />
                        </div>

                        <div className="instruction__box">
                            <div className="image__box">
                            </div>
                            <br />
                            <h4>Agbaje Isreal</h4>
                            <p>Graphics Designs</p>
                            <br />
                        </div>

                        <div className="instruction__box">
                            <div className="image__box">
                            </div>
                            <br />
                            <h4>Ogundana Ayomide</h4>
                            <p>Creative Director</p>
                            <br />
                        </div>

                        <div className="instruction__box">
                            <div className="image__box">
                            </div>
                            <br />
                            <h4>Ashaluwala kazeem</h4>
                            <p>Mobile App developer</p>
                            <br />
                        </div>

                        <div className="instruction__box">
                            <div className="image__box">
                            </div>
                            <br />
                            <h4>Agbakosi Adeoluwa</h4>
                            <p>Product Designer</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="footer">
                <div className="footer__box">
                    <h6>CCTI  @ 2020</h6>
                    <br /> <br />
                    <p>Federal University of Agriculture, Abeokuta</p>

                    <h6>Feel free to message us at team CCTI</h6>
                </div>
            </div>
        </>
    )
}

export default Instructors
