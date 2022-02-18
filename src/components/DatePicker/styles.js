import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 200px;
  margin: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: black;
  color: white;
  height: inherit;

  ${(props) => (props.type === "primary" ? `background: #2196f3;` : null)}
  ${(props) => (props.type === "secondary" ? `background: #4caf50;` : null)}

  transition: all 0.2s ease-in-out;
  opacity: 1;
  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;
