import React from "react";
import "./style.scss";

import badge from "./imgs/badge.png";
import chat from "./imgs/chart-bar.png";
import clipboard from "./imgs/clipboard.png";
import briefcase from "./imgs/briefcase.png";
import dashboard from "./imgs/home.png";
import loanReq from "./imgs/loanReq.png";
import savingProd from "./imgs/savingProd.png";
import pigggy from "./imgs/pigggy.png";
import prefrences from "./imgs/prefrences.png";
import settlements from "./imgs/scroll 1settlements.png";
import transactions from "./imgs/transaction.png";
import services from "./imgs/services.png";
import whitelist from "./imgs/whitelist.png";
import serviceAcc from "./imgs/serviceAcc.png";
import guarantors from "./imgs/guarantors.png";
import users from "./imgs/users.png";
import users2 from "./imgs/user-times 1karma.png";
import decisions from "./imgs/Vectordecision.png";
import fees from "./imgs/Vectorfees.png";
import loan from "./imgs/Vectorloan.png";
import vector from "./imgs/Vector.png";
import avatar from "./imgs/avatar.png";
import dropDown from "./imgs/dropDown.png";

const Sidebar = ({ children }: any) => {
  const customers = [
    { text: "Users", img: users },
    { text: "Guarantors", img: guarantors },
    { text: "Loan", img: loan },
    { text: "Decision Models", img: decisions },
    { text: "Savings", img: pigggy },
    { text: "Loan Requests", img: loanReq },
    { text: "Decision Models", img: decisions },
    { text: "Whitelist", img: whitelist },
    { text: "Karma", img: users2 },
  ];
  const businesses = [
    { text: "Organisation", img: briefcase },
    { text: "Loan Product", img: loanReq },
    { text: "Savings Products", img: savingProd },
    { text: "Fees and Charges", img: fees },
    { text: "Transactions", img: transactions },
    { text: "Services", img: services },
    { text: "Service Account", img: serviceAcc },
    { text: "Settlements", img: settlements },
    { text: "Reports", img: chat },
  ];
  const settings = [
    { text: "Prefrences", img: prefrences },
    { text: "Fees and Pricing", img: badge },
    { text: "Audit Logs", img: clipboard },
  ];
  return (
    <div className="sideBar">
      <div className="mobile-utilities">
        <div className="avatar">
          <img src={avatar} alt="user" />
        </div>
        <div className="userName">
          <p>Adedeji</p>
          <img src={dropDown} alt="drop" className="dropDown" />
        </div>
        <div className="searchbar">
          <input type="search" placeholder="Search for anything" />
        </div>
      </div>
      <div className="sideBar-topContainer">
        <div className="sidebar-Tab">
          <img src={briefcase} alt="Organisation" />
          Switch Organisation
          <img src={vector} alt="vectorImg" />
        </div>
        <div className="sidebar-Tab">
          <img src={dashboard} alt="dashboard" />
          Dashboard
        </div>
      </div>

      <p className="sidebar-tabHeaders">CUSTOMERS</p>
      {customers.map((item) => (
        <div
          // key={i}
          className={
            item.text === "Users" ? "sidebar-currentTab" : "sidebar-Tab"
          }
        >
          <img src={item.img} alt={item.text} />
          {item.text}
        </div>
      ))}
      <p className="sidebar-tabHeaders">BUSINESSES</p>
      {businesses.map((item, i) => (
        <div key={i} className="sidebar-Tab">
          <img src={item.img} alt={item.text} />
          {item.text}
        </div>
      ))}

      <p className="sidebar-tabHeaders">SETTINGS</p>
      {settings.map((item, i) => (
        <div key={i} className="sidebar-Tab">
          <img src={item.img} alt={item.text} />
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
