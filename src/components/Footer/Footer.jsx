import React from 'react'
import logo1 from '../../assets/Vector.png'
import logo2 from '../../assets/Group.png'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <img src={logo1} alt="logo1" />
                    <img src={logo2} alt="logo2" />
                </div>
                <p>© 2025 Victoria College of Arts and Design, All rights reserved.</p>
            </div>
            <div className={classes.right}>
                <p>Policis</p>
                <p>Contact us</p>
                <p>Meet the Team</p>
                <p>Facebook</p>
            </div>
        </div>
    )
}
