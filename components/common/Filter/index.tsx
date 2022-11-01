import styled from "styled-components";

type Props = {
  data: FilterData[];
};
type FilterData = {
  text: string;
  imgLink: string;
};

const Filter = ({ data }: Props) => {
  return (
    <>
      {data.map((i, idx) => {
        return (
          <FilterContainer key={idx}>
            <FilterIcon>
              <img src={`${i.imgLink}`} />
            </FilterIcon>
            <FilterText>{`${i.text}`}</FilterText>
            <FilterArrow>
              <span></span>
            </FilterArrow>
          </FilterContainer>
        );
      })}
    </>
  );
};
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ececec;
  border-radius: 6px;
  padding: 10px 0;
  &:hover {
    cursor: pointer;
    border: 1px solid #222222;
    transition-duration: 0.3s;
  }
`;
const FilterIcon = styled.div`
  display: flex;
  align-items: center;
  width: 15px;
  padding: 0 10px;
  & img {
    max-height: 15px;
  }
`;
const FilterText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;
const FilterArrow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;

  & span {
    position: relative;
    display: inline-block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid dimgray;
    height: 0;
    width: 0;
  }
`;
export default Filter;
