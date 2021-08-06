import { useEffect, useState } from 'react';
import api from './api/api';
import { Table} from './styles/styles'
import './App.css';

function App() {

  useEffect(() => {
    async function findFuncionarios() {
      const response = await api.get('/paged', { params: { pagina: 0, size: 10 } });
      setFuncionarios(response.data.content);
    }
    
    findFuncionarios();
  }, []);

  const [funcionarios, setFuncionarios] = useState([]);

  return (
    <div className="App">
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
