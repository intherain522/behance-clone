import styled from 'styled-components'
import HButtons from './HButtons'
import Nav from './Nav'

interface Props {
  className?: string
}

const Header = styled(({ className }: Props) => {
  return (
    <header className={className}>
      <div className="inner">
        <Nav />
        <HButtons />
      </div>
    </header>
  )
})`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  & .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default Header
