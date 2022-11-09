import styled from "styled-components";

const AlignFilter = () => {
  return (
    <Container>
      <Text>추천</Text>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
  &::before {
    content: "정렬";
    position: absolute;
    top: -14px;
    left: 5px;
    font-size: 10px;
    color: dimgray;
  }
`;
const Text = styled.div`
  font-size: 16px;
  padding: 0 5px;
  &::after {
    content: "";
    position: relative;
    display: inline-block;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid dimgray;
    height: 0;
    width: 0;
    left: 6px;
    top: -5px;
  }
`;

export default AlignFilter;
