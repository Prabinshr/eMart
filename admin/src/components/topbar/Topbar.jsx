import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiCall";

export default function Topbar() {
  
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
    window.location.replace("/login")
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to={"/"}>
          <span className="logo">eMart</span>
          
          </Link>
        </div>
        <div className="topRight">
         
          <div className="topbarIconContainer">
            <Link to={"/login"}>
            <span className="logout" onClick={handleClick}>Logout</span>
            
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
