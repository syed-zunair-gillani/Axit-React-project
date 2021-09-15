import React from 'react';
import { NavLink } from 'react-router-dom'
import '../Components/SocialBar.css';
const SocialBar = () => {
    return (
        <>
            <div className="container flex justify-between socialbar-wrapper item-center">
                <div className="social-content">
                    <h5>Social Media</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore amet placeat harum iste molestiae voluptatibus soluta repellat quas.</p>
                </div>
                <div className="social-icon">
                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fas fa-rss"></i></a>
                </div>
            </div>
        </>
    )
}

export default SocialBar
