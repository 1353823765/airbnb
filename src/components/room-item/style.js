import styled from "styled-components";

export const ItemWapper = styled.div`
  width: 25%;
  padding: 8px;
  box-sizing: border-box;
  .inner {
    width: 100%;
  }
  .cover {cursor: pointer;
    height: 249px;
    /* position: relative;
  padding: 67.7% 8px 0; */
    box-sizing: border-box;
    border-radius: 12px;
    overflow: hidden;
    .icon-heart {
        
      position: absolute;
      margin: 10px 300px;
    }
    img {
      /* position: absolute;
    left: 0;
    top: 0; */
    
      width: 100%;
      height: 100%;
    }
  }
  .name {
    margin: 14px 0px;
    h4 {
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  .price {
    margin: -8px 0;
    .price-after {
      font-size: 14px;
      font-weight: bolder;
    }
    .price-before {
      font-size: 8px;
    }
  }
`;
