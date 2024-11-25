"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import googleLogo from "../../../assets/google.png";
import microsoftLogo from "../../../assets/microsoft.png";
import { useRouter } from "next/navigation";
import dashboard from "../../../assets/dashboard.png";
import SidebarOnboard from "@/app/components/utilities/components/sidebar-onboarding/SidebarOnboard";
import LanguageSelector from "@/app/components/utilities/components/language-selector/LanguageSelector";
import alertImg from "../../../assets/alert.svg";
import pageNotDisplayLogo from "../../../assets/pageNotDisplayLogo.svg";

const Signup = () => {
  const router = useRouter();
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState<any>("");
  const [password, setpassword] = useState<any>("");
  const [confirmpassword, setconfirmpassword] = useState<any>("");
  const [userType, setuserType] = useState<any>("");
  const [message, setmessage] = useState<any>("All fields are mandatory*");
  const [errorCheck, seterrorCheck] = useState(false);
  const [termsAccept, settermsAccept] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthColor, setPasswordStrengthColor] = useState("");
  const [passwordStrengthText, setPasswordStrengthText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loaderpopUp, setloaderpopUp] = useState(false);

  const navigateToLogin = () => {
    router.push("/pages/login-user");
  };

  const validatePassword = (password: any) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) || /[A-Z]/.test(password)) strength++;
    if (/[^a-zA-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    return strength;
  };

  const changeEmail = (e: any) => {
    setemail(e.target.value);
  };
  const changePassword = (e: any) => {
    const password = e.target.value;
    const strength = validatePassword(password);
    setPasswordStrength(strength);
    if (strength === 1) {
      setPasswordStrengthColor("red");
      setPasswordStrengthText("Low");
    } else if (strength === 2 || strength === 3) {
      setPasswordStrengthColor("#ffdd00");
      setPasswordStrengthText("Medium");
    } else if (strength === 4) {
      setPasswordStrengthColor("#00d700");
      setPasswordStrengthText("Strong");
    }
    setpassword(password);
  };
  const changeconfirmPassword = (e: any) => {
    setconfirmpassword(e.target.value);
  };
  const changeUserType = (e: any) => {
    setuserType(e.target.value);
  };
  const changeuserName = (e: any) => {
    setuserName(e.target.value);
  };
  const changeAcceptTermsandCondition = (e: any) => {
    settermsAccept(!termsAccept);
    setIsChecked(!isChecked);
  };

  const Signup = () => {
    // if (!userName || !userType || !email || !password || !confirmpassword) {
    //   seterrorCheck(true);
    //   setmessage("All fields are mandatory*");
    //   return;
    // }

    // if (!termsAccept) {
    //   seterrorCheck(true);
    //   setmessage("Please accept terms and conditions*");
    //   return;
    // }

    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (!emailRegex.test(email)) {
    //   seterrorCheck(true);
    //   setmessage("Invalid email format*");
    //   return;
    // }

    // if (passwordStrengthText !== "Strong") {
    //   seterrorCheck(true);
    //   setmessage("Please ensure to have strong password*");
    //   return;
    // }

    // if (password !== confirmpassword) {
    //   seterrorCheck(true);
    //   setmessage("Password fields do not match*");
    //   return;
    // }

    setloaderpopUp(true);
    navigateToLogin();
    console.log(userName);
    console.log(userType);
    console.log(email);
    console.log(password);
    console.log(confirmpassword);
  };

  return (
    <div className={styles.SignupPageCont}>
      <div className={styles.pageNotDisplay}>
        <Image src={pageNotDisplayLogo} width={160} height={115} alt="none" />
        <p className={styles.pageNotDisplaytitle}>
          Oops! Best Viewed on Desktop
        </p>
        <p className={styles.pageNotDisplaysubtitle}>
          For the Best Experience, Switch to Desktop!
        </p>
        <p className={styles.pageNotDisplaydesc}>
          You&apos;re on a mobile or tablet. For the full experience and all
          site features, please visit us on your desktop.
        </p>
      </div>
      <div className={styles.SignupPage}>
        <div className={styles.SignupContainer}>
        <div className={styles.languageselectcont}>
          <LanguageSelector />
          </div>
          <div className={styles.SignupBox}>
            <p className={styles.signupHeader}>
              <p className={styles.signupHead}>Sign Up</p>
              <p className={styles.signupsubHead}>Let&apos;s get started</p>
            </p>
            <p className={errorCheck ? styles.message2 : styles.message1}>
              {message}
            </p>
            <div className={styles.wrapperInputBox}>
              <p>Name</p>
              <input
                type="text"
                placeholder="James Bond"
                onChange={changeuserName}
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Email</p>
              <input
                type="email"
                placeholder="j.bond007@gmail.com"
                onChange={changeEmail}
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Password</p>
              <input
                type="password"
                placeholder="**********"
                onChange={changePassword}
              />
              <div className={styles.passwordStrength}>
                {/* <p>{passwordStrengthText}</p> */}
                <div
                  className={styles.passwordStrengthBar}
                  style={{
                    width: `${passwordStrength * 25}%`,
                    backgroundColor: passwordStrengthColor,
                  }}
                />
              </div>
            </div>

            <div className={styles.wrapperInputBox}>
              <p>Confirm Password</p>
              <input
                type="password"
                placeholder="**********"
                onChange={changeconfirmPassword}
              />
            </div>

            <div className={styles.passwordmessage}>
              <Image src={alertImg} width={20} height={20} alt="none" />
              <p>
                Your password must include at least 8 characters with one
                uppercase letter, one number, and one special character
              </p>
            </div>
            <div className={styles.rememberBox}>
              <input
                type="checkbox"
                id="remember"
                className={styles.custom_checkbox}
                checked={isChecked}
                onChange={changeAcceptTermsandCondition}
              />
              <label htmlFor="remember" className={styles.custom_label}></label>
              <label htmlFor="remember">Accept terms and condition</label>
            </div>

            <div className={styles.buttonBox}>
              <button
                className={styles.loginButton}
                onClick={() => {
                  Signup();
                }}
              >
                Sign Up
              </button>
              <p className={styles.buttonBoxLinks}>
                <div className={styles.divideline}></div>
                OR
                <div className={styles.divideline}></div>
              </p>
              <button className={styles.googleButton}>
                <Image src={googleLogo} height={22} width={22} alt="none" />
                <p>Signup with Google</p>
              </button>
              <div className={styles.buttonBoxLinkssignup}>
                Already have an account?{" "}
                <p
                  onClick={() => {
                    navigateToLogin();
                  }}
                >
                  Sign in here.
                </p>
              </div>
              <div className={styles.buttonBoxLinkssignup2}>
                By continuing you agree to our
                <p> Privacy Policy </p>
                and
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
        <SidebarOnboard
          description={
            "CSRD Reporting Made Easy and Affordable for Any Company."
          }
        />
      </div>
      {
        loaderpopUp && (
          <div className={styles.container}>
          <div className={styles.loader}></div>
          </div>
        )
      }
    </div>
  );
};

export default Signup;
