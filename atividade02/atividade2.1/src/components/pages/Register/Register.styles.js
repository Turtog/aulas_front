import styled from 'styled-components';

export const RegisterContainer = styled.div`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
    text-align: center;
`;

export const RegisterMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 200px);
    text-align: center;
    padding: 2rem;
`;

export const FormSection = styled.section`
    width: 100%;
    max-width: 600px;
    margin-bottom: 2rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    display: block;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
`;

export const Button = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: #218838;
    }
`;

export const Alert = styled.p`
    color: red;
    font-size: 0.875rem;
`;

export const LoginLink = styled.a`
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;