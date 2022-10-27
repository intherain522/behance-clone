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
  z-index: 600;
`;
const TooltipWrapper = styled.div`
  position: relative;
`;
const TolltipSelecter = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
  padding: 10px 25px;
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
const FooterNav = styled.div`
  & ul {
    padding: 0 25px;
  }
  & li {
    float: left;
    padding-right: 10px;
  }
  & li a {
    color: dimgray;
  }
  & li:hover a {
    color: #0057ff;
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
        <TolltipSelecter>언어</TolltipSelecter>
        <Tooltip
          data={[
            {
              title: "English",
              link: "#",
            },
            {
              title: "Čeština",
              link: "#",
            },
            {
              title: "Dansk",
              link: "#",
            },
            {
              title: "Deutsch",
              link: "#",
            },
            {
              title: "Español",
              link: "#",
            },
            {
              title: "Français",
              link: "#",
            },
            {
              title: "Italiano",
              link: "#",
            },
            {
              title: "Nederlands",
              link: "#",
            },
            {
              title: "Norsk",
              link: "#",
            },
            {
              title: "Polski",
              link: "#",
            },
            {
              title: "Português",
              link: "#",
            },
            {
              title: "Pyccкий",
              link: "#",
            },
            {
              title: "Suomi",
              link: "#",
            },
            {
              title: "Svenska",
              link: "#",
            },
            {
              title: "Türkçe",
              link: "#",
            },
            {
              title: "日本語",
              link: "#",
            },
            {
              title: "한국어",
              link: "#",
            },
            {
              title: "中文(简体)",
              link: "#",
            },
            {
              title: "中文(繁體)",
              link: "#",
            },
          ]}
          align="center"
        />
      </TooltipWrapper>
      <FooterNav>
        <ul>
          <li>
            <Link href="#">
              <a>사용약관</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>개인정보</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>커뮤니티</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>도움말</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Cookie 환경 설정</a>
            </Link>
          </li>
        </ul>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
