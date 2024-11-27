import { mediaMaxWidth } from '@/utils/media-query';
import { styled } from 'styled-components';

export const Article = styled.article`
  h1 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 0rem 0 3rem;

    ${mediaMaxWidth('mobile')`
            font-size: 2.6rem;
            line-height: 3.2rem;
    `}
  }

  h2 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 3rem 0;

    ${mediaMaxWidth('mobile')`
            font-size: 2.2rem;
            line-height: 2.8rem;
        `}
  }

  h3 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 3rem 0;

    ${mediaMaxWidth('mobile')`
            font-size: 2rem;
            line-height: 2.8rem;
    `}
  }

  h4 {
    color: ${({ theme }) => theme.richBlack};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    margin: 3rem 0;

    ${mediaMaxWidth('mobile')`
            font-size: 1.8rem;
            line-height: 2.8rem;
        `}
  }
  ul {
    margin-left: 1.8rem;
  }

  li {
    list-style: disc;
  }

  strong {
    font-size: 1.6rem;
    font-weight: bold;

    ${mediaMaxWidth('mobile')`
      font-size: 1.4rem;
    `}
  }

  p,
  li,
  span {
    color: ${({ theme }) => theme.richBlack};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.7rem;
    margin-bottom: 1.4rem;

    ${mediaMaxWidth('mobile')`
            font-size: 1.2rem;
            line-height: 2.2rem;
        `}
  }

  img {
    width: 30rem;
    height: fit-content;

    &.img {
      width: 100% !important;
      border-radius: 1.5rem;
      margin-bottom: 30px;
    }

    ${mediaMaxWidth('mobile')`
      width: 18rem;
    `}
  }

  figure {
    display: flex;
    gap: 3.3rem;

    ${mediaMaxWidth('mobile')`
            flex-direction: column;
        `}
  }
`;
