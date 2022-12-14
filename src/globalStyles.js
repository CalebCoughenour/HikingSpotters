import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;

margin-right: auto;
margin-left: 50px;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
  padding-right: 50px;
  padding-left: 50px;
}
`;


export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
  transition: all 0.3s ease-out;
  background: #fff;
  background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
}

@media screen and (max-width: 960px) {
  width: 100%;
}
`;