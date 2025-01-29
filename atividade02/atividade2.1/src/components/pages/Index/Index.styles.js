import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  text-align: center;
  padding: 2rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ServiceOption = styled.article`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

export const ServicesContainer = styled.div`
  position: relative;
  margin: 2rem 0;
  width: 100%;
  max-width: 600px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
`;

export const ServiceItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  z-index: 1;

  &.active {
    opacity: 1;
    z-index: 3;
    transform: translate(-50%, -50%) scale(1);
  }

  &.prev {
    z-index: 2;
    opacity: 0.5;
    transform: translate(-75%, -50%) scale(0.85);
  }

  &.next {
    z-index: 2;
    opacity: 0.5;
    transform: translate(-25%, -50%) scale(0.85);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #218838;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  transform: translateY(-50%);
`;

export const NavigationButton = styled.div`
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  opacity: 0.85;
  transition: all 300ms ease-in-out;
  padding: 2rem;
  background-color: #0056b3;
  border-radius: 50%;

  &:hover {
    opacity: 1;
  }
`;