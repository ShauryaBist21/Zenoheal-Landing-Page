"use client";
import React from "react";
import styles from "./support.module.css";

const Support: React.FC = () => {
  return (
    <section className={styles.supportSection}>
      <h2 className={styles.title}>What Our Clients Say</h2>
      <div className={styles.supportGrid}>
        <div className={styles.supportBox}>
          <h3 className={styles.clientName}>John Doe</h3>
          <p className={styles.clientCompany}>HealthTech Inc.</p>
          <blockquote className={styles.clientTestimonial}>
            "Zenoheal's AI solutions have transformed our healthcare delivery system."
          </blockquote>
        </div>

        <div className={styles.supportBox}>
          <h3 className={styles.clientName}>Jane Smith</h3>
          <p className={styles.clientCompany}>EduLearn Corp.</p>
          <blockquote className={styles.clientTestimonial}>
            "The ZenoED platform has revolutionized our online learning programs."
          </blockquote>
        </div>

        <div className={styles.supportBox}>
          <h3 className={styles.clientName}>Mike Johnson</h3>
          <p className={styles.clientCompany}>RetailGiant</p>
          <blockquote className={styles.clientTestimonial}>
            "ZenoSCM has significantly improved our supply chain efficiency."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Support;