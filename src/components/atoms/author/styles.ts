import styled from "styled-components";
import { LazyImage } from "../lazy-image";

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const AuthorImage = styled(LazyImage)`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.texts};
  font-family: var(--manrope);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.0182rem;
`;
