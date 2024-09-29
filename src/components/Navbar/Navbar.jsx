import { useState } from "react";
import "./Navbar.css";
import { CiHome } from "react-icons/ci";
import { FaPersonPregnant } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import {
  MdEventNote,
  MdAttachMoney,
  MdOutlineNoFood,
  MdPersonOutline,
  MdOutlineSsidChart,
} from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import Header from "../Header/Header";

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");

  const handleActive = (active) => {
    setActive(active);
  };
  return (
    <div className="home">
      <div className="navbar">
        <div className="navbar-title">
          <div className="logo">
            <h1>A</h1>
          </div>
          <h1>Akademi</h1>
        </div>

        <div className="menu">
          <ul>
            <li
              onClick={() => {
                handleActive("Dashboard");
              }}
              className={active === "Dashboard" ? "active" : ""}
            >
              <CiHome className="menu-icon" />
              Dashboard
            </li>
            <li
              onClick={() => {
                handleActive("Students");
              }}
              className={active === "Students" ? "active" : ""}
            >
              <FaPersonPregnant className="menu-icon" />
              Students
            </li>
            <li
              onClick={() => {
                handleActive("Teachers");
              }}
              className={active === "Teachers" ? "active" : ""}
            >
              <GoPersonFill className="menu-icon" />
              Teachers
            </li>
            <li
              onClick={() => {
                handleActive("Event");
              }}
              className={active === "Event" ? "active" : ""}
            >
              <MdEventNote className="menu-icon" />
              Event
            </li>
            <li
              onClick={() => {
                handleActive("Finance");
              }}
              className={active === "Finance" ? "active" : ""}
            >
              <MdAttachMoney className="menu-icon" />
              Finance
            </li>
            <li
              onClick={() => {
                handleActive("Food");
              }}
              className={active === "Food" ? "active" : ""}
            >
              <MdOutlineNoFood className="menu-icon" />
              Food
            </li>
            <li
              onClick={() => {
                handleActive("User");
              }}
              className={active === "User" ? "active" : ""}
            >
              <MdPersonOutline className="menu-icon" />
              User
            </li>
            <li
              onClick={() => {
                handleActive("Chat");
              }}
              className={active === "Chat" ? "active" : ""}
            >
              <IoChatbubblesOutline className="menu-icon" />
              Chat
            </li>
            <li
              onClick={() => {
                handleActive("Latest-Activity");
              }}
              className={active === "Latest-Activity" ? "active" : ""}
            >
              <MdOutlineSsidChart className="menu-icon" />
              Latest Activity
            </li>
          </ul>
        </div>

        <h3 className="nav-foot-text-web">
          Akademi - School Admission Dashboard
        </h3>
        <h3 className="nav-foot-text">Made with 💗 by Sumair Ahmed</h3>
      </div>
      <Header>
        <p>{active}</p>
      </Header>
    </div>
  );
};

export default Navbar;
