import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import './MainPage.css';
import image from '../../images/Mask Group 1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import dental from '../../images/001-dental.png';
import tooth1 from '../../images/tooth (1).png';
import tooth from '../../images/tooth.png';
import maskGroup3 from '../../images/Mask Group 3.png';
import { Button } from '@material-ui/core';
import bgRemoveDoctor from '../../images/5790-removebg.png';
import ellips1 from '../../images/Ellipse 1.png';
import drImage from '../../images/dr-image.png';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div className="doctorPortal">
            <div className="doctorHeading">
                <div className="doctorNav">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/dentalServices">Dental Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/reviews">Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/dashboard">Doctors Zone</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/contactUs">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className='row mainBody'>
                    <div className="col-md-5">
                        <div className="doctorText">
                            <h1>Your New Smile
                            <br />
                            Starts Here</h1>
                            <p>Oral hygiene is the practice of keeping one's mouth clean and free of disease and other problems (e.g. bad breath) by regular brushing of the teeth (dental hygiene) and cleaning between the teeth. It is important that oral hygiene be carried out on a regular basis to enable prevention of dental disease and bad breath. The most common types of dental disease are tooth decay (cavities, dental caries) and gum diseases</p>
                            <Link style={{ textDecoration: "none" }} to="/appointment">
                                <Button className="button">GET APPOINTMENT</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="doctorImg">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="publicServices">
                <div>
                    <FontAwesomeIcon className="icon" icon={faClock} />
                    <div>
                        <p>Opening Hours</p>
                        <small>
                            Every day at normal working hours
                            <br />
                            aute nisi.
                        </small>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                    <div>
                        <p>Visit our location</p>
                        <small>Kathmandu, Nepal</small>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                    <div>
                        <p>Contact us now</p>
                        <small>9848123456</small>
                    </div>
                </div>
            </div>
            <div className="ourServices">
                <div>
                    <p>OUR SERVICES</p>
                    <h2>Services We Provide</h2>
                    <div className="servicesDetails">
                        <div>
                            <img src={dental} alt="" />
                            <p>Fluoride Treatment</p>
                            <p>Fluoride therapy is the use of fluoride for medical purposes. Fluoride supplements are recommended to prevent tooth decay in children older than six months in areas where the drinking water is low in fluoride. It is typically used as a liquid, pill, or paste by mouth.</p>
                        </div>
                        <div>
                            <img src={tooth1} alt="" />
                            <p>Cavity Filling</p>
                            <p>Cavity filling is a method of reconstructing a tooth damaged by caries, to restore its normal function and shape. When performing a filling, the dentist first removes the affected dental tissue, cleans the area, then fills the cavity with protective material.</p>
                        </div>
                        <div>
                            <img src={tooth} alt="" />
                            <p>Teeth Whitening</p>
                            <p>Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dentalCare">
                <div>
                    <div>
                        <img src={maskGroup3} alt="" />
                    </div>
                    <div>
                        <div>
                            <h1>Exceptional Dental<br />Care, on Your Terms</h1>
                            <p>We are a full-service dental practice devoted to restoring and enhancing the long-term natural beauty of your smile using conservative, state-of-the-art procedures.There is nothing we want more than to see you gain confidence in your smile!</p>
                            <Button className="button">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="makeAppointment">
                <div>
                    <img src={bgRemoveDoctor} alt="" />
                </div>
                <div>
                    <h4>APPOINTMENT</h4>
                    <h1>Make an Appointment <br />Today</h1>
                    <p>Hello, here you can book an apooinment for the desired date in a very simple way</p>
                    <Button className="button">LEARN MORE</Button>
                </div>
            </div>
            <div className="testimonial">
                <div>
                    <h4>Testimonial</h4>
                    <h1>What's Our Patients <br />Says</h1>
                    <div className="testimonialDetails">
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                Dr Ishant was focused. He was thorough and did what needed the be done, even when he found the unexpected; he put in the extra effort. I feel I have lucked out by becoming one of his patients. Plus his staff is utterly welcoming. I felt among friends right away, cared in a genuine way. They know something about patient care!
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Shaurav Acharya</p>
                                    <p>Sinamangal</p>
                                </div>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                DR. Anish is an awesome doctor who cares about his patients. He’s very knowledgeable and understanding. He listens and takes his time to talk about the issues presented. I highly recommend him as a doctor
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Suresh Bhatta</p>
                                    <p>Chabahil</p>
                                </div>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                    I am very sastisfied with the services and features of this system.
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Rima Thakur</p>
                                    <p>Baneshwor</p>
                                </div>
                            </Card.Header>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="ourBlog">
                <div>
                    <h4>Our Blog</h4>
                    <h1>From Our Blog News</h1>
                    <div className="ourBlogDetails">
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "600", marginBottom: "-5px" }}>Isha Pokharel</p>
                                <p>21 August 2022</p>
                                <p style={{ fontSize: "20px", fontWeight: "700", marginTop: "30px" }}>Check at least a doctor in a <br />year for your teeth.</p>
                                <FontAwesomeIcon style={{ fontSize: "30px", marginTop: "50px" }} icon={faLongArrowAltRight} />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="doctorinfo">
                                    <p>Dr. Sita KC</p>
                                    <p>15 August 2022</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "700" }}>2 times of brush in a day can <br />keep you healthy</p>
                                <Card.Text>
                                Brushing twice a day can keep your teeth whiter,when you brush twice a day, you can help remove some of the pigments that have not been fully absorbed by your teeth!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="doctorinfo">
                                    <p>Dr. Shayam Rawal</p>
                                    <p>13 August 2022</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "700" }}>The tooth cancere is taking a <br />Challenge</p>
                                <Card.Text>
                                Restorative and preventive dental care is very important to avoid infection. To prevent infection and tooth decay, it is very important to see your dentist early in your treatment and to continue good mouth cleaning daily!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="ourDoctors">
                <div>
                    <h4>Our Doctors</h4>
                    <div className="ourDoctorsDetails">
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Anish Bhandari</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> 9878236741</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Bhimsen Thapa</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> 9867345673</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Ishant Pokharel</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> 9867465372</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="contactUs">
                <div>
                    <h4>Contact Us</h4>
                    <h1>Always contact with us</h1>
                    <div className="contactUsDetails">
                        <div>
                            <input placeholder="Email Address*" type="text" />
                            <br />
                            <input placeholder="Subject*" type="text" />
                            <br />
                            <input placeholder="Your Message*" type="text" />
                            <br />
                            <Button className="submitBtn">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default MainPage;