import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
     margin:0;
     padding:0;
     outline:0;
     box-sizing: border-box;
    & :focus {
         outline: none !important;
        }
    }
 #root {
  min-height: 100vh;
 }
#html {
    margin: 0 auto;
}

html {
font-size: 15px;
background: #fff;
overflow-x: hidden;
scroll-behavior: smooth;
}
a {
    color: unset;
    text-decoration: none;
}
section {
    padding: 75px 0;
}
`;
