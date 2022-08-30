import styled from "styled-components";
import { Color } from "../../config/colors";
import { Media } from "../../config/media";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-block: 30px;
  ${Media.LG} {
    gap: 34px;
    margin-block: 40px;
  }
`;

export { StyledMain };
