import styled from "styled-components";
import _Link from "next/link";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Link = styled(_Link)``;

export const Img = styled(LazyImage)`
  width: 20rem;
  height: 3.1rem;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    width: 13.8rem;
    height: 2.1rem;
  `}
`;
