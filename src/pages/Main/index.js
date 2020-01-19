import React, { useEffect } from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Main() {
  useEffect(() => {
    api.get('/teste');
  }, []);

  return <h1>Hellow</h1>;
}
