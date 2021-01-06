import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = ({ modalWillClose }) => {
  function scrollTop() {
    scroll.scrollToTop();
    modalWillClose();
  }
  return (
    <div onClick={scrollTop}>
      <button className="scrollup" href="#home">
        <FaAngleDoubleUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
