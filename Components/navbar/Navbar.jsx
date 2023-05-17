import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss';
import { Add, InsertComment, WindowOutlined } from '@mui/icons-material';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {
                setIsScrolled(false)
            })
        }
    }, [])


    const getPath = (id) => {
        let element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                {
                    !isScrolled
                    &&
                    (
                        <>
                            <div className={styles.shadowLeftTop}></div>
                            <div className={styles.shadowRightTop}></div>
                        </>
                    )
                }
                <div className={styles.left}>
                    <span> <InsertComment className={styles.leftLogo} /> </span>
                    <span> DROX LABS. </span>
                </div>
                <div className={styles.middle}>
                    <span className={styles.active} onClick={() => { getPath("home") }}> Home </span>
                    <span onClick={() => { getPath("about") }}> About Us </span>
                </div>
                <div className={styles.right}>
                    <button> Contact Us </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;