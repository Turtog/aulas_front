import styled from 'styled-components';

export const PageContainer = styled.div`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    background-image: url('../imagens/encanadora.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #333;
`;

export const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    margin: auto;
`;

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 0.5rem;
    background-color: #28a745;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        background-color: #218838;
    }
`;

export const RegisterText = styled.p`
    color: #007bff;

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;