import React from 'react';
import './Home.css';
import SocialBar from '../Components/SocialBar';
const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="container flex justify-between hero-wrapper item-center">
                    <div className="content-wrapper">
                        <h2>AX<span>IT</span></h2>
                        <h6>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h6>
                        <hr className="hr-line" />
                        <p> Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanmet, consectetur adipiscing elit. Aenean Lorem ipsum dolor sit amet, consectetur</p>
                        <button>
                            Download
                        </button>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-inner">
                            <div className="top">
                                <h6>Try Your <span>FREE</span> Trial Today</h6>
                            </div>
                            <div className="middle">
                                <input type="text"  placeholder="Enter Your Name"/>
                                <input type="email" placeholder="Entar Your Email*"/>
                                <input type="password" placeholder="Enter Your password"/>
                            </div>
                            <div className="buttom">
                                <h6>Get Started</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SocialBar />
        </>
    )
}

export default Home
