import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';

import { Container, Project } from './styles';

import {
  getProjectsRequest,
  createProjectRequest,
  openProjectModal,
  closeProjectModal,
} from '~/store/modules/projects/actions';

export default function Projects() {
  const dispatch = useDispatch();
  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects);
  const [newProject, setNewProject] = useState('');

  useEffect(() => {
    async function loadProjects() {
      if (activeTeam) {
        dispatch(getProjectsRequest());
      }
    }

    loadProjects();
  }, [activeTeam, dispatch]);

  if (!activeTeam) return null;

  function handleCreateProject(e) {
    e.preventDefault();

    dispatch(createProjectRequest(newProject));
  }

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={() => dispatch(openProjectModal())}>+ Novo</Button>
          <Button onClick={() => {}}>Membros</Button>
        </div>
      </header>

      {projects.data.map(project => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}

      {projects.projectModalOpen && (
        <Modal>
          <h1>Criar projeto</h1>

          <form onSubmit={handleCreateProject}>
            <span>NOME</span>
            <input
              name="newProject"
              value={newProject}
              onChange={e => setNewProject(e.target.value)}
            />

            <Button size="big" type="submit">
              Salvar
            </Button>
            <Button
              onClick={() => dispatch(closeProjectModal())}
              size="small"
              color="gray"
            >
              Cancelar
            </Button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
