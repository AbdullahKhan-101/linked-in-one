import {
  Search,
  SupervisorAccount,
  Home,
  Notifications,
  Chat,
  BusinessCenter,
} from "@mui/icons-material";
import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header_line">
      <div className="container header">
        <div className="header_left">
          <img src="https://freepngimg.com/thumb/categories/1371.png" alt="" />
          <div className="header_search">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header_right">
          <HeaderOption Icon={Home} title="Home" />
          <HeaderOption title="My Network" Icon={SupervisorAccount} />
          <HeaderOption title="Jobs" Icon={BusinessCenter} />
          <HeaderOption title="Messeging" Icon={Chat} />
          <HeaderOption title="Notifications" Icon={Notifications} />
          <HeaderOption title="me" avatar={true} onClick={logoutOfApp} />
        </div>
      </div>
    </div>
  );
};

export default Header;
