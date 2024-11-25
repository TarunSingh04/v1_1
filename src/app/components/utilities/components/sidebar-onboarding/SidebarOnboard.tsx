import React from 'react'
import dashboard from "../../../assets/sidebanner.png";
import styles from "./styles.module.scss";
import Image from "next/image";

interface SidebarOnboard {
    description: string;
}

const SidebarOnboard: React.FC<SidebarOnboard> = ({ description }) => {
  return (
    <div className={styles.BackgroundImage}>
    <div>
      <h1 className={styles.companylogo}>Impakter <span>pro</span></h1>
      <h1 className={styles.companyInfo}>Welcome to IMPAKTER PRO!</h1>
      <p>{description}</p>
    </div>
    <Image
      src={dashboard}
      width={720}
      height={500}
      alt="none"
      className={styles.BoxLogo}
    />
  </div>
  )
}

export default SidebarOnboard