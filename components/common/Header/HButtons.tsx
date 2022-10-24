import styled from "styled-components";

interface Props {
  className?: string;
}

const HButtons = styled(({ className }: Props) => {
  return (
    <div className={className}>
      <button>로그인</button>
      <button>등록</button>
      <a href="https://www.adobe.com/kr">
        <img src={"/images/common/adobe_logo.png"} alt="어도비로고" />
      </a>
    </div>
  );
})`
  display: flex;
  align-items: center;
  & button {
    background: transparent;
    border: 0;
    padding: 5px 20px;
    border-radius: 100px;
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 600;
    margin-left: 10px;
    &:first-child {
      border: 1px solid #ececec;
    }
    &:nth-child(2) {
      background: #0057ff;
      color: #fff;
    }
  }
  & a {
    display: block;
    width: 60px;
    margin-left: 20px;
  }
  & img {
    width: 100%;
  }
`;

export default HButtons;
