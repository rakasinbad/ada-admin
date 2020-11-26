import { css } from "styled-components";
import NunitoSans from "../assets/fonts/NunitoSans-Regular.ttf";
import NunitoSansBold from "../assets/fonts/NunitoSans-Black.ttf";
import { device } from '../constants/deviceSize'

// const type = {
//   base: 'NunitoSans-Regular',
//   bold: 'NunitoSans-Bold',
//   italic: 'NunitoSans-RegularItalic',
//   semiBold: 'NunitoSans-SemiBold',
//   semiBoldItalic: 'NunitoSans-SemiBoldItalic',
//   black: 'NunitoSans-Black',
//   blackItalic: 'NunitoSans-BlackItalic',
//   boldItalic: 'NunitoSans-BoldItalic',
//   extraBold: 'NunitoSans-ExtraBold',
//   extraBoldItalic: 'NunitoSans-ExttraBoldItalic',
//   extraLight: 'NunitoSans-ExtraLight',
//   extraLightItalic: 'NunitoSans-ExtraLightItalic',
//   light: 'NunitoSans-Light',
//   lightItalic: 'NunitoSans-LightItalic',
// }

const FontRegular = css`
  @font-face {
    font-family: NunitoSans;
    src: url(${NunitoSans});
  }
  font-family: NunitoSans, Arial, serif, Helvetica, sans-serif;
`

const FontBold = css`
  @font-face {
    font-family: NunitoSansBold;
    src: url(${NunitoSansBold});
  }
  font-family: NunitoSansBold, Arial, serif, Helvetica, sans-serif;
`

const size = {
  titleSize: css`
    font-size: 40px;
    @media ${device.desktop} {
      font-size: 30px
    }
    @media ${device.tablet} {
      font-size: 24px
    }
  `,
  size38: css`
    font-size: 38px;
  `,
  size32: css`
    font-size: 32px;
  `,
  size20: css`
    font-size: 20px;
    @media ${device.desktop} {
      font-size: 16px
    }
    @media ${device.tablet} {
      font-size: 14px
    }
  `,
  size18: css`
    font-size: 18px;
    @media ${device.desktop} {
      font-size: 16px
    }
    @media ${device.tablet} {
      font-size: 14px
    }
  `,
  size18_12onMobile: css`
    font-size: 18px;
    @media ${device.desktop} {
      font-size: 16px
    }
    @media ${device.mobileM} {
      font-size: 12px
    }
  `,
  size18_11onMobile: css`
    font-size: 18px;
    @media ${device.desktop} {
      font-size: 16px
    }
    @media ${device.mobileM} {
      font-size: 11px
    }
  `,
  size16: css`
    font-size: 16px;
    @media ${device.desktop} {
      font-size: 14px
    }
    @media ${device.mobileM} {
      font-size: 10px
    }
  `,
  size14: css`
    font-size: 14px;
    @media ${device.desktop} {
      font-size: 11px
    }
    @media ${device.mobileM} {
      font-size: 9px
    }
  `,
   size14_12onMobile: css`
    font-size: 14px;
    @media ${device.mobileM} {
      font-size: 12px
    }
   `,
  size12: css`
    font-size: 12px;
    @media ${device.desktop} {
      font-size: 10px;
    }
    @media ${device.mobileM} {
      font-size: 8;
    }
  `,
}

export default {
  FontRegular,
  FontBold,
  size,
}