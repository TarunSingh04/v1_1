import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Overview from './overview/Overview';
import Customize from './customize/Customize';
import scorearrow from "../../assets/ScoreArrow.svg";
import Image from 'next/image';
import sectionHeaderIcon from "../../assets/sectionNameIcon.svg";
import verifiedLogo from "../../assets/Verified.svg";
import pendingLogo from "../../assets/Pending.svg";
import Myreports from './my-reports/Myreports';
import reportPdfDisplayStore from "../../store/reportPdfDisplayStore";
import About from './view-report/about-company/About';
import Achievements from './view-report/achievements/Achievements';
import Action from './view-report/action-plan/Action';
import Inprogress from './view-report/in-progress/Inprogress';
import Measurement from './view-report/measurement/Measurement';
import defaultCompanyImg from "../../assets/companydefaultImg.svg";
import locationImg from "../../assets/locationImg.svg";
import linkTab from "../../assets/linksbtn.svg";

const Reports = () => {
  const [companyName, setcompanyName] = useState("Apple");
  const [companyLocation, setcompanyLocation] = useState("Germany");
  const [overallScore, setoverallScore] = useState(75);
  const [scorenavigateNumber, setscorenavigateNumber] = useState(1);
  const [scorenavigateNumber2, setscorenavigateNumber2] = useState(1);
  const reportPdfDisplayName = reportPdfDisplayStore((state) => state.reportPdfDisplayName);
  const setReportPdfDisplayName = reportPdfDisplayStore((state) => state.setreportPdfDisplayName);

  const getbackgroundColor = (rating:any)=>{
    if(rating>80){
      return "#E7FFFC";
    }
    else if(rating>70){
      return "rgb(166 196 150 / 20%)";
    }
    else if(rating>50){
      return "rgb(241 208 44 / 13%)";
    } 
    else if(rating>30){
      return "rgb(241 142 44 / 11%)";
    } 
    else{
      return "rgb(242 85 85 / 9%)";
    }
    }
    const getText = (rating:any)=>{
      if(rating>80){
        return "A";
      }
      else if(rating>70){
        return "B";
      }
      else if(rating>50){
        return "C";
      } 
      else if(rating>30){
        return "D";
      } 
      else{
        return "F";
      }
      }
    const getColor = (rating:any)=>{
      if(rating==="A"){
        return "#6F8C60";
      }
      else if(rating==="B"){
        return "#A6C496";
      }
      else if(rating==="C"){
        return "#F1D02C";
      } 
      else if(rating==="D"){
        return "#F18E2C";
      } 
      else{
        return "#F25555";
      }
      }

  const scoreContentChange = (scoreNum:any) => {
    setscorenavigateNumber(scoreNum);
  };

  const scoreContentChange2 = (scoreNum:any) => {
    setscorenavigateNumber2(scoreNum);
  };

  return (
    <div className={styles.scorecard}>
      <div className={styles.sectionHeader}>
        <Image src={sectionHeaderIcon} width={18} height={18} alt='none' />
        <p>
          <span>/</span>ESG Progress Report 
          {reportPdfDisplayName.length !== 0 && (
            <>
              <span> /</span>
              {reportPdfDisplayName}
            </>
          )}
        </p>
      </div>

      {
       reportPdfDisplayName.length !== 0 && (
       <>
        <div className={styles.mytasksubHeader2}>
        <div className={styles.headerbox1}>
          <Image
            src={defaultCompanyImg}
            width={80}
            height={80}
            alt='none'
            style={{marginRight:"15px"}}
          />
          <div>
          <p className={styles.companyName}>Apple Inc.</p>
          <p className={styles.companydesc}><Image src={locationImg} width={15} height={18} alt='none' className={styles.LocationIcon}/> California, USA <span>Companywebsite.com <Image src={linkTab} width={14} height={14} alt='none' className={styles.linkIcon}/></span></p>
          <p className={styles.companydesc2}>Employees : <span>22,000</span> Applies to : <span>Multi-product</span> Sector : <span>Technology</span></p>
          </div>
        </div>

        <div className={styles.headerbox2}>
      <div className={styles.scordisplaycont}>
        <div className={styles.scoreoverall}>
          Overall Score
        </div>
        <div className={styles.scoreoverall}>
          <Image src={scorearrow} alt="none" width={18} height={18} className={styles.arrowIcon}/>
          <p><span>{overallScore}</span>/100</p>
        </div>
      </div>
         <div className={styles.scoreData} style={{color:getColor(getText(overallScore)),background:getbackgroundColor(overallScore)}}>
          {getText(overallScore)}
          </div>
      </div>
      </div>


        <div className={styles.scorecardBody}>
        <div className={styles.scorecardsubcontbar2}>
          <p
            onClick={() => {
              scoreContentChange2(1);
            }}
            className={
              scorenavigateNumber2 === 1
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            ABOUT COMPANY
          </p>
          <p
            onClick={() => {
              scoreContentChange2(2);
            }}
            className={
              scorenavigateNumber2 === 2
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            MEASUREMENT
          </p>
          <p
            onClick={() => {
              scoreContentChange2(3);
            }}
            className={
              scorenavigateNumber2 === 3
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            ACHIEVEMENTS
          </p>
          <p
            onClick={() => {
              scoreContentChange2(4);
            }}
            className={
              scorenavigateNumber2 === 4
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            ACTION PLAN
          </p>
          <p
            onClick={() => {
              scoreContentChange2(5);
            }}
            className={
              scorenavigateNumber2 === 5
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            IN PROGRESS
          </p>
        </div>
      </div>

      <div className={styles.scoreBodyContent}>
        {scorenavigateNumber2 === 1 && <About />}
        {scorenavigateNumber2 === 2 && <Measurement />}
        {scorenavigateNumber2 === 3 && <Achievements />}
        {scorenavigateNumber2 === 4 && <Action />}
        {scorenavigateNumber2 === 5 && <Inprogress />}
      </div>
       </>
       )        
      }

      {
        reportPdfDisplayName.length === 0 && (
          <>
          <div className={styles.mytasksubHeader}>
        <div className={styles.headerbox1}>
          <h2>ESG Progress Report</h2>
          <p>Your Roadmap to Sustainability</p>
        </div>

        <div className={styles.headerbox2}>
          <Image
            src={overallScore > 74 ? verifiedLogo : pendingLogo}
            width={120}
            height={120}
            alt='none'
          />
        </div>
      </div>

      <div className={styles.scorecardBody}>
        <div className={styles.scorecardsubcontbar}>
          <p
            onClick={() => {
              scoreContentChange(1);
            }}
            className={
              scorenavigateNumber === 1
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            Overview
          </p>
          <p
            onClick={() => {
              scoreContentChange(2);
            }}
            className={
              scorenavigateNumber === 2
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            Customize
          </p>
          <p
            onClick={() => {
              scoreContentChange(3);
            }}
            className={
              scorenavigateNumber === 3
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            My Reports
          </p>
        </div>
      </div>

      <div className={styles.scoreBodyContent}>
        {scorenavigateNumber === 1 && <Overview />}
        {scorenavigateNumber === 2 && <Customize />}
        {scorenavigateNumber === 3 && <Myreports />}
      </div>
          </>
        )
      }


    </div>
  );
};

export default Reports;
