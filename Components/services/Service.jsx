import React from 'react'
import styles from './service.module.scss';
import { PanoramaFishEye } from '@mui/icons-material';
import { Type1, Type2, Type3, Type4, Type1Title, Type2Title, Type3Title, Type4Title, Type1Para, Type2Para, Type3Para, Type4Para, style1, style2 } from '../../services'
import ServiceComp from '../servicesComponent/ServiceComp'
import Image1 from '../../images/image1.png'
import Image2 from '../../images/image2.png'
import Image3 from '../../images/image3.png'
import Image4 from '../../images/image4.png'

const Service = () => {
    return (
        <div className={styles.service}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <span> Our Services</span>
                    <h3>  What Service We Offer</h3>
                    <p> Let’s talk about our services which can add value to your company and your ideas </p>
                </div>
                <div className={styles.bottom}>
                <ServiceComp data = {Type1} title = {Type1Title} text = {Type1Para} image = {Image1} /> 
                <ServiceComp data = {Type2} title = {Type2Title} text = {Type2Para} image = {Image2} /> 
                <ServiceComp data = {Type3} title = {Type3Title} text = {Type3Para} image = {Image3} /> 
                <ServiceComp data = {Type4} title = {Type4Title} text = {Type4Para} image = {Image4} /> 
                </div>
            </div>
        </div>
    )
}

export default Service;
