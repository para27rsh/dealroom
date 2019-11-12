import React from "react";
import styles from "./BackDrop.module.css";

const backDrop = props => {
  return <div onClick={props.onCloseHandler} className={styles.backDrop}></div>;
};

export default backDrop;
