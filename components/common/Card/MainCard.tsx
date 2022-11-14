import { CardData } from "@models/api/card";
import useStoreList from "@store/list";
import { type } from "os";
import { useCallback, useEffect } from "react";
import styled from "styled-components";

//type Props = {
//  props: CardData;
//};

interface Props extends CardData {
  onClick?: () => void;
}

const MainCard = ({ img = "", title = "", name = "", like = "0", view = "0", onClick }: Props) => {
  return (
    <CardContainer onClick={onClick}>
      <ImgBox>
        <img src={`${img}`} />
      </ImgBox>
      <CardInfo>
        <InfoText>
          <h1>{`${title}`}</h1>
          <h2>{`${name}`}</h2>
        </InfoText>
        <InfoState>
          <ul>
            <li>
              <img src="/images/common/cardlike_icon.svg" alt="좋아요" />
              <span>{`${like}`}</span>
            </li>
            <li>
              <img src="/images/common/cardeye_icon.svg" alt="조회수" />
              <span>{`${view}`}</span>
            </li>
          </ul>
        </InfoState>
      </CardInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
`;
const ImgBox = styled.div`
  width: 100%;
  padding-bottom: 78.22%;
  position: relative;
  overflow: hidden;
  background-color: #e0e0e0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* min-width: 100%;
    min-height: 100%;
    
     */
  }
`;
const CardInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 8px;
`;
const InfoText = styled.div`
  max-width: 55%;
  & h1 {
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: normal;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 20px;
    cursor: pointer;
  }
  & h1:hover {
    text-decoration: underline;
  }
  & h2 {
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: dimgray;
  }
`;
const InfoState = styled.div`
  max-width: 45%;
  & ul {
    display: flex;
    align-items: center;
  }
  & li {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    margin-left: 12px;
  }
  & li:first-child {
    margin-left: 0;
  }
  & li img {
    width: 15px;
    margin-right: 5px;
  }
`;

export default MainCard;
