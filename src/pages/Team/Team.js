import React, { useState, useEffect } from "react";
import Navigation  from "../../components/Navigation/Navigation";
import musty from '../../assets/img/tutors/musty.jpg';
import currency from '../../assets/img/tutors/currency.jpg';
import envimac from '../../assets/img/tutors/envimac.jpg';
import tolu from '../../assets/img/tutors/tolu.jpg';
import pritifaith from '../../assets/img/tutors/pritifaith.jpg';
import aveiro from '../../assets/img/tutors/aveiro.jpg';
import clairvoyant from '../../assets/img/tutors/clairvoyant.jpg';
import dc from '../../assets/img/tutors/dc.jpg';
import kelechi from '../../assets/img/tutors/kelechi.jpg';
import pq from '../../assets/img/tutors/pq.jpg';
import kolawole from '../../assets/img/tutors/kolawole.jpg'

import './Team.css'

const coreTeam = [
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905772/DSC_9897_a2efap.jpg',
        name: 'Johnson O. Samuel',
        role: 'Founder, CEO Waltersam Services'
    },
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905789/DSC_9888_s3a2oo.jpg',
        name: 'Adeoye Lutfat',
        role: 'Special Adviser'
    },
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905760/DSC_9885_kuvm1r.jpg',
        name: 'Ayanteju Muiz',
        role: 'General Manager'
    },
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905811/DSC_9877_lmwgj5.jpg',
        name: 'Shogade Eyitayo',
        role: 'Production Manager'
    },
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905746/DSC_9878_veqopl.jpg',
        name: 'Olasunkanmi Daniel',
        role: 'Head Tutor'
    }
]

const techTeam = [
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905788/DSC_9852_keqkpg.jpg',
        name: 'Oluwafemi Seun Paul',
        role: 'Head Of Software developers'
    },
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905758/DSC_9839_hxndlj.jpg',
        name: 'Agboola Fuhad',
        role: 'Mobile developer'
    },
    {
        img: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640905720/DSC_9841_fo7igs.jpg',
        name: 'Atanda Damilare',
        role: 'UI/UX designer'
    }
]

const tutors = [
    {
        img: musty,
        name: 'MUSTAPHI',
        role: '400 level Civil Engineering'
    },
    {
        img: currency,
        name: 'CURRENCY',
        role: 'President Mathematics Department'
    },
    {
        img: envimac,
        name: 'ENVIMAC',
        role: '500 level industrial chemistry'
    },
    {
        img: tolu,
        name: 'TOLU',
        role: 'BSC in View Computer Science'
    },
    {
        img: pritifaith,
        name: 'PRITIFAITH',
        role: 'Graduate (Mathematics Department)'
    },
    {
        img: aveiro,
        name: 'AVEIRO',
        role: '300 Level Mechanical Engineering'
    },
    {
        img: clairvoyant,
        name: 'CLAIRVOYANT',
        role: 'President Physics Department'
    },
    {
        img: dc,
        name: 'DC LAB',
        role: '400 Level Electrical Engineering'
    },
    {
        img: kelechi,
        name: 'OBODO KELECHI',
        role: 'President Chemistry Department'
    },
    {
        img: pq,
        name: 'DR PQ',
        role: 'EX Vice President Microbiology Department'
    },
    {
        img: kolawole,
        name: 'KOLAWOLE',
        role: 'BSC in View Biomedical Engineering'
    }
]

const Team = ()=>{
    const [selectedTutor, setSelectedTutor] = useState(0)

    useEffect(()=>{
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [])

    return(
        <div className="Team">
            <Navigation page="Team"/>
            <div className="team-landing">
                <p>Meet The <span>Team</span></p>
            </div>
            <div className="team-core-teams">
            {
                coreTeam.map((member)=>(
                    <div className="team-core-team">
                        <img src={member.img} alt=""/>
                        <p>{member.name}</p>
                        <p>{member.role}</p>
                    </div>
                ))
            }
            </div>
            <div className="section-description"><h3>Meet the Tech guys</h3><div className="section-description-bar"/></div>
            <div className="team-tech-teams">
            {
                techTeam.map((member, i)=>(
                    <div key={i} className="team-tech-team">
                        <img src={member.img} alt=""/>
                        <p>{member.name}</p>
                        <p>{member.role}</p>
                    </div>
                ))
            } 
            </div>
            <div className="section-description"><h3>Meet the Tutors</h3><div className="section-description-bar"/></div>
            <div className="team-tutor-teams">
                <div className="team-tutor-team">
                    <img src={tutors[selectedTutor].img} alt=""/>
                    <p>{tutors[selectedTutor].name}</p>
                    <p>{tutors[selectedTutor].role}</p>
                </div>
                <div>
                    <select onChange={(e)=>setSelectedTutor(e.target.value)}>
                    {
                        tutors.map((tutor, i)=>(
                            <option key={i} value={i}>{tutor.name}</option>
                        ))
                    }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Team;