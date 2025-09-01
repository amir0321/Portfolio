import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} className="profile-img" alt="" />
            <h1><span>I'm Amir Alseify</span>, frontend developer based in Sweden.</h1>
            <p>Hi, I'm Amir — a passionate Frontend Developer who loves creating modern, responsive, and user-friendly websites. I specialize in turning ideas into interactive digital experiences using the latest web technologies. I'm always excited to collaborate and bring value to projects through clean design and efficient code.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    );
}

export default Hero;