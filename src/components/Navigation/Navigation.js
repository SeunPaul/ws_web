import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/svg/wsSvgLogo.svg';
import Sidebar from '../Sidebar/Sidebar';
import menu from '../../assets/img/menu.png';
import './Navigation.css';

const Navigation = ({page})=>{
    const [navPage, setNavPage] = useState(page)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
    }

    const onChangePage = (newPage)=>{
        setNavPage(newPage)
        window.scrollTo({top: 0, behaviour: 'smooth'});
    }

    return(
        <>
        <div className="Navigation">
            { menuOpen && <Sidebar toggleMenu={toggleMenu} page={page}/> }
            <div className="web_nav-logo_sec">
                <img className="web_menu-btn" src={menu} onClick={toggleMenu} alt=""/>
                <Logo className="web_nav-logo"/>
                <h3 className="web_nav-logo-text">WALTERSAM SERVICES</h3>
            </div>
            <div className="web_nav-list_sec">
                <Link onClick = {()=>onChangePage("Home")} className="web-list_wrapper" to ="/">
                    <p className={`web_nav-list_item${navPage === 'Home'? ' webactive': ""}`}>Home</p>
                </Link>
                <Link onClick = {()=>onChangePage("About")} className="web-list_wrapper" to ="/about">
                    <p className={`web_nav-list_item${navPage === 'About'? ' webactive': ""}`}>About Us</p>
                </Link>
                <Link onClick = {()=>onChangePage("Products")} className="web-list_wrapper" to ="/products">
                    <p className={`web_nav-list_item${navPage === 'Products'? ' webactive': ""}`}>Our Products</p>
                </Link>
                <Link onClick = {()=>onChangePage("Team")} className="web-list_wrapper" to ="/team">
                    <p className={`web_nav-list_item${navPage === 'Team'? ' webactive': ""}`}>Our Team</p>
                </Link>
                <Link onClick = {()=>onChangePage("Contact")} className="web-list_wrapper" to ="/contact">
                   <p className={`web_nav-list_item${navPage === 'Contact'? ' webactive': ""}`}>Contact Us</p>
                </Link>
                <a onClick = {()=>onChangePage("Mock")} className="web-list_wrapper" href="https://mockexam.waltersamservices.com">
                   <p className={`web_nav-list_item${navPage === 'Mock'? ' webactive': ""}`}>Mock Exams</p>
                </a>
                <a onClick = {()=>onChangePage("Blog")} className="web-list_wrapper" href="https://blog.waltersamservices.com">
                    <p className={`web_nav-list_item${navPage === 'Blog'? ' webactive': ""}`}>Blog</p>
                </a>
            </div>
        </div>
        </>
    )
}

export default Navigation;