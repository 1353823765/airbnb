import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { LeftWapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <LeftWapper>
    <div className="logo">
     <IconLogo></IconLogo>
     </div>
    </LeftWapper>
  );
});

export default HeaderLeft;
