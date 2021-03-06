import React from "react";
import "./HeaderOption.css";

import { Avatar } from "@material-ui/core";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOptionIcon" />}
      {avatar && (
        <Avatar className="headerOptionIcon">{user?.displayName[0]}</Avatar>
      )}
      <h3 className="headerOptionTitle">{title}</h3>
    </div>
  );
}

export default HeaderOption;
