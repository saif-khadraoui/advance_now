import React, { useState } from 'react'
import styles from "./landing.module.css"
import svg from "../../assets/undraw_online-test_20lm.svg"
import { SiKnowledgebase } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RxAvatar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import Footer from '../../components/footer/Footer';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { MdTimerOff } from "react-icons/md";

function Landing() {

    const navigate = useNavigate()
    const [menu, setMenu] = useState(false);

    const routeSignUp = () => {
        setMenu(false)
        navigate("/signUp")
    }


  return (
    <div className={styles.container}>
        {menu && (
            <div className={styles.mobileNav}>
                <div className={styles.mobileMenuItems}>
                    <div className={styles.closeMenu}>
                        <MdOutlineClose style={{ fontSize: "32px", cursor: "pointer" }} onClick={() => setMenu(false)}/>
                    </div>
                    <a href="#contact" onClick={() => setMenu(false)}>Contact us</a>
                    <button onClick={routeSignUp}>Sign up</button>
                </div>
            </div>
        )}
        <nav>
            <div className={styles.logo}>
                <h3>AdvanceNow</h3>
            </div>
            <div className={styles.menuItems}>
                <a href="#contact">Contact us</a>
                <button onClick={routeSignUp}>Sign up</button>
            </div>
            <GiHamburgerMenu className={styles.hamburger} onClick={() => setMenu(true)}/>
        </nav>
        <section className={styles.hero}>
            <div className={styles.heroInfo}>
                <h1>AdvanceNow</h1>
                <h4>Improve your employability skills at your own pace</h4>
            </div>
            <img src={svg}/>
        </section>

        <section className={styles.contact} id="contact">
            <h2>Contact us</h2>
            <div className={styles.contactForm}>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type='email' placeholder="Email"/>
                    <textarea placeholder="Message" rows={10}/>
                    <div className={styles.formButton}>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Landing