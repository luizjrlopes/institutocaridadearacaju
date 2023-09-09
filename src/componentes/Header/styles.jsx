import styled from 'styled-components';
const theme = {
  primary: 'rgba(30, 144, 255, 0.3)', // azul com 50% de opacidade
    sencudary:"#da4d3e",//vermelho
    tertiary:"#ffe400",//amarelo

  }



  export const HeaderContainer = styled.header`
  background-color: ${(props) =>
    props.isTop ? "none" : theme.primary}; // Define o fundo com base em isTop
  color: ${(props) =>
    props.isTop ? "white" : "black"}; // Define o fundo com base em isTop
  padding: 20px;
  min-height: ${(props) =>
    props.isTop ? "120px" : "inherit"}; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed; /* Fixo na parte superior da tela */
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  transition: background-color 0.3s ease;


`;

// Resto dos estilos permanecem os mesmos


export const Logo = styled.img`


width:140px;
  height: 140px;
  padding: 5px;
  display:flex;
  align-items:center;
  justify-content: space-around;
  z-index: 4;
  &:hover {
    text-decoration: underline; /* Sublinhar ao passar o mouse */
  }

  @media screen and (max-width:1015px) {
     
    width:140px;
  height: 140px;

  
    }
  
 

 

`;

export const Navigation = styled.nav`
 width:50%;
    height: 100%;
 display: flex;

 justify-content: end;
    align-items: center;
z-index: 10;

a{
  color: ${theme.sencudary};
}
  
`;
export const Navigation2 = styled.nav`
 width:30%;
    height: 100%;
 display: flex;



z-index: 10;
  
`;
export const Link = styled.nav`
 
 width:100%;
    height: 100%;
  
`;
