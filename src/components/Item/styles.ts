import styled from "styled-components";
import { Color } from "../../config/colors";
import { Media } from "../../config/media";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${Color.GrayBlue};
  padding: 15px 20px;

  ${Media.LG} {
    border-bottom: 3px solid ${Color.GrayBlue};
  }
`;

const Expense = styled.p`
  font-size: 16px;
  line-height: 19px;

  ${Media.LG} {
    font-size: 24px;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  width: 15px;
  height: 15px;
  cursor: pointer;
  ${Media.LG} {
    width: 30px;
    height: 30px;
  }
`;

export { StyledItem, Expense, Button };
