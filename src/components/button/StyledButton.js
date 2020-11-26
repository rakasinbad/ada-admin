import styled from "styled-components";
import { Colors, Fonts, Scale } from '../../themes';
import { deviceSize } from '../../constants/deviceSize'

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(132.58deg, #62318C 26.06%, #512874 80.3%);
  padding: 13px 0;
  border-radius: 15px;
  :hover {
    cursor: pointer;
  }
  .button-text {
    ${Fonts.FontRegular}
    ${Fonts.size.size16}
    color: ${Colors.color3};
  }
`