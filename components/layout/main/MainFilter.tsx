import Filter from "@components/common/Filter";
import styled from "styled-components";

const MainFilter = () => {
  return (
    <div className="inner">
      <FilterContainer>
        <FilterBox>
          <Filter
            data={[
              {
                text: "크리에이티브 툴",
                imgLink: "/images/common/filter_icon_creative.svg",
              },
            ]}
          />
          <Filter
            data={[
              {
                text: "도구",
                imgLink: "/images/common/filter_icon_tool.svg",
              },
            ]}
          />
          <Filter
            data={[
              {
                text: "색상",
                imgLink: "/images/common/filter_icon_palette.svg",
              },
            ]}
          />
          <Filter
            data={[
              {
                text: "위치",
                imgLink: "/images/common/filter_icon_locate.svg",
              },
            ]}
          />
          <Filter
            data={[
              {
                text: "학교",
                imgLink: "/images/common/filter_icon_school.svg",
              },
            ]}
          />
          <Filter
            data={[
              {
                text: "소스 파일",
                imgLink: "/images/common/filter_icon_clip.svg",
              },
            ]}
          />
          <Filter
            data={[
              {
                text: "구독",
                imgLink: "/images/common/filter_icon_reader.svg",
              },
            ]}
          />
        </FilterBox>
        <SortMenu></SortMenu>
      </FilterContainer>
    </div>
  );
};
const FilterContainer = styled.div`
  padding-bottom: 24px;
`;
const FilterBox = styled.div`
  display: flex;
  align-items: center;
  & > div {
    margin-right: 10px;
  }
`;
const SortMenu = styled.div``;
export default MainFilter;
