import React from 'react'
import styles from './footer.module.scss';
import { ArrowRight, Facebook, Instagram, KeyboardArrowRight, KeyboardArrowUp, LogoDev, Twitter } from '@mui/icons-material';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <h1> Let’s build the next big thing!  </h1>
                <p>We’d be delighted to make your project a success</p>
                <button> Enquire Now </button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.wrapper}>
                    <div className={styles.one}>
                        <span > <LogoDev className={styles.logo} /> </span>
                        <span className={styles.copyright}> Copyright © 2020. LogoIpsum. All rights reserved. </span>
                        <div className={styles.subcribe}>
                            <span>Subscribe to our <br /> newsletter </span>
                            <div className={styles.inputSubscribe}>
                                <input type="text" placeholder='Email Address' />
                                <span className={styles.rightLogo}>  <KeyboardArrowRight /> </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.two}>
                        <h2> Services</h2>
                        <span>Email Marketing</span>
                        <span>Campaigns</span>
                        <span>Branding</span>
                        <span>Offline</span>
                    </div>
                    <div className={styles.three}>
                        <h2> About </h2>
                        <span>Our Story</span>
                        <span>Benefits</span>
                        <span>Team</span>
                    </div>
                    <div className={styles.four}>
                        <span className={styles.arrowRightHolder}> <KeyboardArrowUp /></span>
                        <div className={styles.socialLinks}>
                            <span> <Facebook /> </span>
                            <span> <Twitter /> </span>
                            <span> <Instagram /> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer