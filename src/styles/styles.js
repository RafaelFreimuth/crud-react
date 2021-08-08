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