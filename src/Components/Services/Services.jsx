import React, { useState, useEffect } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
    const [showCount, setShowCount] = useState(3);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleToggleShow = () => setShowCount(showCount === 3 ? 6 : 3);

    const servicesToShow = isMobile ? Services_Data.slice(0, showCount) : Services_Data;

    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {servicesToShow.map((service, index) => (
                    <div key={index} className="services-format">
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                ))}
            </div>
            {isMobile && Services_Data.length > 3 && (
                <button
                    onClick={handleToggleShow}
                    className="mywork-showmore"
                    style={{ marginTop: "-40px" }}
                >
                    {showCount === 3 ? "Show More" : "Show Less"}
                    <img src={arrow_icon} alt="" />
                </button>
            )}
        </div>
    );
}

export default Services;