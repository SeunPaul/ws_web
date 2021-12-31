import React, { useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import mission from "../../assets/img/Saly2.png"
import vision from "../../assets/img/Saly.png"
import "./About.css"

const About = ()=>{
    
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [])

    return(
        <div className="About">
            <Navigation page="About"/>
            <div className="about-landing">
                <p>About <span>Us</span></p>
            </div>
            <div className="about-us-text-wrapper">
                <p>Waltersam Services is an Educational Organization that 
                    creates an enabling environment to help Aspirants 
                    and Students of all Nigerian Tertiary Institutions have an 
                    easy Academic Life.<br/><br/>

                    Waltersam Sevices was founded in Dec 17 2018. The first 
                    service ever rendered by waltersam service was 
                    accommodation services. Thereafter, we went fully into 
                    educational and consultancy in june 26 2019 by providing 
                    students with study materials such as past questions 
                    with detailed and explanatory solutions, simplified notes etc. 
                    Examination registration, project assistance, tutorials, admission guide 
                    and processing and so on was added to the services. Waltersam services have
                    always love to be better, in 2020 we came up with a unique exam standard 
                    cbt software for exam practice, online mock examination for aspirant and undergraduates.<br/><br/>

                    With our base in the University Of Lagos, we have defied all odds to become the most wanted 
                    Educational Brand in the University and other tertiary schools in Nigeria within the 
                    space of 3 years. Waltersam Services is of one goal - To help students enjoy the journey 
                    of education.
                </p>
            </div>
            <div className="about-mission-vision">
                <div className="about-mission">
                    <div>
                        <h5>Our Mission</h5>
                        <div className="about-mission-vision-description">
                            <div className="about-mission-vision-description-bar"/>
                            <p>
                                To bring the Academic dreams of Nigerian Students and 
                                Aspirants to reality and support them with trustable processes.
                            </p>
                        </div>
                    </div>
                    <img src={mission} alt="mission"/>
                </div>
                <div className="about-vision">
                    <div>
                        <h5>Our Vision</h5>
                        <div className="about-mission-vision-description">
                            <div className="about-mission-vision-description-bar"/>
                            <p>
                                To make the academic life of all students in Nigerian Tertiary 
                                Institutions an easy one and be a strong fort for struggling 
                                students in rising again.
                            </p>
                        </div>
                    </div>
                    <img src={vision} alt="vision"/>
                </div>
            </div>
            <div className="section-description"><h3>Accommodation</h3><div className="section-description-bar"/></div>
        </div>
    )
}

export default About;