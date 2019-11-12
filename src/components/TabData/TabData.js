import React, { Component } from "react";
import styles from "./TabData.module.css";
import plus from "../img/filter-plus.png";
import filterIcon from "../img/filterIcon.png";

export const tabData = [
  {
    industryType: {
      name: "Name & Industry Type",
      value: "Energy Infrastructure",
      subType: "Financial Services"
    },
    issuanceType: { name: "Issuance Type", value: "Equity" },
    tragetRaise: { name: "Target Raise", value: 23 },
    preMoney: { name: "Pre-Money Valuation", value: 10 },
    amountRaised: { name: "Amount Raised", value: 10 },
    location: { name: "Location", value: "Europe" },
    status: { name: "Status", value: "In Progess" }
  },
  {
    industryType: {
      value: "ABC",
      subType: "Financial Services"
    },
    issuanceType: { value: "Investment Fund" },
    tragetRaise: { value: 22 },
    preMoney: { value: 9 },
    amountRaised: { value: 9 },
    location: { value: "US" },
    status: { value: "In Progess" }
  },
  {
    industryType: {
      value: "Alternative Gas Extration",
      subType: "Space"
    },
    issuanceType: { value: "Debt" },
    tragetRaise: { value: 21 },
    preMoney: { value: 8 },
    amountRaised: { value: 8 },
    location: { value: "US" },
    status: { value: "Closed" }
  }
];

class TabData extends Component {
  render() {
    let tabDataHeading = [];
    for (let key in tabData[0]) {
      tabDataHeading.push(tabData[0][key].name);
    }
    return (
      <div className={styles.TabWrapper}>
        <div className={styles.filterTab}>
          <div className={styles.addIssuance}>
            <img src={plus} alt=""></img> <span>Add issuance</span>
          </div>
          <div className={styles.filters}>
            <img src={filterIcon} alt=""></img> <span>Filters </span>
          </div>
        </div>
        <div className={styles.tableDataWrapper}>
          <table>
            <tbody>
              <tr className={styles.rowDataHeader}>
                {tabDataHeading.map(m => {
                  return <th>{m}</th>;
                })}
              </tr>

              {tabData.map((m, i) => {
                return (
                  <tr onClick={() => this.props.onClickHandler(i)}>
                    <td>
                      <div>{m.industryType.value}</div>
                      <div id={styles.subType}>{m.industryType.subType}</div>
                    </td>
                    <td>{m.issuanceType.value}</td>
                    <td>${m.tragetRaise.value}M</td>
                    <td>${m.preMoney.value}M</td>
                    <td>${m.amountRaised.value}M</td>
                    <td>{m.location.value}</td>
                    <td>
                      <div
                        className={
                          m.status.value === "In Progess"
                            ? styles.statusCircleInProgress
                            : styles.statusCircleClosed
                        }
                      ></div>
                      {m.status.value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/*
        <div className={styles.rowDataHeader}>
          <ul>
            {tabDataHeading.map(m => {
              return <li>{m}</li>;
            })}
          </ul>
        </div>
     
        <div className={styles.rowDataWrapper}>
          {tabData.map(m => {
            return (
              <div className={styles.rowData}>
                <ul>
                  <li>
                    <div>{m.industryType.value}</div>
                    <div>{m.industryType.subType}</div>
                  </li>
                  <li>{m.issuanceType.value}</li>
                  <li>{m.tragetRaise.value}</li>
                  <li>{m.preMoney.value}</li>
                  <li>{m.amountRaised.value}</li>
                  <li>{m.location.value}</li>
                  <li>{m.status.value}</li>
                </ul>
                 <div className={styles.typeWrapper}>
                  <div className={styles.type}>{m.industryType.value}</div>
                  <div className={styles.subType}>{m.industryType.subType}</div>
                </div>
                <div className={styles.issuanceType}>
                  {m.issuanceType.value}
                </div>
                <div className={styles.target}>{m.tragetRaise.value}</div>
                <div className={styles.preMoney}>{m.preMoney.value}</div>
                <div className={styles.amountRaised}>
                  {m.amountRaised.value}
                </div>
                <div className={styles.location}>{m.location.value}</div>
                <div className={styles.status}>
                  <span className={styles.statusCircle}>@</span>
                  <span className={styles.statusText}>{m.status.value}</span>
                </div> 
              </div>
            );
          })}
        </div>*/}
      </div>
    );
  }
}

export default TabData;
