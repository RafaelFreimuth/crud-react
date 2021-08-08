import { useEffect, useState } from 'react';
import api from './api/api';
import { Table, Container, ButtonDanger } from './styles/styles'
import './App.css';

function App() {
  async function findFuncionarios() {
    const response = await api.get('/paged', { params: { pagina: 0, size: 10 } });
    setFuncionarios(response.data.content);
  }

  useEffect(() => {
    findFuncionarios();
  }, []);

  const [funcionarios, setFuncionarios] = useState([]);

  async function apagar(id) {
    await api.delete(`/${id}`);

    findFuncionarios();
  }

  return (
    <div className="App">
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>NIS</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map(funcionario => (
              <tr key={funcionario.id}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.sobrenome}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.nis}</td>
                <td>
                  <ButtonDanger onClick={() => apagar(funcionario.id)}><i class="fa fa-trash" aria-hidden="true"></i></ButtonDanger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
