import React from 'react'
import { FaAngellist, FaCottonBureau, FaDyalog } from "react-icons/fa"

import "../styles/content.css"

const Content = () => {
    return (
        <>
            <div className="contents">
                <div className="constraint__space">
                    <h2>Rules & Requirements</h2>
                    <br />
                    <div className="content__row">
                        <div className="content__box">
                            <FaAngellist style={{ fontSize: "3em" }} />
                            <br />
                            <br />
                            <h2>CCTI VISION</h2>
                            <p>Everyone present in this group is enjoined to take part in this particular class virtually but when you come for the physical class, strictly go to your classes and segment as directed</p>                            <a href="/" >Learn More... </a>
                        </div>
                        <div className="content__box">
                            <FaCottonBureau style={{ fontSize: "3em" }} />
                            <br />
                            <br />
                            <h2>CCTI RULES</h2>
                            <p>There is an advantage the physical class has over the online class.
                                Come and get to know your Facilitators , don't be hesitant to ask questions. I expect to see all your faces today.</p>                            <a href="/" >Learn More...</a>
                        </div>
                        <div className="content__box">
                            <FaDyalog style={{ fontSize: "3em" }} />
                            <br />
                            <br />
                            <h2>CCTI POWER</h2>
                            <p>The requirements for each class would be sent shortly, please make sure you read through the requirements, understand very well and be sure to meet up, before joining.</p>
                            <a href="/" >Learn More...</a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </>
    )
}

export default Content
