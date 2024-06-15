import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { CustomeFonts } from '../../utils/customeFonts'
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text12PXSemiBold } from '../styledComponents/labels';
import { getBookingStatusColorCode } from '../../commonMethods';


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

const OutlineContainer = styled(TouchableOpacity)`
  background-color: ${colors.lightGrey};
  font-size: 12px;
  font-family: ${CustomeFonts.fontSemiBold};
  border-color: ${colors.themeColor};
  border-radius: 5px;
  height: 35px;
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


interface OutlineButtonProps {
  label:string
  onPress:()=>void
  isActive:boolean
}
export const OutlineButton =({label,onPress,isActive}:OutlineButtonProps)=>{
  return(
    <OutlineContainer onPress={() => onPress()} style={{borderWidth:isActive ? 1:0,width:(Dimensions.get('screen').width/2)-30}} >
      <Text12PXSemiBold style={{color:colors.themeColor}}>{label}</Text12PXSemiBold>
    </OutlineContainer>
  )
}






// ===================================================================
const BookingStatusButtonContainer = styled(TouchableOpacity)`
  background-color: ${colors.lightGrey};
  font-size: 10px;
  font-family: ${CustomeFonts.fontSemiBold};
  border-color: ${colors.themeColor};
  border-radius: 5px;
  width:80px;
  justify-content: center;
  align-items: center;
  padding:3px 0
`;


interface BookingStatusButtonProps {
  label:string
  onPress:()=>void
  status?:'P'|'A'|'C'|'R'|'D',
  isCancel?:boolean
}
export const BookingStatusButton =({label,onPress,status,isCancel}:BookingStatusButtonProps)=>{
  return(
    <BookingStatusButtonContainer disabled={status? true:false} onPress={() => onPress()} style={{backgroundColor:isCancel ? colors.darkGrey : status ? getBookingStatusColorCode(status):''}}>
      <Text12PXSemiBold style={{color:colors.white}}>{label}</Text12PXSemiBold>
    </BookingStatusButtonContainer>
  )
}
