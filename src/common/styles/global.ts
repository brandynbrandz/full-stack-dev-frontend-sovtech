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
.btn {
    position: relative;
    overflow: hidden;
    font-size: 11pt;
    color: blue;
    background: none;
    border: 2px solid blue;
    border-radius: 0;
    padding: 10px 44px;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    z-index: 0;
  
    &:hover::before {
      opacity: 1;
      transition: all 0.3s ease;
    }
    &:hover {
      background: blue;
        color:white;
    }
  }
`;
