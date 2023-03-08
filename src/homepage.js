import React, { useState } from "react";
import Navbar from "./nav";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "rc-slider/assets/index.css";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Khairy gives Anwar’s unity government a B- rating', link: 'https://focusmalaysia.my/khairy-gives-anwars-unity-government-a-b-rating/?utm_source=Newswav&utm_medium=Website', author: 'Jason Yeo', id: 1 },
        { title: 'I am safe todayZahid on unconfirmed viral RoS letter', link: 'https://newswav.com/article/i-m-safe-today-zahid-on-unconfirmed-viral-ros-letter-A2303_UN05HU', author: 'Yoshi', id: 2 },
        { title: 'Biden Speech Impediment - Apex World News', link: 'https://newswav.com/video/biden-speech-impediment-apex-world-news-V2303_iNGx81', author: 'Mario', id: 3 },
        { title: 'GLOBALink | Experts accuse U.S. of splitting world apart', link: 'https://newswav.com/video/globalink-experts-accuse-u-s-of-splitting-world-apart-V2303_RovJAE', author: 'Ankara', id: 4 },
        { title: 'Ford partners with Chinese EV tech company', link: 'https://newswav.com/video/ford-partners-with-chinese-ev-tech-company-V2303_V2d9N4', author: 'Luigi', id: 5 }
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
  
    return (
        <div className="home">
            <Navbar />
            <br/>
            <br/>
            <Slider {...settings}>
                {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.id }. { blog.title }</h2>
                    <h2>Written by { blog.author }</h2>
                    <a href = { blog.link }>Link to the source</a>
                </div>
                ))}
            </Slider>
        </div>
    );
}
   
export default Home;