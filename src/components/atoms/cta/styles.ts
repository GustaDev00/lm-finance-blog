import styled from "styled-components";

export const Cta = styled.a`
  padding: 2rem 6rem;
  border-radius: 5rem;
  background: ${({ theme }) => theme.primary};
  transition: box-shadow 0.4s ease;

  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;

  &:hover {
    box-shadow: 0 1rem 1.5rem 0 rgba(1, 115, 153, 0.2);
  }
`;
