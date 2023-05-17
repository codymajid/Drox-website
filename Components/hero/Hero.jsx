import React from 'react'
import styles from './hero.module.scss';
import leftHeroImg from '../../images/left-hero.png'
import heroMainImg from '../../images/hero-main.png'
import rightImage from '../../images/right-hero.png'
import Image from 'next/image';


const Hero = () => {
    return (
        <>
            <div className={styles.hero} id='home'>
                <div className={styles.wrapper}>
                    <div className={styles.shadowTopLeft}></div>
                    <div className={styles.shadowRightLeft}></div>
                    <div className={styles.top}>
                        <h1> At Centricord We Make
                            <span>Your Ideas Work.</span>
                        </h1>
                        <div className={styles.heroPara}>
                            <span> Centicord is a central hub for those who have an idea in their mind,and require </span>
                            <span> digital solutions to get them and going. We proivde a solid foundation </span>
                        </div>
                        <button className={styles.heroQuote}> Get a Quote </button>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.wrapperImages}>
                            <div className={styles.leftImg}>
                                <Image src={leftHeroImg} alt="image" />
                            </div>
                            <div className={styles.mainImg}>
                                <Image src={heroMainImg} alt="image" />
                            </div>
                            <div className={styles.rightImg}>
                                <Image src={rightImage} alt="image" />
                            </div>
                        </div>
                        <div className={styles.wrapperBottom}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;