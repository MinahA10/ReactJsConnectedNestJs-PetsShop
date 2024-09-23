import styled from "styled-components";
import { CardContent, Container as MuiContainer } from "@mui/material";

// Conteneur pour le formulaire
export const FormContainer = styled(MuiContainer)`
  max-width: 350px !important;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 20px #ddd;
  padding: 32px 20px;
  margin: auto;
  position: relative;
`;

// Conteneur pour le card
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StyledCardMedia = styled.img`
  cursor: pointer;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

export const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;
