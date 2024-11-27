import styled, { css } from "styled-components";
import { LazyImage } from "../lazy-image";
import { Author as _Author } from "../author";
import Link from "next/link";
import { mediaMaxWidth } from "@/utils/media-query";

export const Post = styled(Link)<{ $horizontal?: boolean }>`
  display: flex;
  flex-direction: ${({ $horizontal }) => ($horizontal ? "row" : "column")};
  gap: ${({ $horizontal }) => ($horizontal ? "2rem" : "3rem")};
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 0.6;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
  `}
`;

export const Img = styled(LazyImage)<{ $horizontal?: boolean }>`
  ${({ $horizontal }) =>
    $horizontal
      ? css`
          width: 30.8rem;
          height: 26.4rem;
        `
      : css`
          widtgh: 38.4rem;
          height: 22rem;
        `}

  object-fit: cover;

  ${mediaMaxWidth("mobile")`
    width: 100%;
    height: 24.8rem;
  `}
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  overflow: hidden;
  color: ${({ theme }) => theme.titles};
  text-overflow: ellipsis;
  font-family: var(--manrope);
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 3.2rem;
  letter-spacing: -0.06rem;
`;

export const Text = styled.p`
  height: 8.7rem;
  overflow: hidden;
  color: ${({ theme }) => theme.texts};
  text-overflow: ellipsis;
  font-family: var(--manrope);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.0032rem;

  ${mediaMaxWidth("mobile")`
    height: auto;
  `}
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Author = styled(_Author)``;

export const Date = styled.p`
  color: ${({ theme }) => theme.date};
  font-family: var(--manrope);
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.0182rem;
`;
