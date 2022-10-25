import Link from "next/link";
import styled from "styled-components";
import Tooltip from "../Tooltip";

const FooterContainer = styled.div`
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: dimgray;
  font-weight: bold;
`;
const TooltipWrapper = styled.div`
  position: relative;
`;
const TolltipSelecter = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
  padding: 7.5px 25px;
  &::after {
    content: "";
    position: relative;
    display: inline-block;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid dimgray;
    height: 0;
    width: 0;
    left: 6px;
    top: -2px;
  }
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
    width: 1px;
    background: #afafaf;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TooltipWrapper>
        <TolltipSelecter>Behance 추가 정보</TolltipSelecter>
        <Tooltip
          data={[
            {
              title: "Behance에서의 채용 정보",
              link: "#",
            },
            {
              title: "Adobe Portfolio",
              link: "#",
            },
            {
              title: "블로그",
              link: "#",
            },
            {
              title: "크리에이티브 채용 팁",
              link: "#",
            },
            {
              title: "앱 다운로드",
              link: "#",
            },
          ]}
          align="left"
        />
      </TooltipWrapper>
      <TooltipWrapper>
        <TolltipSelecter>Behance 추가 정보</TolltipSelecter>
        <Tooltip
          data={[
            {
              title: "Behance에서의 채용 정보",
              link: "#",
            },
            {
              title: "Adobe Portfolio",
              link: "#",
            },
            {
              title: "블로그",
              link: "#",
            },
            {
              title: "크리에이티브 채용 팁",
              link: "#",
            },
            {
              title: "앱 다운로드",
              link: "#",
            },
          ]}
          align="right"
        />
      </TooltipWrapper>
    </FooterContainer>
  );
};

export default Footer;
