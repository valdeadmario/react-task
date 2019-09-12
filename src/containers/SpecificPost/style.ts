import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const Close = styled.button`
  position: absolute;
  right: 20px;
  color: #aaa;
  background: transparent;
  border: none;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: #333;
  }
`;

export const Comments = styled.div`
  padding: 10px;
  border: 2px solid #eee;
  margin-top: 20px;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  border-bottom: 1px solid #000;
  word-wrap: break-word;
`;

export const Body = styled.p`
  font-size: 1.5rem;
  text-align: center;
  word-wrap: break-word;
`;
