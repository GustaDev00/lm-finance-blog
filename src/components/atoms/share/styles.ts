import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.black};
  border-radius: 5rem;
  padding: 0.8rem 1.8rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
