import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 7rem;

  ${mediaMaxWidth("mobile")`
    padding: 0 3.5rem;
  `}
`;
