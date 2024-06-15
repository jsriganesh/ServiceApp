import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { Text12PXSemiBold, Text14PXBold, Text18PXBold } from '../styledComponents/labels'
import { labels } from '../../utils/labels'

interface BookingDetailsModalProps {
    closeModal: () => void
}
const BookingDetailsModal = ({ closeModal }: BookingDetailsModalProps) => {

    const subHeader = (title: string) => <Text14PXBold>{title}</Text14PXBold>
    const details = (label: string, value: string) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text12PXSemiBold style={{ flex: 3, color: colors.themeColor }}>{label}</Text12PXSemiBold>
                <Text12PXSemiBold style={{ flex: 7, color: colors.themeColor }}>{value}</Text12PXSemiBold>
            </View>
        )
    }

    return (
        <View style={boookingDetailsModalStyle.container}>

            <View style={{ minHeight: '50%', maxHeight: '90%', width: '80%', backgroundColor: colors.white, borderRadius: 5, borderTopRightRadius: 10, paddingHorizontal: 16 }}>
                <TouchableOpacity onPress={() => closeModal()}>
                    <Image source={require('../../assets/images/modalCloseIcon.png')} tintColor={colors.darkGrey} style={{ height: 25, width: 25, position: 'absolute', right: -16, borderTopRightRadius: 10 }} />
                </TouchableOpacity>
                <Text18PXBold style={{ color: colors.black, textAlign: 'center', marginVertical: 12 }}>{labels.bookingDetails}</Text18PXBold>
                <View style={{ marginBottom: 16 }}>
                    {subHeader('Customer Details')}
                    {details('Name :', 'Sriganesh')}
                    {details('Mobile no :', '87654321123')}
                    {details('Address :', '2/179 mettualayam , karamadai , coimbatore ')}
                    {details('Date :', '19/10/2024 11:00 AM')}
                </View>
                <View style={{ marginBottom: 16 }}>
                    {subHeader('Complaint Details')}
                    {details('Service type :', 'Sriganesh')}
                    {details('Complaint type :', '87654321123')}
                    {details('Complaint description :', '2/179 mettualayam , karamadai , coimbatore ')}
                </View>

            </View>
        </View>
    )
}

export default BookingDetailsModal

const boookingDetailsModalStyle = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background    
    }
})