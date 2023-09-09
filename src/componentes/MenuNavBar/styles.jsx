
import styled from 'styled-components';
const theme = {
    primary: "#010030",//azul escuro
    sencudary:"#fff",//branco
    tertiary:"#bbbacf",//zinza medio
    quaternary:"#162d34"// verde escuro
  }
export const Container = styled.div`
 width:100%;
display:flex;
align-items: center;
justify-content: center;

.navbar {
   
    height: 80px;
    display: flex;
   



}

.menu-bars {
   
    display: flex;
    font-size: 40px;
    margin-left: 40px;
    margin-bottom: 10px;
    width: 50px;
    height:50px;

position: relative;


    @media screen and (max-width:1015px) {
        margin-left: 0;
    margin-bottom: 0;
        height: 20px;       
        font-size: 40px;
}
}



.nav-menu {
    background-color: ${theme.tertiary};
  
    width: 364px;
    height: 100%;
    display: flex;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    box-shadow:2px 2px 10px #707070;
    border-style: inset;

    @media screen and (max-width:1015px) {

        width: 100%;
        height: 100%;



}
}

.nav-menu.active {
   
    right: 0;
    transition: 350ms;
    z-index: 1;
    
}








.navbar-toggle {//regiao do X
 
    width:20%;
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
    color: black;
    @media screen and (max-width:1015px) {

        height: 10px;
        margin-top:40px;
      

}

}



`

export const itensMenu = styled.div`

width:100%;
height: 100%;
display:flex;
flex-direction:column;

`

export const navMenuItems = styled.div`

//conteiner com toda tab
    display:flex;

    width: 90%;
    justify-content: end;
   

   
`

export const navText = styled.div`


    display: flex;
    justify-content: space-around;
    align-items: space-around;
    padding: 2px 0px 8px 8px;
    list-style: none;
    width:100%;
    height: 200px;
    flex-direction:column;



    a {
        
        text-decoration: none;
        color: ${theme.primary};
        font-size: 25px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    
        border-radius: 4px;

    }

    span { //opçoes do menu
        justify-content: right;
        width:460px;
        margin-left:-80px;

        

    }
    span:hover{

        color:${theme.sencudary};

    }


    @media screen and (max-width:1015px) {

        padding: 1px 0px 1px 8px;
        a {
        
        font-size: 28px;
       

    }
    span { //opçoes do menu
       
        width:80%;
        margin-right:80px;

        

    }
    }
   
`
export const Link = styled.nav`
 
 width:100%;
    height: 100%;
  
`;