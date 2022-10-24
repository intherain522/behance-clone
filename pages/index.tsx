import Header from "@components/common/Header";
import MainLogo from "@components/layout/main/MainLogo";
import MainSearch from "@components/layout/main/MainSearch";
import type { NextPage } from "next";
import styled from "styled-components";

const MainHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Index: NextPage = () => {
  return (
    <MainHeader>
      <Header />
      <MainSearch />
    </MainHeader>
  );
};

export default Index;
