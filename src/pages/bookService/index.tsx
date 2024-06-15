import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import DashboardHeader from "../../components/dashboardHeader";
import { bookService } from "./styles";
import { colors } from "../../utils/colors";
import Footer from "../../components/footer";
import PageHeader from "../../components/pageHeader";
import ChooseServiceType from "../../components/chooseServiceType";
import { ServiceDetails } from "../../interface/commonTypes";
import ChooseComplaintType from "../../components/chooseComplaintType";
import { DescriptionInput } from "../../components/styledComponents/textInputComponents";
import { Text10PXBold } from "../../components/styledComponents/labels";
import { labels } from "../../utils/labels";

const BookService = () => {
  const [description,setDescription] = useState('')
  return (
    <View style={bookService.body}>
      <View style={bookService.container}>
        <StatusBar backgroundColor={colors.black} />
        <PageHeader />
        <View style={bookService.contants}>
          <ChooseServiceType
            selectedServiceList={(serviceList: ServiceDetails[]) => {
              console.log(serviceList);
            }}
          />
          <ChooseComplaintType/>

          <Text10PXBold>{labels.chooseComplaintTypes}</Text10PXBold>
          <DescriptionInput 
          multiline
          placeholder="Enter your description"
          value={description}
          onChangeText={setDescription}
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default BookService;
