import React, { useState,useEffect } from 'react';
import * as S from './styles'
import Logo from "./../../assets/icu.png";
import Navbar from "../MenuNavBar";
import { Link } from 'react-router-dom';



const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1015);
  const [isTop, setIsTop] = useState(true); // Adicione o estado isTop

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1015);
    };

    const handleScroll = () => {
      setIsTop(window.scrollY === 0); // Verifica se a página está no topo
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.HeaderContainer isTop={isTop}>
      <S.Logo src={Logo}/>
     
       {isMobile ? (
           <S.Navigation2>
    <Navbar />
           </S.Navigation2>
   
      ) : (
        <S.Navigation>
        <S.Link to='#'>
                        
           <a href="/">Inicio</a>

        </S.Link>
        <S.Link to='#'>
                        
           <a href="#">Campanhas</a>

        </S.Link>
        <S.Link to='#'>
                        
           <a href="#">Galerias</a>

        </S.Link>
        <S.Link to='#'>
                        
           <a href="#">Contate-nos</a>

        </S.Link>
        <S.Link to='#' className='atividades'>
                        
           <a href="#">WhatsApp</a>

        </S.Link>
     

  
        </S.Navigation>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
