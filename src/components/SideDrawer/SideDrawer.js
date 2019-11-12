import React, { Component } from "react";
import styles from "./SideDrawer.module.css";

class SideDrawer extends Component {
  render() {
    const data =
      this.props && this.props.showDetailsData && this.props.showDetailsData;

    console.log("data", this.props.showDetailsData);
    return (
      <div className={styles.sideDrawer}>
        <div className={styles.sideDrawerWrapper}>
          <div className={styles.closeIcon} onClick={this.props.onCloseHandler}>
            <span>Close</span>
          </div>
          <div className={styles.tabSwitchHeader}>
            <ul>
              <li>Deal Info</li>
              <li>Additional Info</li>
            </ul>
          </div>
          <div className={styles.detailsTab}>
            <ul>
              <li>
                <div>Target Raised</div>
                <div>${data[0].tragetRaise.value}M</div>
              </li>
              <li>
                <div>Amount Raised</div>
                <div>${data[0].amountRaised.value}M</div>
              </li>
              <li>
                <div>Valuation</div>
                <div>${data[0].preMoney.value}M</div>
              </li>
              <li>
                <div>Status</div>
                <div>
                  <span
                    className={
                      data &&
                      data[0].status &&
                      data[0].status.value === "In Progess"
                        ? styles.statusCircleInProgress
                        : styles.statusCircleClosed
                    }
                  ></span>
                  <span>{data[0].status.value}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <header>Description</header>
              <section>
                As such,Energy Infrastructure naturally includes the traditional
                utilities associated with energy transport management(coal
                transport trains,natural gas pipelines,electric transmission
                lines.etc)
              </section>
            </div>
          </div>
          <div className={styles.required}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
