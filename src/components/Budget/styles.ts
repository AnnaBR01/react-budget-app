import styled from "styled-components";
import { Color } from "../../config/colors";
import { Media } from "../../config/media";

const StyledBudget = styled.div`
  grid-area: budget;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 20px;
  background: ${Color.BrightBlue};
  border-radius: 10px;

  ${Media.LG} {
    padding: 42px 30px;
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

const Button = styled.button`
  min-width: 100px;
  border: none;
  background: ${Color.White};
  border-radius: 10px;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;

  ${Media.LG} {
    min-width: 130px;
    padding: 15px 35px;
    font-size: 21px;
  }
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.TransparentWhite};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export { StyledBudget, Description, Button, Input };
