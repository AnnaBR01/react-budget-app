import styled from "styled-components";
import { Color } from "../../config/colors";
import { Media } from "../../config/media";

const StyledSpent = styled.div`
  grid-area: spent;
  display: flex;
  align-items: center;
  padding: 36px 20px 40px;
  background: ${Color.Pink};
  border-radius: 10px;

  ${Media.LG} {
    padding: 46px 30px 50px;
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  ${Media.LG} {
    font-size: 28px;
  }
`;

export { StyledSpent, Description };
