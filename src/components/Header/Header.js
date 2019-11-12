import React, { Component } from "react";
import styles from "./Header.module.css";
class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerHeadingRightTop}>
            Alan Lambert <span></span>
          </div>
          <div className={styles.headerHeading}>
            <h2>Deal Room</h2>
          </div>

          <div className={styles.headerTab}>
            <div className={styles.headeTabData}>External Issuances</div>
            <div className={styles.headeTabData}>Favorite Issuances</div>
            <div className={styles.headeTabData}>My Issuances</div>
            <div className={styles.headeTabData}>MNDA Management</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
