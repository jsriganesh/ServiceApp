import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { CustomeFonts } from '../../utils/customeFonts'


export const Text10PXSemiBold = styled.Text`
  color: ${colors.black};
  font-size: 10px;
  font-family: ${CustomeFonts.fontSemiBold};
`


export const Text12PXSemiBold = styled.Text`
  color: ${colors.black};
  font-size: 12px;
  font-family: ${CustomeFonts.fontSemiBold};
`


export const Text10PXBold = styled.Text`
  color: ${colors.black};
  font-size: 10px;
  font-family: '${CustomeFonts.fontBold}';
`


export const Text12PXBold = styled.Text`
  color: ${colors.themeColor};
  font-size: 12px;
  font-family: '${CustomeFonts.fontBold}';
`

export const Text10PXRegular = styled.Text`
  color: ${colors.black};
  font-size: 10px;
  font-family: '${CustomeFonts.fontRegular}';
`


export const Text12PXRegular = styled.Text`
  color: ${colors.themeColor};
  font-size: 12px;
  font-family: '${CustomeFonts.fontRegular}';
`
