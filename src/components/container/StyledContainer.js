import styled from "styled-components";
import { Colors, Fonts, Scale } from '../../themes';
import { deviceSize } from '../../constants/deviceSize'

export const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primaryBgColor};
`