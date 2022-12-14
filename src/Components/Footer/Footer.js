import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <small>Emergency Dental Care</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Personal Diseases</small>
                        <br />
                        <small>Tooth Extraction</small>
                        <br />
                        <small>Check Up</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Oral Health</p>
                    </div>
                    <div>
                        <small>Emergency Dental Care</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Personal Diseases</small>
                        <br />
                        <small>Tooth Extraction</small>
                        <br />
                        <small>Check Up</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Our Address</p>
                    </div>
                    <div>
                        <small>Kathmandu, Nepal</small>
                        <div className="brandIcon">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faGooglePlusG} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <small>Call Now</small>
                        <p className="callNow">9848123456</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
                <small>Copyright 2022 All Right Reserved By Isha Pokharel</small>
            </div>
        </div>
    );
};

export default Footer;