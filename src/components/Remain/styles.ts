import styled from "styled-components";
import { Color } from "../../config/colors";
import { Media } from "../../config/media";

const StyledRemain = styled.div<{ $overspending: boolean }>`
  grid-area: remain;
  display: flex;
  align-items: center;
  padding: 36px 20px 40px;
  background: ${({ $overspending }) =>
    $overspending ? `${Color.Red}` : `${Color.Blue}`};
  border-radius: 10px;

  ${Media.LG} {
    padding: 46px 30px 50px;
  }
`;

const Description = styled.p<{ $overspending: boolean }>`
  font-weight: ${({ $overspending }) => ($overspending ? 700 : 500)};
  color: ${({ $overspending }) =>
    $overspending ? `${Color.White}` : `${Color.Black}`};
  font-size: 20px;
  line-height: 24px;

  ${Media.LG} {
    font-size: 28px;
  }
`;

export { StyledRemain, Description };
