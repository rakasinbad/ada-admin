import styled from 'styled-components'
import { Fonts, Colors } from './'
import { device } from '../constants/deviceSize'

const Title = styled.h1`
  ${Fonts.FontBold}
  ${Fonts.size.size32}
  ${props => props.customStyle}
`

const SubTitle = styled.h1`
  ${Fonts.FontNexaLight}
  ${Fonts.size.size14}
  letter-spacing: 3.5px;
  font-weight: bold;
  color: ${Colors.lightblue};
  @media (max-width: 182px) {
    letter-spacing: 0;
  }
  ${props => props.customStyles}
`

const DialogTitle = styled.h1`
  ${Fonts.FontAvenir}
  ${Fonts.size.dialogTitleSize}
  font-weight: bold;
  text-align: center;
  color: ${Colors.lightblue};
  margin: 1em 0;
  ${props => props.customStyles}
`

const Paragraph = styled.p`
  ${Fonts.FontAvenir}
  color: ${Colors.paragraph};
  ${props => props.customStyles}
`

const RedText = styled.p`
  ${Fonts.FontNexaLight}
  ${Fonts.size.size14_12onMobile}
  font-weight: bold;
  letter-spacing: 3.5px;
  :hover {
    cursor: pointer;
  }
  color: ${Colors.redText};
  @media ${device.smMaterialUI} {
    text-align: center;
  }
  ${props => props.customStyles}
`

const FooterText = styled.p`
  ${Fonts.FontNexaLight}
  color: ${Colors.white};
  ${props => props.customStyles}
`

export default {
  Title,
  SubTitle,
  DialogTitle,
  Paragraph,
  RedText,
  FooterText
}