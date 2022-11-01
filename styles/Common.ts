import { createGlobalStyle } from "styled-components";

export const breakpoints = [768, 1023];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Common = createGlobalStyle`
/*commonStyle*/
html{
  font-family: "MinSans";
  font-size: 62.5%;
    color:#222222;
    font-size: 16px;
    font-weight: 300;
}
a{
  color:#222222;
}
.inner{
  width:97.5%;
  margin:0 auto;
  box-sizing: border-box;
}
`;

export default Common;
