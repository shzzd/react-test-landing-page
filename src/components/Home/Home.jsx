import React from 'react'
import classes from './Home.module.css'
import img1 from '../../assets/ayo-ogunseinde-UqT55tGBqzI-unsplash.png'
import img2 from '../../assets/ahmed-carter-tiWcNvpQF4E-unsplash.png'
import img3 from '../../assets/molly-mears-4_90zmmdo_4-unsplash.png'
import img4 from '../../assets/kelly-sikkema-sX_OIy4_HF8-unsplash.png'

export default function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.leftSection}>
                <h1>Welcome to VCAD</h1>
                <p>
                    Our team at Victoria College of Arts and Design is passionate about creating innovative projects and
                    generating new ideas. We work with a variety of experts and esteemed companies using a collaborative
                    approach. Located in London's Design District, we have valuable connections within our industry.
                    Search our latest courses.
                </p>
                <button>Apply Now</button>
            </div>
            <div className={classes.rightSection}>
                <div className={classes.img1}>
                    <img src={img1} alt="img1" />
                    <div className={classes.box1}>Fashion</div>
                    <div className={classes.box2}>Media</div>
                    <div className={classes.box3}>Graphic Design</div>
                </div>
                <div className={classes.img2}>
                    <img src={img2} alt="img2" />
                    <div className={classes.box4}>Photography</div>
                    <div className={classes.box5}>Business</div>
                </div>
                <div className={classes.img3}>
                    <img src={img3} alt="img3" />
                    <div className={classes.box6}>Management</div>
                </div>
                <div className={classes.img4}>
                    <img src={img4} alt="img4" />
                    <div className={classes.box7}>Marketing</div>
                </div>
            </div>
        </div>
    )
}
