// src/components/LandingPage/Hero/index.js
import React from "react";
import styles from "./hero.module.css";

const Hero = ({ headline, subheadline, cta }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subheadline}>{subheadline}</p>
        <button className={styles.ctaButton}>{cta}</button>
      </div>
    </section>
  );
};

export default Hero;
