import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import DateTimePickerComponent from "../../components/dateAndTimePicker";
import Footer from "../../components/footer";
import PageHeader from "../../components/pageHeader";
import ChooseServiceType from "../../components/chooseServiceType";
import ChooseComplaintType from "../../components/chooseComplaintType";
import SigleSelectDropDown from "../../components/singleSelectDropDown";

import { bookHistoryStyle } from './styles';
import { colors } from "../../utils/colors";
import { ServiceDetails } from "../../interface/commonTypes";
import { DescriptionInput } from "../../components/styledComponents/textInputComponents";
import { Text10PXBold } from "../../components/styledComponents/labels";
import { labels } from "../../utils/labels";
import { convertLocalDate, convertLocalTime } from "../../commonMethods";
import { OutlineButton, PrimaryButton } from "../../components/buttons";
import { BookingCard } from "../../components/bookingCard";
import { bookingHistory } from "../../redux/payloadAndResponseTypesMockdata";
import BookingDetailsModal from "../../components/bookingDetailsModal";

const BookingHistory = () => {
    const list = bookingHistory
    const [selectedTab, setSelectedTab] = useState<'Upcoming' | 'Past'>('Upcoming')
    const [showBookingDetails, setShowBookingDetails] = useState<boolean>(false)
    
    const commonSubheader = (label: string) => (
        <Text10PXBold style={{ marginTop: 10 }}>{label}</Text10PXBold>
    );

    const renderImageUploadView = () => {
        return (
            <View>
                {commonSubheader(labels.uploadImages)}
                <View
                    style={{
                        flexDirection: "column",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: 90,
                            width: 65,
                            borderRadius: 7,
                            backgroundColor: colors.lightGrey,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={require("../../assets/images/camera.png")}
                            style={{ height: 40, width: 40 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={bookHistoryStyle.body}>
            <View style={bookHistoryStyle.container}>
                <StatusBar backgroundColor={colors.black} />
                <PageHeader />
                <ScrollView>
                    <View style={bookHistoryStyle.contants}>
                        <View style={bookHistoryStyle.tabContainer}>
                            <OutlineButton isActive={selectedTab === 'Upcoming'} label={labels.upcomingBookings} onPress={() => setSelectedTab('Upcoming')} />
                            <OutlineButton isActive={selectedTab === 'Past'} label={labels.pastBookings} onPress={() => setSelectedTab('Past')} />
                        </View>

                        {
                            list.map((bookings, index) => {
                                return <BookingCard viewDetails={()=>setShowBookingDetails(true)} bookingDetails={bookings} key={index} />
                            })
                        }

                    </View>
                </ScrollView>
            </View>


            <Footer />

            {showBookingDetails && <BookingDetailsModal closeModal={()=>setShowBookingDetails(false)}/>}
        </View>
    );
};

export default BookingHistory;

const styles = StyleSheet.create({

});
