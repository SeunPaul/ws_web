import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { UncontrolledCarousel } from "reactstrap"
import "./Products.css"

const Products = ()=>{
    const [selectedFilter, setSelectedFilter] = useState(0)
    const bannerImages = [
        {
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906563/banner1_z9dswk.jpg',
            altText: 'Slide 1',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906563/banner2_zyemfb.jpg',
            altText: 'Slide 2',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906562/banner3_zz7xgx.jpg',
            altText: 'Slide 3',
            caption: '',
            header: ''
        },{
            src: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640910717/banner4_fmxfhd.jpg',
            altText: 'Slide 4',
            caption: '',
            header: ''
        }
    ];

    const products = [
        [
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906548/book4_dy9jlu.jpg',
                description: 'Faculty Of Science and Education Year1 Package',
                price: 5000
            },
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640906544/book1_gelixm.jpg',
                description: 'Faculty Of Engineering Year1 Package',
                price: 5000
            },
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640909555/book8_a4frcx.jpg',
                description: 'MAT Series',
                price: 5000
            },
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640909555/book7_ke0m7u.jpg',
                description: 'College Of Medicine / Biological Science Package',
                price: 3000
            },
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640910718/book10_shhenc.png',
                description: 'GEG Series',
                price: 4000
            },
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640909639/book9_g5rfzq.jpg',
                description: 'Physics Question Bank',
                price: 3000
            }
        ],
        [
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640907486/book5_bxy4pp.jpg',
                description: 'Biological Science Year 2 Package',
                price: 4000
            },
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640907484/book6_ovaeum.jpg',
                description: 'Physical Science and Education Year 2 Package',
                price: 5000
            }
        ],
        [
            {
                image: 'https://res.cloudinary.com/ds5l1k3bl/image/upload/v1640910702/book11_omrddb.png',
                description: 'Unilag Post-utme past questions and answers [2021 Edition].',
                price: 2500
            }
        ]

    ]

    useEffect(()=>{
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [])

    return(
        <div className="Products">
            <Navigation page="Products"/>
            <div className="product-landing">
                <UncontrolledCarousel items={bannerImages}/>
            </div>
            <div className="product-select">
                <span>Filter: &nbsp; &nbsp; </span>
                <select 
                    value={selectedFilter}
                    onChange={(e)=>setSelectedFilter(e.target.value)}
                >
                    <option value={0}>Year 1</option>
                    <option value={1}>Year 2</option>
                    <option value={2}>Post Utme</option>
                </select>
            </div>
            <div className="home-our-products-wrapper">
            {
                products[selectedFilter].map((item, i)=>
                    <div key={i} className="home-our-products-item">
                        <img src={item.image} alt=""/>
                        <p>{item.description}</p>
                        <p>{`₦${item.price}`}</p>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Products;