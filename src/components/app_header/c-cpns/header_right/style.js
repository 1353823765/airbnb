import styled from "styled-components";
export const RightWapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .btns {
    display: flex;
    .btn {
      padding: 12px;
      color: rgb(34, 34, 34);
      font-family: inherit;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
    }
    .btn:hover {
      background-color: rgb(247, 247, 247);
      border-radius: 22px;
      left: -3px;
      right: -3px;
    }
  }

  .profile {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.text.primaryColor};
    height: 42px;
    width: 77px;
    .profilebuts {
      display: flex;
      align-items: center;
      height: 30px;
      width: 58px;
      padding: 5px 5px 5px 12px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 22px;
      left: -3px;
      right: -3px;
      cursor: pointer;
      ${(props) => props.theme.mixin.boxShadow}
    }
    .icon {
      padding-right: 13px;
    }
    .panel {
      right: 0;
      bottom: 440px;
      margin-right: 24px;
      border-radius: 10px;
      position: absolute;
      font-size: 14px;
      height: 250px;
      width: 245px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      .top,
      .bottom {
        margin-top: 5px;

        .item {
          height: 18px;

          padding: 14px 15px;

          line-height: 20px;
        }
      }
    }
    .top {
      border-bottom: 1px solid #ddd;
    }
    .item:hover {
      background-color: #f7f7f7;
    }
    .register {
      font-weight: bold;
    }
  }
`;
