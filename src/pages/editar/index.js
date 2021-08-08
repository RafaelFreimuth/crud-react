import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import api from '../../api/api';

import { Container, 
         ConteudoTitulo, 
         Titulo, 
         BotaoAcao, 
         ButtonInfo, 
         Form, 
         Label, 
         Input, 
         Hr, 
         ButtonWarning, 
         AlertDanger,
         AlertSuccess } from '../../styles/styles';

export const Editar = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [nis, setNis] = useState("");
    
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    function clearMessage() {
        setTimeout(() => {
            setStatus({})
        }, 5000);
    }

    const editarFuncionario = async e => {
        e.preventDefault();

        let entity = {id: id !== "novo" ? id : null, nome: nome, sobrenome: sobrenome, email: email, nis: nis};
        
        try {
            if (id !== 'novo') {
                await api.put(`/${id}`,  entity);
            } else {
                await api.post('', entity);
            }

            setStatus({
                type: 'redSuccess',
                mensagem: 'Funcionario Cadastrado com sucesso!'
            });
        } catch (e) {
            setStatus({
                type: 'error',
                mensagem: 'Erro: ' + e.response.data.message
            });

            
        } finally {
            clearMessage();
        }

    }

    useEffect(() => {
        async function getFuncionario() {
            if (id !== 'novo') {
                const response = await api.get(`/${id}`);
    
                setNome(response.data.nome);
                setSobrenome(response.data.sobrenome);
                setEmail(response.data.email);
                setNis(response.data.nis)
            }
        }

        getFuncionario();
    }, [id])

    return (
        <Container>
            <ConteudoTitulo>
                <Titulo>{id !== "novo" ? "Editar" : "Novo"}</Titulo>
                <BotaoAcao>
                    <Link to="/">
                        <ButtonInfo type="button">Listar</ButtonInfo>
                    </Link>{" "}
                </BotaoAcao>
            </ConteudoTitulo>

            {status.type === 'error' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}

            {status.type === 'redSuccess' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}

            <Hr />

            <Form onSubmit={editarFuncionario}>
                <Label>Nome: </Label>
                <Input type="text" 
                       name="nome" 
                       placeholder="Nome" 
                       value={nome}
                       maxLength="30"
                       minLength="2"
                       onChange={e => setNome(e.target.value)} />

                <Label>Sobrenome: </Label>
                <Input type="text" 
                       name="sobrenome" 
                       placeholder="Sobrenome" 
                       maxLength="50"
                       minLength="2"
                       value={sobrenome} 
                       onChange={e => setSobrenome(e.target.value)}
                />

                <Label>Email: </Label>
                <Input type="email"
                       name="email" 
                       placeholder="Email" 
                       value={email}
                       maxLength="100"
                       minLength="5"
                       onChange={e => setEmail(e.target.value)} />

                <Label>NIS: </Label>
                <Input type="number" 
                       name="nis" 
                       placeholder="NIS" 
                       value={nis} 
                       onChange={e => setNis(e.target.value)}
                       max="99999999999"
                       min="00000000001"/>

                <ButtonWarning type="submit">Salvar</ButtonWarning>
            </Form>
        </Container>
    );
}