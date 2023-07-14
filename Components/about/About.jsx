import React from 'react'
import styles from './about.module.scss';
import Republic from '../../images/republic.png';
import SS from '../../images/ss.png';
import Turtle from '../../images/turtle.png';
import Budweiser from '../../images/Budweiser.png';
import Image from 'next/image';
import { motion } from 'framer-motion';


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
                    <motion.div 
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    whileInView={{ opacity: 1, scale : 1.2}}
                    transition={{delay : 1, duration : 2}}
                    className={styles.bottomTopWrapper}>
                        <h6> About Us</h6>
                        <h1> Who We Are</h1>
                        <p className={styles.para}>Centricord is a group of highly talented individuals in the field of technology who came together with the dream of building a great technology entity which would impact lives of millions positively. We design & develop applications that are innovative on the tech-front.</p>
                    </motion.div>
                    <p className={styles.line}></p>
                    <div className={styles.ratings}>
                        <motion.div 
                        drag='x'
                        dragConstraints={{ left: 0, right: 30, }}
                        dragMomentum={false}
                        dragTransition={{ bounceStiffness: 20, bounceDamping : 10}}
                        className={styles.ratingsItem}>
                            <span className={styles.headItem}>200+</span>
                            <span className={styles.bodyItem}>Successfull Projects</span>
                        </motion.div>
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