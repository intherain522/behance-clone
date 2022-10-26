import styled from "styled-components";

const MainCard = () => {
  return (
    <CardContainer>
      <ImgBox>
        <img src="/images/common/test.jpg" />
      </ImgBox>
      <CardInfo>
        <InfoText>
          <h1>Tile</h1>
          <h2>name</h2>
        </InfoText>
        <InfoState>
          <ul>
            <li>
              <img src="/images/common/cardlike_icon.svg" alt="좋아요" />
              <span>000</span>
            </li>
            <li>
              <img src="/images/common/cardeye_icon.svg" alt="조회수" />
              <span>000k</span>
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
  & h1 {
    font-size: 15px;
    font-weight: 600;
    text-overflow: ellipsis;
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
  & li img {
    width: 15px;
    margin-right: 5px;
  }
`;

export default MainCard;
