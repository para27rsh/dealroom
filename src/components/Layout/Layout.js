import React, { Component } from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Leftmenu from "../Leftmenu/Leftmenu";
import TabData from "../TabData/TabData";
import BackDrop from "../BackDrop/BackDrop";
import { tabData } from "../TabData/TabData";
import SideDrawer from "../SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showDetails: false,
    showDetailsData: []
  };

  onClickHandler = index => {
    this.setState({
      showDetails: true,
      showDetailsData: tabData.filter((m, i) => index === i)
    });
  };

  onCloseHandler = () => {
    this.setState({
      showDetails: false
    });
  };
  render() {
    console.log("showDetailsData", this.state.showDetailsData);
    return (
      <div className={styles.Layout}>
        <Leftmenu></Leftmenu>
        <div className={styles.rightSide}>
          {this.state.showDetails && (
            <SideDrawer
              onCloseHandler={this.onCloseHandler}
              showDetailsData={this.state.showDetailsData}
            />
          )}
          <Header></Header>
          <TabData
            onClickHandler={index => this.onClickHandler(index)}
          ></TabData>
        </div>
        {this.state.showDetails && (
          <BackDrop onCloseHandler={this.onCloseHandler} />
        )}
      </div>
    );
  }
}

export default Layout;
