import styled from 'styled-components';

export const AppContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  width: 768px;
  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const Phonebook = styled.h1`
  color: #333;
  @media (max-width: 320px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;
