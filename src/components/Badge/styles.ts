import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledBadge = styled.span`
  background: ${Color.Turquoise};
  border-radius: 10px;
  border: none;
  margin-left: auto;
  margin-right: 20px;
  padding: 3px 12px 3px 14px;
  font-size: 12px;
  line-height: 15px;
  color: ${Color.White};

  ${Media.LG} {
    font-size: 20px;
    margin-right: 30px;
    padding: 5px 15px 5px 16px;
  }
`;

export { StyledBadge };
