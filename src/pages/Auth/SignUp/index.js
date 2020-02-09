import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Criar conta</h1>

        <span>NOME</span>
        <input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <span>E-MAIL</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <span>SENHA</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button size="big" type="submit">
          Criar
        </Button>
      </SignForm>
    </Container>
  );
}
