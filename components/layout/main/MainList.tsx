import MainCard from "@components/common/Card/MainCard";
import { CardData } from "@models/api/card";
import useStoreList from "@store/list";
import { title } from "process";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const MainList = (props: any) => {
  const { getList, list, curPage, totalCnt } = useStoreList();
  const { ref, inView, entry } = useInView();

  const asyncUseEffect = useCallback(async () => {
    getList({
      data: {
        curPage: 0,
        size: 30,
      },
    });
  }, [getList]);

  const mainCardOnClick = useCallback((cardData: CardData) => {
    console.log("mainCardOnClick", cardData);
  }, []);

  useEffect(() => {
    if (inView) {
      if (totalCnt > list.length) {
        getList({
          data: {
            curPage: Number(curPage) + 1,
            size: 10,
          },
        });
      }
    }
  }, [inView]);

  useEffect(() => {
    asyncUseEffect();
  }, []);

  return (
    <ListContainer>
      <div className="inner">
        <CardContainer>
          {list.map((i, idx) => {
            return <MainCard key={idx} {...i} onClick={() => mainCardOnClick(i)} />;
          })}
        </CardContainer>
        <div ref={ref}>{totalCnt > list.length && <LeadMore>Loading...</LeadMore>}</div>
      </div>
    </ListContainer>
  );
};

const LeadMore = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

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
