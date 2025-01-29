import styled from 'styled-components';

export const ProfileContainer = styled.section`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
    text-align: center;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 200px); 
    text-align: center;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    margin: 0 auto; /* Garante centralização horizontal */
`;

export const ProfileImage = styled.img`
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    background-color: #28a745;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #218838;
    }
`;

export const DeleteButton = styled(Button)`
    background-color: #dc3545;
    margin-top: 1rem;
    &:hover {
        background-color: #c82333;
    }
`;

export const BackLink = styled.a`
    color: #007bff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;