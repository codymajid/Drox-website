import React, { useRef, useState } from 'react'
import styles from './contact.module.scss';
// import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Facebook, Instagram, LocationCity, Mail, PhoneRounded, Place, Twitter } from '@mui/icons-material';
import InputMask from 'react-input-mask';
import PhoneInput from "react-phone-input-2";


const Contact = () => {
    const [value, setValue] = useState()

    return (
        <div className={styles.contact} id='contact'>
            <div className={styles.top}>
                <h1> Get In Touch With Us</h1>
                <div className={styles.topPara}>
                    <span> We’re glad you stopped by and are here to help answer any questions you </span>
                    <span> may have! Feel free to send us an email, call us directly, or complete the </span>
                    <span> below information and we’ll be in touch with you </span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomShadow}></div>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <div>
                            <h2> Contact Information </h2>
                            <p className={styles.headerPara}>Fill up the form and our Team will get back to you within 24 hours.</p>
                        </div>
                        <div className={styles.contactWrapper}>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <span> <PhoneRounded style={{ fontSize: "20px" }} /> </span>
                                <p> +921 78267638 </p>
                            </div>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <span><Mail style={{ fontSize: "20px" }} /> </span>
                                <p> centricord@example.com </p>
                            </div>
                            <div style={{ display: "flex", gap: "12px" }}>
                                <span> <Place style={{ fontSize: "20px" }} /> </span>
                                <p style={{ width: "70%" }}> 102 street johr town main bullevoud, Karachi </p>
                            </div>
                        </div>
                        <div className={styles.socialLinks}>
                            <span> <Facebook /> </span>
                            <span> <Twitter /> </span>
                            <span> <Instagram /> </span>
                        </div>
                    </div>
                    <div className={styles.rightWrapper}>
                        <div className={styles.right}>
                            <form action="https://formspree.io/f/xyyaappk" method="POST">
                                <div className={styles.wraperFields}>
                                    <div className={styles.inputWrapper}>
                                        <label htmlFor="">First Name</label>
                                        <input className={styles.inputFields} type="text" name='firstName' required />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" className={styles.inputFields} name='lastName' required />
                                    </div>
                                </div>
                                <div className={styles.singleWrapper}>
                                    <label htmlFor="">Email</label>
                                    <input type="text" className={styles.singleInput} name='email' required />
                                </div>
                                <div className={styles.mobileNumber}>
                                    <label htmlFor="">Phone</label>
                                    <div className={styles.inputWrapper}>
                                        {/* <PhoneInput
                                            placeholder="Enter Phone Number"
                                            value={value}
                                            onChange={setValue}
                                            className={styles.singleInput}
                                            name='phone'
                                            required
                                        /> */}
                                        {/* <InputMask mask="99/999/9999999" className={styles.singleInput} placeholder='__/___/_______' /> */}
                                    </div>
                                </div>
                                <div className={styles.singleWrapper}>
                                    <label htmlFor=""> Message </label>
                                    <textarea id="" cols="30" rows="6" className={styles.textArea} placeholder='Type here...' name='message' required />
                                </div>
                                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "end", paddingTop: "22px" }}>
                                    <button type='submit' className={styles.msgBtn} > Send Message  </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact;