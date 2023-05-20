import React from 'react'
import { Check, PanoramaFishEye } from '@mui/icons-material';
import styles from './serviceComp.module.scss';
import Image from 'next/image';

const ServiceComp = ({ data, title, text, image, style }) => {

    return (
        <div className={styles.serviceComp}>
            <div className={styles.left}>
                <div className={styles.steps}>
                    <span> <PanoramaFishEye className={styles.circle}/> </span>
                    <div className={styles.rulerHolder}>
                        <div className={`${styles.rulerLine} vr`}></div>
                    </div>
                </div>
                <div className={styles.info}>
                    <h4> {title} </h4>
                    <p> {text} </p>
                    <ul>
                        {
                            data.map((item) => (
                                <>
                                <li> <Check style={{color : "#375BDC", fontSize : "20px", marginRight : "3px"}} /> <span> {item} </span> </li>
                                </>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.right}>
                r
            </div>
        </div>
    )
}

export default ServiceComp;