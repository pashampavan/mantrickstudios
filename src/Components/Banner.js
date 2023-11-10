import React, { useEffect } from 'react'
import './Banner.css'
import car from './Carousel'

export default function Banner() {

  return (
    <div className='banner'>
        <div className="content active">
            <h1 className='movie-title'>Movie title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde nesciunt perspiciatis possimus sint praesentium voluptatum saepe labore similique inventore minima, aliquid modi. Ipsam voluptates culpa harum quibusdam? Est, neque.</p>
        </div>
        <car/>
        {/* <div className="carouselBox">
            <div className="carousel">
                <div className="carousel-item">
                    <img src="../Images/poster1.jpg" alt="hi" />
                </div>
                <div className="carousel-item">
                    <img src="../Images/poster2.jpg" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="../Images/poster3.jpg" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="../Images/poster4.jpg"alt="" />
                </div>
                <div className="carousel-item">
                    <img src="../Images/poster5.jpg"alt="" />
                </div>
            </div>
        </div> */}
    </div>
  )
}
