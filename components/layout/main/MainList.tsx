import MainCard from "@components/common/Card/MainCard";
import { CardData } from "@models/api/card";
import useStoreList from "@store/list";
import { title } from "process";
import { useCallback, useEffect } from "react";
import styled from "styled-components";

const MainList = (props: any) => {
  const { getList, list } = useStoreList();

  const asyncUseEffect = useCallback(async () => {
    getList();
  }, [getList]);

  useEffect(() => {
    asyncUseEffect();
  }, []);

  const mainCardOnClick = useCallback((cardData: CardData) => {
    console.log("mainCardOnClick", cardData);
  }, []);

  return (
    <ListContainer>
      <div className="inner">
        <CardContainer>
          {list.map((i, idx) => {
            return <MainCard key={idx} {...i} onClick={() => mainCardOnClick(i)} />;
          })}
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
