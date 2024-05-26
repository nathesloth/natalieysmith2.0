import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Project.scss";

const Project = () => {
  //   useEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const pageContainer = document.querySelector(".container");

  //     /* SMOOTH SCROLL */
  //     const scroller = new LocomotiveScroll({
  //       el: pageContainer,
  //       smooth: true,
  //     });

  //     scroller.on("scroll", ScrollTrigger.update);

  //     ScrollTrigger.scrollerProxy(pageContainer, {
  //       scrollTop(value) {
  //         return arguments.length
  //           ? scroller.scrollTo(value, 0, 0)
  //           : scroller.scroll.instance.scroll.y;
  //       },
  //       getBoundingClientRect() {
  //         return {
  //           left: 0,
  //           top: 0,
  //           width: window.innerWidth,
  //           height: window.innerHeight,
  //         };
  //       },
  //       pinType: pageContainer.style.transform ? "transform" : "fixed",
  //     });

  //     ////////////////////////////////////
  //     ////////////////////////////////////
  //     window.addEventListener("load", function () {
  //       let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  //       let pinWrap = document.querySelector(".pin-wrap");
  //       let pinWrapWidth = pinWrap.offsetWidth;
  //       let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  //       // Pinning and horizontal scrolling

  //       gsap.to(".pin-wrap", {
  //         scrollTrigger: {
  //           scroller: pageContainer, //locomotive-scroll
  //           scrub: true,
  //           trigger: "#sectionPin",
  //           pin: true,
  //           // anticipatePin: 1,
  //           start: "top top",
  //           end: pinWrapWidth,
  //         },
  //         x: -horizontalScrollLength,
  //         ease: "none",
  //       });

  //       ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  //       ScrollTrigger.refresh();
  //     });
  //   });

  return (
    <div className="project section">
      <p>Testing 123</p>

      {/* <section id="sectionPin">
        <div class="pin-wrap">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <img
            src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900"
            alt=""
          />
        </div>
      </section> */}
    </div>
  );
};

export default Project;
