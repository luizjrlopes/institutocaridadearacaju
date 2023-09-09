import React from 'react';
import styled from 'styled-components';

const ValuesContainer = styled.section`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Values = () => {
  return (
    <ValuesContainer>
      <h2>Valores</h2>
      {/* Coloque aqui as fotos e descrições das atividades */}
    </ValuesContainer>
  );
};

export default Values;