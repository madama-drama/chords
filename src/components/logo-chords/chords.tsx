import React from "react";
import cx from 'classnames'

import Style from './chords.module.css'

export const Chords =()=>{
 return(
    <div className={Style.chords}>
        <p className={cx(Style.logo, Style.cho)}>cho</p>
        <p className={cx(Style.logo, Style.rds)}>rds.</p>
    </div>
 )
}