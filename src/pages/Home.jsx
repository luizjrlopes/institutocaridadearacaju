import React from 'react';
import Header from '../componentes/Header/Header';
import Activities from './../componentes/Activities';
import Mission from './../componentes/Mission';
import Vision from './../componentes/Vision';
import Values from './../componentes/Values';
import Projects from './../componentes/Projects';
import Supporters from './../componentes/Supporters';
import * as S from './styles'
function Home() {
  return (
    <S.Container>
      <S.Topside>
      <Header />
      <div style={{ height: "190px" }}></div>

      </S.Topside>
    
      <Activities />
      <Mission />
      <Vision />
      <Values />
      <Projects />
      <Supporters />
    </S.Container>
  );
}

export default Home;
