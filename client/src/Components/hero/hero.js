import React from 'react'
import classes from '../hero/hro.css'

const Hero =() =>{
    return(
        <section id="home" className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <h2 className={classes.tittle}>Do you crave delicious food</h2>
                    <p className={classes.firstmsg}>But going out to take<span>food costs time....</span></p>
                    <p className={classes.secondmsg}>Why not order<span>pizza</span>or something <br/><span>delicious</span>from our restaurant</p>
                    <p className={classes.desc}>Our restaurant always puts the client above.
                    They are our single most important thing for our business.</p>
                    <div className={classes.right}>
                        <img src={manEating} alt="" className={classes.manEatingImg}></img>
                    </div>
                </div>
            </div>
        </section> 
    )
}
export default Hero