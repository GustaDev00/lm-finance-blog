import { styled } from "styled-components";
import { mediaMaxWidth } from "@/utils/media-query";
import { LazyImage } from "@/components/atoms/lazy-image";

export const WriterContainer = styled.section`
  display: flex;
  margin-bottom: 3rem;
  gap: 4rem;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    gap: 1.4rem;
    align-items: flex-start;
  
  `}
`;

export const User = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Img = styled(LazyImage)`
  width: 3rem;
  height: fit-content;
`;

export const Text = styled.div``;

export const Name = styled.p`
  font-size: 1.2rem;
`;

export const PublishedAt = styled.p`
  font-size: 1.2rem;
`;

export const Timer = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;

  ${mediaMaxWidth("mobile")`
    margin-left: 1rem;
    margin-top: 0.6rem;
  `}
`;

export const Share = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${mediaMaxWidth("mobile")`
    margin-left: 1rem;
  `}
`;

export const ShareText = styled.p`
  font-size: 1.2rem;
`;
