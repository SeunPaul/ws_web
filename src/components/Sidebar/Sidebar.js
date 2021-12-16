import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/svg/wsSvgLogo.svg';
import cancel from '../../assets/img/cancel.png';
import './Sidebar.css'

const Sidebar = ({ toggleMenu, page })=>{
    const [navPage, setNavPage] = useState(page)
    const [showSidebar, setShowSidebar] = useState(false);

    const history = useHistory();

    const onHideSidebar = (newPage)=>{
        setShowSidebar(false);
        setTimeout(()=>{
            history.push(`/${newPage}`)
            toggleMenu()
        }, 300)
    }

    const onChangePage = (newPage)=>{
        setNavPage(newPage)
        window.scrollTo({top: 0, behaviour: 'smooth'});
        onHideSidebar(newPage)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setShowSidebar(true)
        }, 30)
    }, [])
    return(
        <div className="Sidebar">
            <div className={`Sidebar-body ${showSidebar? "show-sidebar": ""}`}>
                <div className="web_sidebar-header">
                    <div className="web_nav-logo_sec">
                        <Logo className="web_nav-logo"/>
                        <h3 className="web_nav-logo-text">WALTERSAM SERVICES</h3>
                    </div>
                    <img className="web_sidebar_menu-btn" src={cancel} onClick={()=>{onHideSidebar(navPage)}} alt=""/>
                </div>
                <div className="sidebar-nav-list">
                    <span onClick = {()=>onChangePage("Home")} className="web-list_wrapper">
                        <p className={`web_nav-list_item${navPage === 'Home'? ' webactive': ""}`}>Home</p>
                    </span>
                    <span onClick = {()=>onChangePage("About")} className="web-list_wrapper">
                        <p className={`web_nav-list_item${navPage === 'About'? ' webactive': ""}`}>About Us</p>
                    </span>
                    <span onClick = {()=>onChangePage("Products")} className="web-list_wrapper">
                        <p className={`web_nav-list_item${navPage === 'Products'? ' webactive': ""}`}>Our Products</p>
                    </span>
                    <span onClick = {()=>onChangePage("Team")} className="web-list_wrapper">
                        <p className={`web_nav-list_item${navPage === 'Team'? ' webactive': ""}`}>Our Team</p>
                    </span>
                    <span onClick = {()=>onChangePage("Contact")} className="web-list_wrapper">
                        <p className={`web_nav-list_item${navPage === 'Contact'? ' webactive': ""}`}>Contact Us</p>
                    </span>
                    <span onClick = {()=>onChangePage("Mock")} className="web-list_wrapper">
                        <p className={`web_nav-list_item${navPage === 'Mock'? ' webactive': ""}`}>Mock Exams</p>
                    </span>
                    <span onClick = {()=>onChangePage("Blog")} className="web-list_wrapper">
                        <p className={`web_nav-list_item${navPage === 'Blog'? ' webactive': ""}`}>Blog</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;