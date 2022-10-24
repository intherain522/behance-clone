import Link from "next/link";
import styled from "styled-components";

const SearchStyle = styled.div`
  position: relative;
`;
const InputStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  position: relative;
  z-index: 2;

  & h1 {
    width: 15px;
    margin: 0 20px;
    & img {
      width: 20px;
    }
  }
  & input {
    width: 100%;
    height: 100%;
    border: 0;
    background: none;
    box-sizing: border-box;
    line-height: 50px;
    &::placeholder {
      color: #727272;
      font-size: 23px;
      font-weight: 600;
    }
  }
`;
const SearchSuggestion = styled.div`
  display: none;
  position: absolute;
  top: -1px;
  left: -1px;
  width: 100%;
  background: #fff;
  border-radius: 23px 0 23px 23px;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  padding: 65px 50px 20px 50px;
  & ul li {
    font-size: 22px;
    font-weight: 600;
    padding: 5px 0;
    & p {
      font-size: 12px;
      margin-bottom: 8px;
      font-weight: 400;
      color: #696969;
    }
  }
`;

const Search = () => {
  return (
    <SearchStyle>
      <InputStyle>
        <h1>
          <img src="/images/common/search_icon.svg" alt="돋보기" />
        </h1>
        <input type="search" placeholder="직장에서 창의적인 세상 검색" />
      </InputStyle>
      <SearchSuggestion>
        <ul>
          <li>
            <p>모두 정렬 및 필터링 :</p>
          </li>
          <li>
            <Link href="#">
              <a>프로젝트</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>이미지</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>프로토타입</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>스트림</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>인물</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>무브보드</a>
            </Link>
          </li>
        </ul>
      </SearchSuggestion>
    </SearchStyle>
  );
};

export default Search;
