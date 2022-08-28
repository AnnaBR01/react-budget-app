import styled from "styled-components";
import { Media } from "../config/media";

const StyledApp = styled.div`
  padding: 29px 20px 53px;
  margin: 0 auto;

  ${Media.MD} {
    max-width: 480px;
  }

  ${Media.LG} {
    max-width: 768px;
  }
`;

export { StyledApp };
