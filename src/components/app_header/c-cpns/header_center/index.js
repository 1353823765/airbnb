import IconSearch from "@/assets/svg/icon_search";
import React, { memo } from "react";
import { CenterWapper } from "./style";
const HeaderCenter = memo(() => {
  return (
    <CenterWapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearch></IconSearch>
        </div>
      </div>
    </CenterWapper>
  );
});
export default HeaderCenter;
