import MainCard from "@components/common/Card/MainCard";
import useStoreList from "@store/list";
import styled from "styled-components";

const MainList = (props: any) => {
  const { list } = useStoreList();

  return (
    <ListContainer>
      <div className="inner">
        <CardContainer>
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </CardContainer>
      </div>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  padding: 20px 0;
`;
const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

export default MainList;
