import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss';
import { Add, InsertComment, WindowOutlined } from '@mui/icons-material';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';

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

    return (
        <div className={styles.navbar} >
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
                <Link to='hero' spy={true} duration={2.8} smooth={true} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }} offset={-60}>
                    <span> <InsertComment className={styles.leftLogo} /> </span>
                    <span> DROX LABS. </span>
                    </Link>
                </div>
                <div className={styles.middle}>
                    {/* <span className={styles.active}> Home </span> */}
                    <Link to='hero' spy={true} duration={2.8} smooth={true} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }} offset={-60}> Home </Link>
                    <Link to='about' spy={true} duration={2.8} smooth={true} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }} offset={-50}> About Us </Link>
                </div>
                <div className={styles.right}>
                    <div className={styles.btnWrapper}>
                        <Link to='contact' spy={true} smooth={true} duration={200} style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }} offset={-30} className={styles.contactBtn} >
                            <button> Contact Us </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;