import styled from "styled-components";
import { Media } from "../../config/media";

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  ${Media.LG} {
    font-size: 28px;
  }
`;
export { StyledTitle };
