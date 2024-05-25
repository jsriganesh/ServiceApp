import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { Text10PXSemiBold, Text18PXBold } from "../styledComponents/labels";
import { labels } from "../../utils/labels";

const PageHeader = () => {
  return (
    <View style={styles.container}>
      <Text18PXBold>{"Book Your Service"}</Text18PXBold>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 65,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.themeColor,
    width: "100%",
  },
});
