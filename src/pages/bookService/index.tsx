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

import { bookService } from "./styles";
import { colors } from "../../utils/colors";
import { ServiceDetails } from "../../interface/commonTypes";
import { DescriptionInput } from "../../components/styledComponents/textInputComponents";
import { Text10PXBold } from "../../components/styledComponents/labels";
import { labels } from "../../utils/labels";
import { convertLocalDate, convertLocalTime } from "../../commonMethods";
import { PrimaryButton } from "../../components/buttons";

const BookService = () => {
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  const [preferredDate, setPreferredDate] = useState<Date>(new Date());
  const [selectedAddress, setSelectedAddress] = useState<any>({});

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
    <View style={bookService.body}>
      <View style={bookService.container}>
        <StatusBar backgroundColor={colors.black} />
        <PageHeader />
        <ScrollView>
          <View style={bookService.contants}>
            <ChooseServiceType
              selectedServiceList={(serviceList: ServiceDetails[]) => {
                console.log(serviceList);
              }}
            />
            <ChooseComplaintType />
            {commonSubheader(labels.chooseComplaintTypes)}
            <DescriptionInput
              multiline
              placeholder="Enter your description"
              value={description}
              onChangeText={setDescription}
            />

            {commonSubheader(labels.setPreferredTiming)}

            <TouchableOpacity
              onPress={() => {
                setShowDatePicker(true);
              }}
              style={styles.dateTimePickerParentView}
            >
              <Text>
                {preferredDate
                  ? `${convertLocalDate(preferredDate)} ${convertLocalTime(
                      preferredDate
                    )}`
                  : "Select date and time"}
              </Text>
              <Image
                source={require("../../assets/images/dateTimeIcon.png")}
                style={{ height: 25, width: 25 }}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePickerComponent
                mode="date"
                updateDate={(date) => {
                  setShowDatePicker(false);
                  setShowTimePicker(true);
                  setPreferredDate(date);
                }}
                date={preferredDate}
              />
            )}
            {showTimePicker && (
              <DateTimePickerComponent
                mode="time"
                updateDate={(date) => {
                  setShowTimePicker(false);
                  setShowTimePicker(false);
                  setPreferredDate(date);
                }}
                date={preferredDate}
              />
            )}

            <SigleSelectDropDown
              label="Select Addres"
              selectedData={setSelectedAddress}
            />

            {renderImageUploadView()}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottonButtonContainer}>
        <PrimaryButton label={labels.bookNow} onPress={() => null} />
      </View>

      {/* <Footer /> */}
    </View>
  );
};

export default BookService;

const styles = StyleSheet.create({
  dateTimePickerParentView: {
    height: 45,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#CCC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  bottonButtonContainer: {
    marginHorizontal: 16,
  },
});
