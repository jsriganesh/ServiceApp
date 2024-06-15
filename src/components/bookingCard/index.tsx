import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { CustomeFonts } from '../../utils/customeFonts'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text12PXSemiBold, TextHyperLink12PXBold } from '../styledComponents/labels';
import { BookingStatusButton } from '../buttons';
import { BookingStatusNameEnum } from '../../utils/constant';
import { labels } from '../../utils/labels';


const BookingCardContainer = styled(View)`
  background-color: ${colors.lightBlack};
  border-width: 1px;
  border-color: #ccc;
  padding: 10px 5px;
  border-radius: 5px;
  width: 100%;
  margin:4px 0px
`;

interface BookingCardContainerProps {
  bookingDetails:any,
  viewDetails:()=>void
}



const details=(label:string,value:string)=>{
  return(
    <View style={{ flexDirection: 'row' }}>
      <Text12PXSemiBold style={{ color: colors.white, flex: 0.4 }}>{label}</Text12PXSemiBold>
      <Text12PXSemiBold numberOfLines={1} style={{ color: colors.white, flex: 0.6 }}>{value}</Text12PXSemiBold>
    </View>
  )
}

export const BookingCard = ({ bookingDetails,viewDetails}: BookingCardContainerProps) => {
  return (
    <BookingCardContainer>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.7 }}>
          {details('Service Type :','A/C')}
          {details('Complaint :','Camera Not working ')}
          {details('Address :','coimbatore tamil nadu 2/179,')}
          {details('Date :','13-12-2024 12:00 AM')}
        </View>
        <View style={{ flex: 0.3, justifyContent:'space-between',alignItems:'flex-end'}}>
          <BookingStatusButton label={BookingStatusNameEnum[bookingDetails.status]} onPress={()=>{}} status={bookingDetails ? bookingDetails.status:''}/>
          <BookingStatusButton label={labels.cancel} onPress={()=>{}} isCancel/>
          <TextHyperLink12PXBold onPress={()=>{viewDetails()}}>{'View Details >'}</TextHyperLink12PXBold>
        </View>
      </View>
    </BookingCardContainer>
  )
}
