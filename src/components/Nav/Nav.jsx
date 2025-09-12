import React from 'react'
import logo1 from '../../assets/Vector.png'
import logo2 from '../../assets/Group.png'
import option from '../../assets/option.png'
import classes from './Nav.module.css'

export default function Nav() {
    return (
        <div className={classes.nav}>
            <div className={classes.logo}>
                <img src={logo1} alt="logo1" />
                <img src={logo2} alt="logo2" />
            </div>
            <div className={classes.option}>
                <img src={option} alt="" />
            </div>
        </div>
    )
}
