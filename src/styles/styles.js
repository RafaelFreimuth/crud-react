import styled from 'styled-components';

export const Table = styled.table`
    margin-top: 15px;
    width: 100%;

    th {
        background-color: rgb(230,230,255);
        color: black;
        padding: 10px;
    }

    td {
        background-color: #f8f8f8;
        color: #3e3e3e;
        padding: 8px;
    }
`

export const Container = styled.section`
    margin: 0px auto;
    width: 70%;
    max-width: 70%;
`

export const ButtonDanger = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px 8px;
    border: 1px solid #dc3545;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    :hover{
        background-color: #dc3545;
        color: #fff;
    }
`;

export const ConteudoTitulo = styled.section`
    display: flex;   
    justify-content: space-between;
`;

export const AlertSuccess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 10px 0;
    border: 1px solid #badbcc;
    border-radius: 4px;
    padding: 7px;
`;

export const AlertDanger = styled.p`
    background-color: #f8d7da;
    color: #842029;
    margin: 10px 0;
    border: 1px solid #f5c2c7;
    border-radius: 4px;
    padding: 7px;
`;

export const Titulo = styled.h1`
    font-size: 23px;
    font-family: sans-serif;
    margin: 10px 15px;
    color: #1d1e1e;  
`;

export const ButtonInfo = styled.button`
    background-color: #fff;
    color: #0dcaf0;
    padding: 5px 8px;
    border: 1px solid #0dcaf0;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    :hover{
        background-color: #0dcaf0;
        color: #fff;
    }
`;

export const Label = styled.label`
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;
`;

export const BotaoAcao = styled.section`
    margin: 5px;  
`;

export const Hr = styled.hr`
    margin-bottom: 15px;
`;

export const ButtonPrimary = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    :hover{
        background-color: #0d6efd;
        color: #fff;
    }
`;

export const ButtonWarning = styled.button`
    background-color: #fff;
    color: #ffc107;
    padding: 5px 8px;
    border: 1px solid #ffc107;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    :hover{
        background-color: #ffc107;
        color: #fff;
    }
`;

export const Form = styled.form`
    margin: 0px auto;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;