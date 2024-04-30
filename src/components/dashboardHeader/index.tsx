import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { Text10PXSemiBold } from "../styledComponents/labels";
import { labels } from "../../utils/labels";
import Banner from "./banner";

const DashboardHeader = () => {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text10PXSemiBold style={{ color: colors.lightBlack }}>
            {labels.location}
          </Text10PXSemiBold>
          <Text10PXSemiBold style={{ color: colors.lightWhite }}>
            {"Coimbatore"}
          </Text10PXSemiBold>
        </View>

        <View style={styles.profileImage}></View>
      </View>
    </View>

    <Banner/>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height / 5,
    backgroundColor: colors.black,
    width: "100%",
    padding: 16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage:{
    height:40,
    width:40,
    borderRadius:10,
    backgroundColor:colors.lightWhite
  }
});
