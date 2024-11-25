import React from 'react';
import styles from "./styles.module.scss";
import Aboutreport from "../../../../assets/AboutReport.svg";
import Image from 'next/image';
const About = () => {
  return (
    <div className={styles.About}>
      <Image src={Aboutreport} width={1120} height={1484} alt="none" className={styles.AboutImg}/>
    </div>
  )
}

export default About