import React from 'react';

import Button from '~/styles/components/Button';
import { Container, SignForm } from '../styles';

export default function SignIn() {
  return (
    <Container>
      <SignForm onSubmit={() => {}}>
        <h1>Boas vindas</h1>

        <span>E-MAIL</span>
        <input type="email" name="email" />

        <span>SENHA</span>
        <input type="password" name="password" />

        <Button size="big" type="submit">
          Entrar
        </Button>
      </SignForm>
    </Container>
  );
}
