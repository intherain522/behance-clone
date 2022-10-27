import MainCard from "@components/common/Card/MainCard";
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import MainFilter from "@components/layout/main/MainFilter";
import MainList from "@components/layout/main/MainList";
import MainLogo from "@components/layout/main/MainLogo";
import MainSearch from "@components/layout/main/MainSearch";
import type { NextPage } from "next";
import styled from "styled-components";
const Wrap = styled.div``;
const MainHeader = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 500;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
`;

const Index: NextPage = () => {
  return (
    <Wrap>
      <MainHeader>
        <Header />
        <MainSearch />
        <MainFilter />
      </MainHeader>
      <MainList />
      <Footer />
    </Wrap>
  );
};

export default Index;
