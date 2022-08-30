import styled from "styled-components";
import { Color } from "../../config/colors";
import { Media } from "../../config/media";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${Media.LG} {
    gap: 40px;
  }
`;

const Input = styled.input`
  padding: 15px 0 15px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  color: ${Color.Black};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  margin-bottom: -10px;

  &::placeholder {
    color: ${Color.Grey};
  }

  ${Media.LG} {
    font-size: 24px;
  }
`;

const Errors = styled.span`
  font-size: 14px;
  color: ${Color.Red};

  ${Media.LG} {
    font-size: 20px;
  }
`;

export { StyledForm, Input, Errors };
