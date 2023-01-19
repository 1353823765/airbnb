import styled from "styled-components";

export const CenterWapper = styled.div`
  .search-bar {
    height: 46px;
    width: 298px;
    display: flex;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 40px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
  }
  .text {
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-right: 16px;
    width: 220px;
    font-size: 14px;
    font-weight: 600;
  }
  .icon {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 7px;
    border-radius: 32px;
    background-color: ${(props) => props.theme.color.primaryColor};
    padding: 10px;
  }
`;
