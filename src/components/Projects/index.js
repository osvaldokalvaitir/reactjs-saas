import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '~/styles/components/Button';

import { Container, Project } from './styles';

import { getProjectsRequest } from '~/store/modules/projects/actions';

export default function Projects() {
  const dispatch = useDispatch();
  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects);

  useEffect(() => {
    async function loadProjects() {
      if (activeTeam) {
        dispatch(getProjectsRequest());
      }
    }

    loadProjects();
  }, [activeTeam, dispatch]);

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

      {projects.data.map(project => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}
    </Container>
  );
}
