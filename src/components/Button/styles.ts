import styled from "styled-components";
import { Color } from "../../config/colors";
import { Media } from "../../config/media";

const StyledButton = styled.button`
  color: ${Color.White};
  background: ${Color.Turquoise};
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  padding: 15px 0;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;

  ${Media.LG} {
    font-size: 24px;
    padding: 25px 0;
  }
`;

export { StyledButton };
