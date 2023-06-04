import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
