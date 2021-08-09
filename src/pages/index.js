import { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';
import { Pagination } from '@material-ui/lab'
import { Table, 
         Container, 
         ButtonDanger, 
         ButtonPrimary, 
         ConteudoTitulo, 
         BotaoAcao, 
         ButtonInfo, 
         Hr, 
         AlertSuccess } from '../styles/styles';

import '../App.css';

function Index() {

    const [status, setStatus] = useState({type: "", mensagem: ""});
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    function clearMessage() {
        let timeout = setTimeout(() => {

            if (status) {
                setStatus({})
            }

            clearTimeout(timeout);
        }, 2000);
    }

  async function findFuncionarios() {
    const response = await api.get('/paged', { params: { pagina: page - 1, size: 5 } });
    
    setFuncionarios(response.data.content);

    setTotalPage(response.data.totalPages)
  }

  useEffect(() => {
    findFuncionarios();
  }, [page]);

  const [funcionarios, setFuncionarios] = useState([]);

  async function apagar(id) {
    await api.delete(`/${id}`);

    setStatus({
        type: 'success',
        mensagem: 'Funcionario deletado com sucesso'
    })

    clearMessage();

    findFuncionarios();
  }

  return (
    <div className="App">     
      <Container>
        <ConteudoTitulo>
            <BotaoAcao>
                <Link to="/novo">
                    <ButtonInfo type="button">Cadastrar</ButtonInfo>
                </Link>{" "}
            </BotaoAcao>
        </ConteudoTitulo>
        
        {status.type === "success" ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}

        <Hr />

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
                    <Link to={"/" + funcionario.id}>
                        <ButtonPrimary type="button">
                            <i className="fa fa-eye" aria-hidden="true"/>
                        </ButtonPrimary>
                    </Link>{" "}

                   <ButtonDanger onClick={() => apagar(funcionario.id)}>
                       <i className="fa fa-trash" aria-hidden="true"/>
                    </ButtonDanger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination count={totalPage} className="pagination" onChange={(e, page) => setPage(page)}/>
      </Container>
    </div>
  );
}

export default Index;