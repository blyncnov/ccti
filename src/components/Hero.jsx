import React from 'react'

import "../styles/hero.css"
import Image from "../assets/4.svg"

const HeroSection = () => {
    return (
        <>
            <div className="hero__container">
                <div className="constraint__space">
                    <div className="hero__column">
                        <div className="hero__row">
                            <h1>CCTI  Ultimate Design & Tech Community Event . </h1>
                            <p>We are aware that this is the most sought after skill, because every institution and organization require the proficiency of their prospective employees.</p>
                            <p>Be expectant, Be attentive and be cooperative. Be determined and be disciplined, for you to get the best. </p>
                            <button className="btn">
                                <a href="https://chat.whatsapp.com/JRxOEeinVdV3dpiEfmemRK">Join Us Today</a>
                            </button>
                        </div>
                        <div className="hero__row">
                            <img src={Image} alt="showcase" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
