import styled from "styled-components";
import { Colors, Fonts, Scale } from '../../themes';
import { deviceSize } from '../../constants/deviceSize'

export const StyledInput = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Colors.color4};
  border-radius: 10px;
  margin: 15px 0;
  
  .input-field {  
    width: 100%;
    padding: 17px 24px 16px;
    outline: none;
  }

  input {
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    font-family: NunitoSans;
    color: ${Colors.color};
    ${Fonts.size.size14}
  }
  
  ::placeholder {
    font-family: NunitoSans;
    color: ${Colors.color5};
    ${Fonts.size.size14}
  }
  ${props => props.containerStyle}
`