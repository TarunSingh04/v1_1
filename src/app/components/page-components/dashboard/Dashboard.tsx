"use client";
import React, { useState, ComponentType } from "react";
import styles from "./styles.module.scss";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import Sidebar from "./sidebar/Sidebar";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import chatbotBgm from "../assets/chatbotbgm.png";
import { usePathname, useRouter } from "next/navigation";
import logoutIcon from "../../assets/log-out.svg";
import notifyIcon from "../../assets/notifyIcon'.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { IoChatbubblesOutline } from "react-icons/io5";
import pageNotDisplayLogo from "../../assets/pageNotDisplayLogo.svg";

const withDashboardLayout = (WrappedComponent: any, route: string) => {
  const DashboardLayout: React.FC = () => {
    const navigate = useRouter();
    const pathname = usePathname();  
    const [NavItemsShow, setNavItemsShow] = useState<boolean>(false);
    const [chatbotShow, setChatbotShow] = useState<boolean>(false);
    const [searchHide, setsearchHide] = useState(true);

    const navigateTo = (pathname:any)=>{
      navigate.push(`/pages/${pathname}`);
    }
    return (
      <div className={styles.dashboardPageCont}>
            <div className={styles.pageNotDisplay}>
              <Image src={pageNotDisplayLogo} width={160} height={115} alt="none"/>
              <p className={styles.pageNotDisplaytitle}>Oops! Best Viewed on Desktop</p>
              <p className={styles.pageNotDisplaysubtitle}>For the Best Experience, Switch to Desktop!</p>
              <p className={styles.pageNotDisplaydesc}>You&apos;re on a mobile or tablet. For the full experience and all site features, please visit us on your desktop.</p>
            </div>
            <div className={styles.dashboardPage}>
                    {/* <div className={styles.chatBotDisplay}>
                      <Image src={chatbotBgm} width={1000} height={1000} alt="none" className={styles.chatBotImg}/>
                    </div> */}
                    <Sidebar defaultRoute={route}/>
                    <div className={styles.siderbarSpace}></div>
                    <div className={styles.Content}>
                      <div className={styles.navbar}>
                        <div className={styles.searchbar}>
                        <Image src={searchIcon} width={26} height={26} alt="none" className={styles.searchIcon}/>
                        <input type="text" placeholder="Search anything" />
                        </div>
                        <div className={styles.notifycont}>
                          <div className={styles.notify}><Image src={notifyIcon} width={16} height={16} alt="none" className={styles.notifyIcon}/><span>2</span></div>
                          <div className={styles.logout} onClick={()=>{navigateTo('login-user')}}><Image src={logoutIcon} width={16} height={16} alt="none" className={styles.logoutIcon}/><span>LOG OUT</span></div>
                        </div>
                      </div>
                      <WrappedComponent />
                    </div>
              </div>
      </div>
    );
  };

  return DashboardLayout;
};

export default withDashboardLayout;
