import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Navbar from "./nav";

const Home = () => {
    const [slider1Value, setSlider1Value] = useState(50);
    const [slider2Value, setSlider2Value] = useState(25);
    const [slider3Value, setSlider3Value] = useState(75);
    const [slider4Value, setSlider4Value] = useState(10);
    const [slider5Value, setSlider5Value] = useState(90);

    function handleSlider1Change(newValue) {
        setSlider1Value(newValue);
    }

    function handleSlider2Change(newValue) {
        setSlider2Value(newValue);
    }

    function handleSlider3Change(newValue) {
        setSlider3Value(newValue);
    }

    function handleSlider4Change(newValue) {
        setSlider4Value(newValue);
    }

    function handleSlider5Change(newValue) {
        setSlider5Value(newValue);
    }
    
    

    return (
        <div className="home">
            <Navbar />
            <br/>
            <br/>
            <br/>
            <Slider min={0} max={100} value={slider1Value} onChange={handleSlider1Change} />
            <p>Selected Value 1: {slider1Value}</p>
            <br/>
            <Slider min={0} max={100} value={slider2Value} onChange={handleSlider2Change} />
            <p>Selected Value 2: {slider2Value}</p>
            <br/>
            <Slider min={0} max={100} value={slider3Value} onChange={handleSlider3Change} />
            <p>Selected Value 3: {slider3Value}</p>
            <br/>
            <Slider min={0} max={100} value={slider4Value} onChange={handleSlider4Change} />
            <p>Selected Value 4: {slider4Value}</p>
            <br/>
            <Slider min={0} max={100} value={slider5Value} onChange={handleSlider5Change} />
            <p>Selected Value 5: {slider5Value}</p>
        </div>
    );
}
   
export default Home;