import Link from "next/link";
import styled from "styled-components";

const TooltipBox = styled.div<{ align: string }>`
  position: absolute;
  background: #fff;
  bottom: 200%;
  border-radius: 6px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

  ${({ align }) => (align === "left" ? "left: 20px;" : null)}
  ${({ align }) => (align === "right" ? "right: 20px;" : null)}
  padding: 13px 0px;
  & span {
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    border-top-color: #fff;
    bottom: -6px;
    left: 15px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    transform: rotate(45deg);
  }
  & span::before {
    content: "";
    width: 12px;
    height: 12px;
    background: #fff;
    position: absolute;
    top: -1px;
    left: 0px;
  }
  & li a {
    display: block;
    padding: 10px 40px 10px 20px;
    box-sizing: border-box;
    color: dimgray;
    &:hover {
      background: #0057ff;
      color: #fff;
      transition-duration: 0.3s;
    }
  }
`;

type Props = {
  data: TooltipData[];
  align: string;
};

type TooltipData = {
  title: string;
  link: string;
};

const Tooltip = ({ data, align }: Props) => {
  return (
    <TooltipBox align={align}>
      <span></span>
      <ul>
        {data.map((i, idx) => {
          return (
            <li key={idx}>
              <Link href={`${i.link}`}>
                <a>{`${i.title}`}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </TooltipBox>
  );
};

export default Tooltip;
