import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/wsSvgLogo.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg"
import "./Footer.css";


const Footer = ()=>{
    return(
        <div className="Footer">
            <div className="footer-items">
                <div className="footer-item footer-item1">
                    <Logo className="ws-logo"/>
                    <p>An enterprise targeted at making the sojourn of an undergraduates
                        an impactful one.
                    </p>
                    <div className="social-icons">
                        <a href="https://twitter.com/Waltersam_services"><img className="social-icon" src={twitter} alt=""/></a>
                        <a href="https://instagram.com/"><img className="social-icon" src={instagram} alt=""/></a>
                        <a href="https://facebook.com"><img className="social-icon" src={facebook} alt=""/></a>
                    </div>
                </div>
                <div className="footer-item footer-item2">
                    <p className="footer-item-header">Company</p>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/products"><p>Our Products</p></Link>
                    <Link to="/team"><p>Our Team</p></Link>
                    <a href="https://mockexam.waltersamservices.com"><p>Mock Exams</p></a>
                    <a href="https://blog.waltersamservices.com"><p>Blog</p></a>
                </div>
                <div className="footer-item footer-item3">
                    <p className="footer-item-header">Contact</p>
                    <a href="http://waltersamservices@gmail.com"><p>waltersamservices@gmail.com</p></a>
                    <p>000 000 000</p>
                    <p>000 000 000</p>
                </div>
                <div className="footer-item footer-item4">
                    <p className="footer-item-header">Offices</p>
                    <p>Lagos - Unilag</p>
                </div>
            </div>
            <div className="copywright-wrapper">
                <p className="copywright">&copy; 2021, Waltersam services, All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;