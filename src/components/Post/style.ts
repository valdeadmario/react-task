import styled from "styled-components";

export const Card = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin-top: 10px;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  color: #aaa;
  &:hover {
    color: #555;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
