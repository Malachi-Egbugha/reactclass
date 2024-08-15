import React from "react";
import "./Sidebar.css";
import { CiHome,CiUser } from "react-icons/ci";
import { FaQuestion,FaTasks } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import logo from "../../assets/images/user.png";
import {isActive,config} from "../../Services"
const {dashboard,question, usermanagement, subjectmanagement, assigment} = config.routeconfig
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarheader">
     
        <img className="logo" src={logo} />

      </div>
      <div className="sidebarmain">
        <a href={dashboard} style={{
          color:isActive(dashboard)?"#fff":"",
           backgroundColor:isActive(dashboard)?"#000":""}}>
        <div className="iconmain" >

          <CiHome className="icon"/> 
          <h1>Dashboard</h1>
          
        </div>
        </a>
        <a href={question} style={{
          color:isActive(question)?"#fff":"",
           backgroundColor:isActive(question)?"#000":""}}>
        <div className="iconmain" >
          <FaQuestion className="icon" />
          <h1>Question Management</h1>
          
        </div>
        </a>
        <a href={usermanagement} style={{
          color:isActive(usermanagement)?"#fff":"",
           backgroundColor:isActive(usermanagement)?"#000":""}}>
        <div className="iconmain" >

          <CiUser className="icon"/> 
          <h1>User Management</h1>
          
        </div>
        </a>
        <a href={subjectmanagement} style={{
          color:isActive(subjectmanagement)?"#fff":"",
           backgroundColor:isActive(subjectmanagement)?"#000":""}}>
        <div className="iconmain" >

          <MdOutlineSubject className="icon"/> 
          <h1>Subject Management</h1>
          
        </div>
        </a>
        <a href={assigment} style={{
          color:isActive(assigment)?"#fff":"",
           backgroundColor:isActive(assigment)?"#000":""}}>
        <div className="iconmain" >

          <FaTasks className="icon"/> 
          <h1>Assigment</h1>
          
        </div>
        </a>
        
      </div>
      
     
    </div>
  );
}

export default Sidebar;
