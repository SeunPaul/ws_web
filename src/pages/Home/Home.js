import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import Navigation from "../../components/Navigation/Navigation";
import { useMediaQuery } from "../../components/useMediaQuery";
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { UncontrolledCarousel } from "reactstrap"
import { ReactComponent as AccIcon } from "../../assets/svg/accomodationIcon.svg";
import { ReactComponent as MatIcon } from "../../assets/svg/materialsIcon.svg";
import { ReactComponent as ConIcon } from "../../assets/svg/consultancyIcon.svg";
import { ReactComponent as TutIcon } from "../../assets/svg/tutorialIcon.svg";
import { ReactComponent as Mark } from "../../assets/svg/mark.svg";
import { ReactComponent as Quote } from "../../assets/svg/quote.svg";
import tolu2 from "../../assets/img/tolu2.png";
import sola from "../../assets/img/sola.png";
import bisola from "../../assets/img/bisola.png"
import 'aos/dist/aos.css';
import "./Home.css";


const Home = ()=>{
    const isSmallScreen = useMediaQuery('(max-width: 60rem)');
    const isSmallScreen2 = useMediaQuery('(max-width: 70rem)');
    const [imageIndex, setImageIndex] = useState(0)
    const heroImages = [
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640798103/DSC_9908_c1oiwy.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640801969/DSC_9912_ye4zpy.png',
        'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640806484/DSC_9915_ffl4ld.png'
    ]

    const eventImages = [
        {
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785675/IMG_2790-min_lpvvcq.jpg',
            altText: 'Slide 1',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785665/IMG_2784-min_afnlrv.jpg',
            altText: 'Slide 2',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785615/IMG_2776-min_embol1.jpg',
            altText: 'Slide 3',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785591/IMG_2779-min_ibs2ln.jpg',
            altText: 'Slide 4',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785582/IMG_2774-min_nk83yv.jpg',
            altText: 'Slide 5',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785721/IMG_2763-min_vdottc.jpg',
            altText: 'Slide 7',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785624/7D286E30-A2F9-4BC2-8702-02A9C5FD1849-min_jnnnnx.jpg',
            altText: 'Slide 8',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785614/0D8200C3-0D1C-43A5-B201-E669BF375F30-min_pfjylh.jpg',
            altText: 'Slide 9',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785580/IMG_2777-min_vdfla1.jpg',
            altText: 'Slide 10',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785572/IMG_2782-min_ikonnw.jpg',
            altText: 'Slide 11',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785557/IMG_2773-min_x0vos7.jpg',
            altText: 'Slide 12',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785754/IMG_2757-min_sp5k5m.jpg',
            altText: 'Slide 13',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785789/IMG_2771-min_u3igcx.jpg',
            altText: 'Slide 14',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640785726/IMG_2761-min_eyif0c.jpg',
            altText: 'Slide 15',
            caption: '',
            header: ''
        }
    ];

    const products = [
        {
            image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906544/book1_gelixm.jpg'
        },
        {
            image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906543/book2_zxilxk.jpg'
        },
        {
            image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640907314/book3_rhj2tn.jpg'
        },
        {
            image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906548/book4_dy9jlu.jpg'
        },
        {
            image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640907486/book5_bxy4pp.jpg'
        },
        {
            image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640907484/book6_ovaeum.jpg'
        },
    ]

    const heroBackgroundSize = ()=> {
        if(isSmallScreen){
            return imageIndex !== 0 ? '21rem': '25rem'
        }

        if(isSmallScreen2){
            return imageIndex !== 0 ? '27rem': 'cover'
        }
        
        return 'cover'
        
    }

    const particlesOption = {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 600
                }
            },
            "color": {
                "value": "#ffffff"
            },
            
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        }
    }

    useEffect(()=>{
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [])
    
    useEffect(()=>{
        setTimeout(()=>{
            if(imageIndex < 2){
                setImageIndex(imageIndex + 1)
            }else{
                setImageIndex(0)
            }
        }, 5000)
    // eslint-disable-next-line
    }, [imageIndex])

    useEffect(()=>{
        Aos.init({ duration: 1000 })
    }, [])

    return(
        <div className="Home">
            <Navigation page="Home"/>
            <div className="home-landing">
                <div className="welcome-wrapper">
                    <h1 className="welcome-text">
                        The best educational investment that pays the best interest
                    </h1>
                    <Link to="/contact"><button className="contact-us-btn">Contact Us</button></Link>
                </div>
                <div className="hero-section">
                    <div className="hero-img" 
                        style={{
                            backgroundImage: `url(${heroImages[imageIndex]})`,
                            backgroundSize: heroBackgroundSize()
                        }}
                    />
                    <div className="model-item item1 animate__animated animate__fadeInUpBig">
                        <div className="icon-wrapper">
                            <ConIcon className="icon"/>
                        </div>
                        <p className="model-item-text">Consultancy</p>
                    </div>
                    <div className="model-item item2 animate__animated animate__fadeInRight">
                        <div className="icon-wrapper">
                            <TutIcon className="icon"/>
                        </div>
                        <p className="model-item-text">Tutorials</p>
                    </div>
                    <div className="model-item item3 animate__animated animate__fadeInBottomLeft">
                        <div className="icon-wrapper">
                            <MatIcon className="icon"/>
                        </div>
                        <p className="model-item-text">Study materials, Past Questions, textbooks</p>
                    </div>
                    <div className="model-item item4 animate__animated animate__fadeInRightBig">
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
                    <div data-aos="fade-right" className="what-we-do-plaque plaque1">
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
                    <div data-aos="fade-up" className="what-we-do-plaque plaque2">
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
                    <div data-aos="fade-left" className="what-we-do-plaque plaque3">
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
                    <div data-aos="fade-right" className="about-us-img"/>
                    <div data-aos="fade-left" className="about-us-right">
                        <p className="about-us-short-text">
                            Waltersam Services is an Educational Organization that creates an 
                            enabling environment to help Aspirants and Students of all Nigerian 
                            Tertiary Institutions have an easy Academic Life.<br/><br/>
                            Waltersam Sevices was founded in Dec 17 2018. The first service ever 
                            rendered by waltersam service was accommodation services. Thereafter, 
                            we went fully into educational and consultancy in june 26 2019 by providing 
                            students with study materials such as past questions with detailed and 
                            explanatory solutions, simplified notes etc.
                        </p>
                        <Link to="/about"><button className="read-more-us-btn">Read More</button></Link>
                    </div>
                </div>
            </div>
            <div className="home-waltersamite">
                <Particles
                    className = "particles"
                    params = {particlesOption}
                />
                <div className="section-description"><h3>Become a waltersamite</h3><div className="section-description-bar"/></div>
                <div className="waltersamite-wrapper">
                    <div className="waltersamite-img"/>
                    <div data-aos="fade-left" className="waltersamite-right">
                        <div className="list-item">
                            <div className="list-tag"/>
                            <p className="list-number">01</p>
                            <p className="list-text">Reach out to us</p>
                        </div>
                        <div className="list-item">
                            <div className="list-tag"/>
                            <p className="list-number">02</p>
                            <p className="list-text">Buy any of our Waltersam book packages</p>
                        </div>
                        <div className="list-item">
                            <div className="list-tag"/>
                            <p className="list-number">03</p>
                            <p className="list-text">
                                Register for any waltersam tutorials. And there
                                you are, a registered waltersamite!
                            </p>
                        </div>
                        <Link to="/contact"><button className="waltersamite-btn">Get Started</button></Link>
                    </div>
                </div>
            </div>
            <div className="home-benefits">
                <div className="section-description"><h3>Benefits of becoming a waltersamite</h3><div className="section-description-bar"/></div>
                <div data-aos="fade-left" className="benefit-item"><Mark className="mark-icon"/><p>Free Entry into WS Special Saturday Marathon Tutorials</p></div>
                <div data-aos="fade-left" className="benefit-item"><Mark className="mark-icon"/><p>Free Entry into WS SLEQ - Solving Likely Examination Questions during examination periods.</p></div>
                <div data-aos="fade-left" className="benefit-item"><Mark className="mark-icon"/><p>Free Registration for WS Monthly Mock Examinations.</p></div>
                <div data-aos="fade-left" className="benefit-item"><Mark className="mark-icon"/><p>You also stand a chance to win Awards (Best Waltersamite of the Year, Best Student of the Year, and lots more).</p></div>
                <div data-aos="fade-left" className="benefit-item"><Mark className="mark-icon"/><p>Based on high performances, you might be inducted into WS Work Force where you will Earn with what you've Learnt.</p></div>
                <div data-aos="fade-left" className="benefit-item"><Mark className="mark-icon"/>
                    <p>
                        Skill Development with the Top Personalities in WS Work Force including Copywriting, Programming, Graphics Designing, 
                        Entrepreneurship, Affiliate Marketing, and lots more in the Digital World generally.
                    </p>
                </div>
                <div data-aos="fade-left" className="benefit-item"><Mark className="mark-icon"/><p>A Life Time follow-up from the whole of WS Team.</p></div>
                <div data-aos="fade-left" className="benefit-item"><p><i>...a Waltersamite is worth more than Gold</i></p></div>
            </div>
            <div className="home-event-images">
                <div className="home-event-images-wrapper">
                    <div className="home-event-images-el1"/>
                    <div className="home-event-images-el2"/>
                    <UncontrolledCarousel items={eventImages} />
                </div>
            </div>
            <div className="home-our-products">
                <div className="section-description"><h3>Our Products</h3><div className="section-description-bar"/></div>
                <div className="home-our-products-wrapper">
                {
                    products.map((item, i)=>
                        <div data-aos="fade-up" key={i} className="home-our-products-item">
                            <img src={item.image} alt=""/>
                        </div>
                    )
                }
                </div>
                <div className="home-our-products-btn"><Link to="/products"><button className="read-more-us-btn">View all products</button></Link></div>
            </div>
            <div className="home-reviews">
                <div className="section-description"><h3>We deliver what we promise</h3></div>
                <p className="section-subdescription">Here is what people are saying about us</p>
                <div className="home-reviews-wrapper">
                    <div data-aos="fade-right" className="home-reviews-item">
                        <Quote className="home-reviews-quote"/>
                        <p> I started out 100level not truly knowing what to expect in my courses and then someone 
                            introduced me to Waltersam Tutorials. I was hesitant at first but overtime I grew fond of it, 
                            I loved attending the classes, I loved the tutors and how they taught and it has helped me greatly.
                            I just thank God for allowing me to hear of and join the tutorials. And thank you Waltersam 
                            Tutorials for everything.
                        </p>
                        <div className="home-reviews-item-avatar">
                            <img src={tolu2} alt=""/>
                            <div>
                                <p>Adeyemi Dada Tolulope</p>
                                <p>Student</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="home-reviews-item">
                        <Quote className="home-reviews-quote"/>
                        <p> The mock was perfectly organised. The design of the platform was quite awesome. It was 
                            easy to navigate from one page to the other, it was also quite easy to identify the 
                            questions I hadn't answered. The platform for the mock was perfect for its purpose and
                            I never had any issues during the exam. Thank you so much, Waltersam. Overall, it was a 
                            wonderful experience!
                        </p>
                        <div className="home-reviews-item-avatar">
                            <img src={sola} alt=""/>
                            <div>
                                <p>Solakiitan Osikoya</p>
                                <p>Student</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="home-reviews-item">
                        <Quote className="home-reviews-quote"/>
                        <p> 
                            Thank you for helping me with my hostel accommodation through 2 years in unilag🤩🤗

                            You saved me the stress of coming from outside campus everyday.
                        </p>
                        <div className="home-reviews-item-avatar">
                            <img src={bisola} alt=""/>
                            <div>
                                <p>Taiwo Abisola</p>
                                <p>Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;