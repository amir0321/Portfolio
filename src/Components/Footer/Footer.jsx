import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubscribe = () => {
        if (email.trim() === "") {
            setError("Please enter your email.");
            setSubscribed(false);
        } else {
            setSubscribed(true);
            setError("");
            setTimeout(() => setSubscribed(false), 2000);
        }
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} className="Amir-logo" alt="" />
                    <p>I am a frontend developer from Sweden with 3 years of experience.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    {/* Meddelande ovanför knappen */}
                    {(subscribed || error) && (
                        <div style={{ marginBottom: "10px", textAlign: "center" }}>
                            {subscribed && (
                                <span style={{ color: "green" }}>Subscribe submit</span>
                            )}
                            {error && (
                                <span style={{ color: "red" }}>{error}</span>
                            )}
                        </div>
                    )}
                    <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
                </div>
            </div>
            <hr className="hr-class" />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ Amir Alseify. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;