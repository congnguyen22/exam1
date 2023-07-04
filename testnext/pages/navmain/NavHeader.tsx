import React, { memo } from "react";
import StyleSheet from "../../styles/header.module.scss";

const NavHeader = () => {
  return (
    <div className={StyleSheet.contain}>
      <h1>hello</h1>
    </div>
  );
};

export default memo(NavHeader);
