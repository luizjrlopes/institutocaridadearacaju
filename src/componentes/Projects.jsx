import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projetos</h2>
      {/* Coloque aqui as fotos e descrições das atividades */}
    </ProjectsContainer>
  );
};

export default Projects;