import React from 'react'

import "../styles/navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar__container">
                <div className="constraint__space">
                    <div className="navbar__row">
                        <div className="logo">
                            <h1>CCT<span>i</span></h1>
                        </div>
                        <div >
                            <button className="schedule__btn" type=" submit">
                                <a href="https://chat.whatsapp.com/JRxOEeinVdV3dpiEfmemRK">Schedule</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
