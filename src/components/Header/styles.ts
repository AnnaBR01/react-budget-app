import styled from "styled-components";
import { Media } from "../../ui/media";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.4fr 1fr 1fr 1fr;
  grid-template-areas: "title select" "budget budget" "remain remain" "spent spent";
  row-gap: 20px;

  ${Media.LG} {
    row-gap: 30px;
  }
`;
export { StyledHeader };
