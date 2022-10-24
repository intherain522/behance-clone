import styled from 'styled-components';

interface Props {
  className?: string;
}

const MainLogo = styled(({ className }: Props) => {
  return (
    <div className={className}>
      <img src={'/images/common/main_logo1.png'} alt="메인로고" />
    </div>
  );
})`
  width: 82px;
  & img {
    width: 100%;
  }
`;

export default MainLogo;
