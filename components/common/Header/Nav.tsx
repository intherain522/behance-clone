import styled from 'styled-components'

interface Props {
  className?: string
}

const Nav = styled(({ className }: Props) => {
  return (
    <div className={className}>
      <ul>
        <li className="h_logo">
          <a href="/">
            <img src={'/images/common/main_logo1.png'} alt="로고" />
          </a>
        </li>
        <li>
          <a href="#">탐색</a>
        </li>
        <li>
          <a href="#">라이브스트림</a>
        </li>
        <li>
          <a href="#">채용</a>
        </li>
        <li>
          <a href="#">직업</a>
        </li>
      </ul>
    </div>
  )
})`
  & ul {
    display: flex;
    align-items: center;
  }

  & li {
    float: left;
    padding: 19px 15px;
    font-weight: 500;
    font-size: 17px;
  }
  & .h_logo {
    width: 82px;
    padding: 0 15px 0 0;
    & img {
      width: 100%;
    }
  }
`

export default Nav
