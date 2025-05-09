import React from 'react'
import {PortfolioContext} from '../context/PortfolioContext'
import { useContext } from 'react'
import styles from "./Header.module.css";
const Header = () => {
    const {portfolioData} = useContext(PortfolioContext);
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <img src={portfolioData.profilePic || "https://res.cloudinary.com/dmmwlsock/image/upload/v1745085967/profile_aur9se.png" } loading="lazy" alt={"https://res.cloudinary.com/dmmwlsock/image/upload/v1745085967/profile_aur9se.png"} className={styles.image} loading="lazy" />
          </div>
          <h1 className={styles.name}>{portfolioData.name}</h1>
        </div>

{   (portfolioData.resume)&&     <div className={styles.rightSection}>
          <a
            href={portfolioData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            View Resume
          </a>
        </div>}
      </div>
    </div>
  );
}

export default Header
