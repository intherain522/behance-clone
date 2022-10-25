import Search from "@components/common/Search";
import styled from "styled-components";
interface Props {
  className?: string;
}

const MainSerch = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #cecece;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #cccccc;
  border-radius: 999px;
  display: flex;
  align-items: center;
`;

const SearchBox = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const SearchNav = styled.div`
  width: 750px;
  background-color: #fff;
  border-left: 1px solid #cccccc;
  border-radius: 0 100px 100px 0;
  box-sizing: border-box;
  padding: 8px 15px;
  & ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & li {
    float: left;
    padding: 8px 15px;
    font-size: 15px;
    &.active {
      background: #222222;
      border-radius: 100px;
      & a {
        color: #fff;
      }
    }
  }
`;

const MainSearch = ({ className }: Props) => {
  return (
    <MainSerch>
      <div className="inner">
        <SearchContainer>
          <SearchBox>
            <Search />
          </SearchBox>
          <SearchNav>
            <ul>
              <li className="active">
                <a href="#">프로젝트</a>
              </li>
              <li>
                <a href="#">이미지</a>
              </li>
              <li>
                <a href="#">프로토타입</a>
              </li>
              <li>
                <a href="#">스트림</a>
              </li>
              <li>
                <a href="#">인물</a>
              </li>
              <li>
                <a href="#">무브보드</a>
              </li>
            </ul>
          </SearchNav>
        </SearchContainer>
      </div>
    </MainSerch>
  );
};

export default MainSearch;
