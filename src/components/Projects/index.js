import React from 'react';
import { useSelector } from 'react-redux';

import Button from '~/styles/components/Button';

import { Container, Project } from './styles';

export default function Projects() {
  const activeTeam = useSelector(state => state.teams.active);

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={() => {}}>+ Novo</Button>
          <Button onClick={() => {}}>Membros</Button>
        </div>
      </header>

      <Project>
        <p>Aplicação com React Native</p>
      </Project>

      <Project>
        <p>Aplicação com React Native</p>
      </Project>

      <Project>
        <p>Aplicação com React Native</p>
      </Project>

      <Project>
        <p>Aplicação com React Native</p>
      </Project>
    </Container>
  );
}
