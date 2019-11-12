import React, { Component } from "react";
import styles from "./Leftmenu.module.css";
import img from "../img/leftmenu.png";
class Leftmenu extends Component {
  render() {
    return (
      <div className={styles.leftMenu}>
        <div className={styles.leftMenuWrapper}>
          <div className={styles.leftMenuImage}>
            <img src={img} alt=""></img>
          </div>
          <div className={styles.leftMenuList}>
            <ul>
              <li>Deal Room</li>
              <li>Broker-Dealer Registry</li>
              <li>Issuance Statistics</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Leftmenu;
