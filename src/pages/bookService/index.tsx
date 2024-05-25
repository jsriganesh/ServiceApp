import { View, Text, StatusBar } from "react-native";
import React from "react";
import DashboardHeader from "../../components/dashboardHeader";
import { bookService } from "./styles";
import { colors } from "../../utils/colors";
import Footer from "../../components/footer";
import PageHeader from "../../components/pageHeader";
import ChooseServiceType from "../../components/chooseServiceType";
import { ServiceDetails } from "../../interface/commonTypes";

const BookService = () => {
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
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default BookService;
