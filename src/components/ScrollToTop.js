import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="upButton">
                    <span className="up">UP</span>
                </div>
            )}
        </div>
    )
}

export default ScrollToTop;