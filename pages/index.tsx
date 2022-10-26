import MainCard from "@components/common/Card/MainCard";
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import MainList from "@components/layout/main/MainList";
import MainLogo from "@components/layout/main/MainLogo";
import MainSearch from "@components/layout/main/MainSearch";
import type { NextPage } from "next";
import styled from "styled-components";

const MainHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
`;

const Index: NextPage = () => {
  return (
    <MainHeader>
      <Header />
      <MainSearch />
      <MainList />
      <Footer />
    </MainHeader>
  );
};

export default Index;
