import React from 'react'
import styles from './hero.module.scss';
import Image from 'next/image';
import LeftImage from '../../images/left-hero.png'
import MainImage from '../../images/hero-main.png'
import RightImage from '../../images/right-hero.png'
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
        <div className={styles.hero} id='hero'>
            <div className={styles.leftHeroShadow}></div>
            <div className={styles.rightHeroShadow}></div>
            <div className={styles.top}>
                <motion.div 
                initial={{y: -50, scale : 2, opacity : 0.8}}
                animate={{y: 0, scale : 1, opacity : 0.8, textAlign:"center"}}
                transition={{duration : 2, delay : 0.5}}
                className={styles.head}>
                    <h1> At Centricord We Make  </h1>
                    <h1> Your Ideas Work. </h1>
                </motion.div>
                <motion.div 
                initial = {{visibility : "hidden", opacity : 0}}
                animate = {{visibility : "visible", opacity : 1}}
                transition={{ delay : 2, duration : 1}}
                className={styles.paragraphHero}>
                    <span> Centicord is a central hub for those who have an idea in their mind,and require   </span>
                    <span>digital solutions to get them and going. We proivde a solid foundation </span>
                </motion.div>
                <button> Get a Quote</button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.wrapperImages}>
                    <Image src={LeftImage} alt='Image' className={styles.leftImage} />
                    <Image src={MainImage} alt='Image' className={styles.mainImage} />
                    <Image src={RightImage} alt='Image' className={styles.rightImage} />
                </div>
            </div>
            <div className={styles.bottomWrapper}></div>
        </div>
        </>
    )
}

export default Hero;