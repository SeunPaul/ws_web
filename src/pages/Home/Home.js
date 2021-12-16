import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { ReactComponent as AccIcon } from "../../assets/svg/accomodationIcon.svg";
import { ReactComponent as MatIcon } from "../../assets/svg/materialsIcon.svg";
import { ReactComponent as ConIcon } from "../../assets/svg/consultancyIcon.svg";
import { ReactComponent as TutIcon } from "../../assets/svg/tutorialIcon.svg";
import "./Home.css";


const Home = ()=>{
    return(
        <div className="Home">
            <Navigation page="Home"/>
            <div className="home-landing">
                <div className="welcome-wrapper">
                    <h1 className="welcome-text">
                        The best educational investment that pays the best interest
                    </h1>
                    <button className="contact-us-btn">Contact Us</button>
                </div>
                <div className="hero-section">
                    <div className="hero-img"/>
                    <div className="model-item item1">
                        <div className="icon-wrapper">
                            <ConIcon className="icon"/>
                        </div>
                        <p className="model-item-text">Consultancy</p>
                    </div>
                    <div className="model-item item2">
                        <div className="icon-wrapper">
                            <TutIcon className="icon"/>
                        </div>
                        <p className="model-item-text">Tutorials</p>
                    </div>
                    <div className="model-item item3">
                        <div className="icon-wrapper">
                            <MatIcon className="icon"/>
                        </div>
                        <p className="model-item-text">Study materials, Past Questions, textbooks</p>
                    </div>
                    <div className="model-item item4">
                        <div className="icon-wrapper">
                            <AccIcon className="icon"/>
                        </div>
                        <p className="model-item-text">Accomodation</p>
                    </div>
                </div>
            </div>
            <div className="home-what-we-do">
                <div className="section-description"><h3>What we do</h3><div className="section-description-bar"/></div>
                <p className="section-subdescription">Get to know more of Waltersam Services</p>
                <div className="what-we-do-wrapper">
                    <div className="what-we-do-plaque plaque1">
                        <div className="icon-wrapper">
                            <TutIcon className="icon"/>
                        </div>
                        <p className="what-we-do-plaque-text"> 
                            Waltersam <span>Tutorials</span> is a major section of Waltersam Services that 
                            provides Online and Physical Classes, Educational Online Packages, 
                            Past Questions with detailed and explanatory Solutions, Online Mock
                            Examination and lots more to help students get their dreamed success 
                            in Examination (Local and International).
                        </p>
                    </div>
                    <div className="what-we-do-plaque plaque2">
                        <div className="icon-wrapper">
                            <ConIcon className="icon"/>
                        </div>
                        <p className="what-we-do-plaque-text"> 
                            Waltersam <span>Consultancy</span> is another Branch of Waltersam Services that
                            deals with Admission Guide, Project Assistance, All National and International 
                            Examination Registrations, and related services to help students get the best 
                            of every Educational Processes.
                        </p>
                    </div>
                    <div className="what-we-do-plaque plaque3">
                        <div className="icon-wrapper">
                            <AccIcon className="icon"/>
                        </div>
                        <p className="what-we-do-plaque-text"> 
                            Waltersam <span>Accomodations</span> is another stem of Waltersam Services in charge of Hostel 
                            Balloting, getting On-Campus and Off-Campus Accomodation for students, and more related
                            services.
                        </p>
                    </div>
                </div>
            </div>
            <div className="home-about-us">
                <div className="section-description"><h3>About us</h3><div className="section-description-bar"/></div>
                <div className="about-us-wrapper">
                    <div className="about-us-img"/>
                    <div className="about-us-right">
                        <p className="about-us-short-text">
                            Waltersam Services is an Educational Organization that creates and 
                            enable an environment to help Aspirants and Students of all Nigerian 
                            Tertiary Institutions have an easy Academic Life.<br/><br/>
                            Waltersam Sevices was founded in Dec 17 2018. The first service ever 
                            rendered by waltersam service was accommodation services. Thereafter, 
                            we went fully into educational and consultancy in june 26 2019 by providing 
                            students with study materials such as past questions with detailed and 
                            explanatory solutions, simplified notes etc.
                        </p>
                        <button className="read-more-us-btn">Read More</button>
                    </div>
                </div>
            </div>
            <div className="home-waltersamite">
                <div className="section-description"><h3>Become a waltersamite</h3><div className="section-description-bar"/></div>
            </div>
            <div className="home-benefits">
                <div className="section-description"><h3>Benefits of becoming a waltersamite</h3><div className="section-description-bar"/></div>
            </div>
        </div>
    )
}

export default Home;