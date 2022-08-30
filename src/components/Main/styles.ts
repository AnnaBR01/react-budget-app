import styled from "styled-components";
import { Media } from "../../config/media";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-block: 30px;
  ${Media.LG} {
    gap: 34px;
    margin-block: 40px;
  }
`;

const Description = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  margin-block: 89px 117px;
  ${Media.LG} {
    font-size: 26px;
  }
`;

export { StyledMain, Description };
