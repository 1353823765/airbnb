import Iconavatar from "@/assets/svg/icon_avatar";
import IconGolobal from "@/assets/svg/icon_golobal";

import Iconmenu from "@/assets/svg/icon_menu";
import React, { memo, useEffect, useState } from "react";
import { RightWapper } from "./style";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    //监听window窗口点击事件,这里设置之后会触发冒泡，需要第3个参数取消冒泡
    function windowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    //取消监听事件
    return () => {
      window.removeEventListener("click", windowHandleClick);
    };
  }, []);
  const profileClick = () => {
    setShowPanel(!showPanel);
  };
  return (
    <RightWapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGolobal></IconGolobal>
        </span>
      </div>
      <div className="profile" onClick={profileClick}>
        <div className="profilebuts">
          <span className="icon">
            <Iconmenu></Iconmenu>
          </span>
          <Iconavatar></Iconavatar>

          {showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">注册</div>
                <div className="item login">登录</div>
              </div>
              <div className="bottom">
                <div className="item">来爱彼迎发布房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </RightWapper>
  );
});

export default HeaderRight;
