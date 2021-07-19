import React from "react";
import "./Widget.css";

import InfoIcon from "@material-ui/icons/Info";

function Widget() {
  return (
    <div className="widget">
      <div className="widgetHeader">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
    </div>
  );
}

export default Widget;
