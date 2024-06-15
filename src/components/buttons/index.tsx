import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { CustomeFonts } from '../../utils/customeFonts'
import { Text, TouchableOpacity } from 'react-native';
import React from 'react';


const ThemeButtonContainer = styled(TouchableOpacity)`
  background-color: ${colors.themeColor};
  font-size: 12px;
  font-family: ${CustomeFonts.fontSemiBold};
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  margin:8px 0px
`;

interface PrimaryButtonProps {
  label:string
  onPress:()=>void
}
export const PrimaryButton =({label,onPress}:PrimaryButtonProps)=>{
  return(
    <ThemeButtonContainer onPress={() => onPress()}>
            <Text style={{ color: colors.white, fontFamily:CustomeFonts.fontSemiBold  }}>{label}</Text>
    </ThemeButtonContainer>
  )
}