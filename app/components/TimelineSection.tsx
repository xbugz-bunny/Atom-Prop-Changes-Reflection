"use client";

import React from "react";

const steps = [
    { top: "364px" },
    { top: "535px" },
    { top: "701px" },  
    { top: "880px" },
    { top: "1040px" }
];

// Asset Paths
const assets = {
    iconTop: "/images/timeline/anima/icon-top.png",
    card1: "/images/timeline/anima/card-1.svg",
    card2: "/images/timeline/anima/card-2.png",
    card3: "/images/timeline/anima/card-3.png",
    card4: "/images/timeline/anima/card-4.png",
    card5: "/images/timeline/anima/card-5.png",
    lineVertical: "/images/timeline/anima/line-vertical.svg",
    lineHorizontal: "/images/timeline/anima/line-horizontal.svg",
    step1Icon: "/images/timeline/anima/step-1-icon.png",
    step2Icon: "/images/timeline/anima/step-2-icon.png",
    step3Icon: "/images/timeline/anima/step-3-icon.png",
    step4Icon: "/images/timeline/anima/step-4-icon.png",
    step5Icon: "/images/timeline/anima/step-5-icon.png",
    centerEllipse: "/images/timeline/anima/center-ellipse.png",
};

export default function TimelineSection() {
    return (
        <section className="bg-white overflow-hidden w-full pt-24 md:pt-32 md:pb-40">
            <style jsx>{`
                @import url("https://fonts.googleapis.com/css?family=Sora:400|Space+Grotesk:700");
                
                @keyframes fade-in {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px) translateX(-50%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) translateX(-50%);
                    }
                }
                
                @keyframes fade-in-simple {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .timeline-container {
                    position: relative;
                    width: 100%;
                    max-width: 1240px;
                    margin: 0 auto;
                    min-height: 1169px;
                    padding: 40px 20px;
                    font-family: 'Sora', sans-serif;
                }

                .timeline-title {
                    position: absolute;
                    top: 42px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    max-width: 1015px;
                    padding: 0 16px;
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 54px;
                    text-align: center;
                    color: #000000;
                    animation: fade-in 1s 0ms ease forwards;
                    opacity: 0;
                }

                .timeline-description {
                    position: absolute;
                    top: 160px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    max-width: 1147px;
                    padding: 0 16px;
                    font-family: 'Sora', sans-serif;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 32.4px;
                    text-align: center;
                    color: rgba(24, 35, 40, 0.8);
                    text-transform: capitalize;
                    animation: fade-in 1s 200ms ease forwards;
                    opacity: 0;
                }

                .icon-top {
                    position: absolute;
                    top: 0;
                    left: 628px;
                    width: 39px;
                    height: 33px;
                    animation: fade-in-simple 1s 100ms ease forwards;
                    opacity: 0;
                }

                .gradient-left {
                    position: absolute;
                    width: 251px;
                    height: 241px;
                    border-radius: 125.62px / 120.54px;
                    filter: blur(90px);
                    background: conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.9) 0%, rgba(141, 0, 251, 0.9) 21%, rgba(144, 175, 255, 0.9) 33%, rgba(151, 51, 252, 0.9) 45%, rgba(130, 91, 255, 0.9) 55%, rgba(111, 229, 187, 0.9) 66%, rgba(157, 237, 255, 0.9) 72%, rgba(11, 7, 27, 0.9) 100%);
                }

                .gradient-right {
                    position: absolute;
                    top: calc(50% - 162px);
                    left: calc(50% + 111px);
                    width: 251px;
                    height: 241px;
                    border-radius: 125.62px / 120.54px;
                    filter: blur(90px);
                    background: conic-gradient(from 180deg at 50% 50%, rgba(11, 7, 27, 0.9) 0%, rgba(141, 0, 251, 0.9) 21%, rgba(144, 175, 255, 0.9) 33%, rgba(151, 51, 252, 0.9) 45%, rgba(130, 91, 255, 0.9) 55%, rgba(111, 229, 187, 0.9) 66%, rgba(157, 237, 255, 0.9) 72%, rgba(11, 7, 27, 0.9) 100%);
                }

                 .content-image {
                    position: absolute;
                    width: 621px;
                    height: 404px;
                    animation: fade-in-simple 1s ease forwards;
                    opacity: 0;
                }

                .timeline-line {
                    position: absolute;
                    top: 313px;
                    left: 637px;
                    width: 3px;
                    height: 832px;
                    animation: fade-in-simple 1s 300ms ease forwards;
                    opacity: 0;
                }

                .timeline-line-horizontal {
                    position: absolute;
                    width: 135px;
                    height: 3px;
                    animation: fade-in-simple 1s ease forwards;
                    opacity: 0;
                }

                .timeline-step {
                    position: absolute;
                    width: 52px;
                    height: 50px;
                    left: 611px;
                    animation: fade-in-simple 1s ease forwards;
                    opacity: 0;
                }
                
                .timeline-step-bg {
                    position: absolute;
                    top: 364px;
                    left: 611px;
                    width: 52px;
                    height: 50px;
                    background-color: #922a8e;
                    border-radius: 25.99px / 24.94px;
                    animation: fade-in-simple 1s 600ms ease forwards;
                    opacity: 0;
                }

                .timeline-step-icon-1 {
                    position: absolute;
                    top: 377px;
                    left: 623px;
                    width: 28px;
                    height: 24px;
                    animation: fade-in-simple 1s 650ms ease forwards;
                    opacity: 0;
                }

                .center-ellipse {
                  position: absolute;
                  top: calc(50% - 3px);
                  left: calc(50% - 69px);
                  width: 611px;
                  height: 601px;
                  animation: fade-in-simple 1s 700ms ease forwards;
                  opacity: 0;
                }

                @media (max-width: 768px) {
                    .timeline-container {
                        min-height: auto;
                        padding-bottom: 100px;
                        overflow-x: hidden;
                    }
                    /* Mobile adaptions would be needed here, but keeping faithful to requested code for large layout primarily */
                    .timeline-title {
                        position: relative;
                        top: auto;
                        left: auto;
                        transform: none;
                        margin-bottom: 2rem;
                        font-size: 24px;
                        line-height: 36px;
                    }
                    .timeline-description {
                        position: relative;
                        top: auto;
                        left: auto;
                        transform: none;
                        font-size: 14px;
                        line-height: 24px;
                        margin-bottom: 3rem;
                    }
                    /* Hide absolute elements on mobile if they break layout, or add scroll. 
                       For now, assuming desktop-first request. */
                }
            `}</style>
            
            <div className="timeline-container">
                <h2 className="timeline-title">
                    Powered by tokenization. Designed for transparency. <br />
                    Built for investors.
                </h2>

                <p className="timeline-description">
                    We carefully select and verify property projects, divide them into construction-based development rounds, and convert them into digital tokens recorded securely on the blockchain. Each round reflects real on-ground progress, ensuring investor protection and developer accountability.
                </p>

                <img className="icon-top" alt="Group" src={assets.iconTop} />

                <div className="gradient-left" style={{ top: 'calc(50% - 333px)', left: 'calc(50% - 622px)' }}></div>
                <div className="gradient-left" style={{ top: 'calc(50% + 5px)', left: 'calc(50% - 622px)' }}></div>
                <div className="gradient-left" style={{ top: 'calc(50% + 343px)', left: 'calc(50% - 622px)' }}></div>

                {/* Left Content Images */}
                <img className="content-image" alt="New position" src={assets.card1} style={{ top: 'calc(50% - 271px)', left: 'calc(50% - 611px)', animationDelay: '400ms' }} />
                <img className="content-image" alt="New position" src={assets.card2} style={{ top: 'calc(50% + 23px)', left: 'calc(50% - 611px)', animationDelay: '600ms' }} />
                <img className="content-image" alt="New position" src={assets.card3} style={{ top: 'calc(50% + 405px)', left: 'calc(50% - 611px)', animationDelay: '800ms' }} />

                {/* Vertical Line */}
                <img className="timeline-line" alt="Line" src={assets.lineVertical} />

                {/* Horizontal Lines */}
                <img className="timeline-line-horizontal" alt="Line" src={assets.lineHorizontal} style={{ top: '389px', left: '507px', animationDelay: '500ms' }} />
                <img className="timeline-line-horizontal" alt="Line" src={assets.lineHorizontal} style={{ top: '560px', left: '640px', animationDelay: '650ms' }} />
                <img className="timeline-line-horizontal" alt="Line" src={assets.lineHorizontal} style={{ top: '726px', left: '507px', animationDelay: '800ms' }} />
                <img className="timeline-line-horizontal" alt="Line" src={assets.lineHorizontal} style={{ top: '903px', left: '640px', animationDelay: '950ms' }} />
                <img className="timeline-line-horizontal" alt="Line" src={assets.lineHorizontal} style={{ top: '1065px', left: '507px', animationDelay: '1100ms' }} />

                {/* Step 1 BG & Icon */}
                <div className="timeline-step-bg"></div>
                <img className="timeline-step-icon-1" alt="Group" src={assets.step1Icon} />

                {/* Other Steps Icons */}
                <img className="timeline-step" alt="Group" src={assets.step2Icon} style={{ top: '535px', animationDelay: '750ms' }} />
                <img className="timeline-step" alt="Group" src={assets.step3Icon} style={{ top: '701px', animationDelay: '900ms' }} />
                <img className="timeline-step" alt="Group" src={assets.step4Icon} style={{ top: '880px', animationDelay: '1050ms' }} />
                <img className="timeline-step" alt="Group" src={assets.step5Icon} style={{ top: '1040px', animationDelay: '1200ms' }} />

                <div className="gradient-right"></div>

                <img className="center-ellipse" alt="Ellipse" src={assets.centerEllipse} />

                {/* Right Content Images */}
                <img className="content-image" alt="New position" src={assets.card4} style={{ top: 'calc(50% - 100px)', left: 'calc(50% + 122px)', animationDelay: '800ms' }} />
                <img className="content-image" alt="New position" src={assets.card5} style={{ top: 'calc(50% + 239px)', left: 'calc(50% + 122px)', animationDelay: '1000ms' }} />
            </div>
        </section>
    );
}