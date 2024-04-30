import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils/colors";

const footerOptions = [
  {
    label: "Home",
    icon: require("../../assets/images/footerImage/home.png"),
    key: "home",
  },
  {
    label: "Booking",
    icon: require("../../assets/images/footerImage/booking.png"),
    key: "booking",
  },
  {
    label: "booking1",
    icon: require("../../assets/images/footerImage/booking.png"),

    key: "booking1",
  },
  {
    label: "Profile",
    icon: require("../../assets/images/footerImage/profile.png"),

    key: "profile",
  },
  {
    label: "Profile",
    icon: require("../../assets/images/footerImage/profile.png"),

    key: "profile1",
  },
];

const Footer = () => {
  const [activeFooter, updateActiveFooter] = useState("home");

  return (
    <View style={styles.container}>
      {footerOptions.map((opt, index) => {
        return (
          <TouchableOpacity
            onPress={() => updateActiveFooter(opt.key)}
            key={index}
            style={
              activeFooter === opt.key ? styles.activeSyle : styles.inActiveSyle
            }
          >
            <Image
              tintColor={
                activeFooter === opt.key ? colors.themeColor : colors.white
              }
              source={opt.icon}
              style={{ height: 20, width: 20 }}
            />
            {activeFooter === opt.key && (
              <Text style={{ color: colors.themeColor, marginLeft: 5 }}>
                {opt.label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 50,
    backgroundColor: colors.themeColor,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeSyle: {
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 30,
    height: 30,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  inActiveSyle: {
    flexDirection: "row",
    borderRadius: 50,
    textAlignVertical: "center",
    textAlign: "center",
    verticalAlign: "middle",
    height: 40,
    width: 50,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
});
