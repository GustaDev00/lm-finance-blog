import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Home = styled.section`
  padding: 22.9rem 18rem 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 18rem 6.4rem 0;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 16rem 2.6rem 0;
  `}
`;
