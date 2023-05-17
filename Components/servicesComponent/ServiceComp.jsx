import React from 'react'
import { Check, PanoramaFishEye } from '@mui/icons-material';
import styles from './serviceComp.module.scss';
import Image from 'next/image';

const ServiceComp = ({data, title , text, image, style}) => {

    return (
        <div className={styles.wrapperSteps}>
            <div className={styles.left}>
                <div className={styles.one}>
                    <span> <PanoramaFishEye className={styles.logo} /> </span>
                    <div className={styles.lineWrapper}>
                        <p className={`${styles.line} vr`}> </p>
                    </div>
                </div>
                <div className={styles.two}>
                    <h3> {title}</h3>
                    <p className={styles.leftTwoPara}>{text}</p>
                    <div className={styles.webTypes}>
                        <ul>
                            {
                                data.map((types) => (
                                    <>
                                        <li> <Check className={styles.logoCheck}/> <span className={styles.listItemText}> {types} </span> </li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightImageWrapper}>
                    <Image src={image} alt='image' style={style} />
                </div>
            </div>
        </div>
    )
}

export default ServiceComp