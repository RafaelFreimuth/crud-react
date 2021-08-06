import { useEffect, useState } from 'react';
import api from './api/api';
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
      
    </div>
  );
}

export default App;
