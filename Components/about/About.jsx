import React from 'react'
import styles from './about.module.scss';
import Republic from '../../images/republic.png';
import SS from '../../images/ss.png';
import Turtle from '../../images/turtle.png';
import Budweiser from '../../images/Budweiser.png';
import Image from 'next/image';

const About = () => {
    return (
        <div className={styles.about} id='about'> 
            <div className={styles.top}>
                <p>Supported and being worked with large companies</p>
                <div className={styles.socialPics}>
                    <span> <Image src={Republic} alt='image' /> </span>
                    <span> <Image src={SS} alt='image' /> </span>
                    <span> <Image src={Budweiser} alt='image' /> </span>
                    <span> <Image src={Turtle} alt='image' /> </span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.wrapper}>
                    <div className={styles.bottomTopWrapper}>
                        <h6> About Us</h6>
                        <h1> Who We Are</h1>
                        <p className={styles.para}>Centricord is a group of highly talented individuals in the field of technology who came together with the dream of building a great technology entity which would impact lives of millions positively. We design & develop applications that are innovative on the tech-front.</p>
                    </div>
                    <p className={styles.line}></p>
                    <div className={styles.ratings}>
                        <div className={styles.ratingsItem}>
                            <span className={styles.headItem}>200+</span>
                            <span className={styles.bodyItem}>Successfull Projects</span>
                        </div>
                        <div className={styles.ratingsItem}>
                            <span className={styles.headItem}>190+</span>
                            <span className={styles.bodyItem}>Satisfied Customer</span>
                        </div>
                        <div className={styles.ratingsItem}>
                            <span className={styles.headItem}>25</span>
                            <span className={styles.bodyItem}>Professional Experts</span>
                        </div>
                        <div className={styles.ratingsItem}>
                            <span className={styles.headItem}>5+</span>
                            <span className={styles.bodyItem}>Years of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;