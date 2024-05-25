import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text10PXBold, Text10PXRegular } from "../styledComponents/labels";
import { labels } from "../../utils/labels";
import { colors } from "../../utils/colors";
import { useAppSelector } from "../../redux/store";
import { ServiceDetails } from "../../interface/commonTypes";

interface ChooseServiceTypeProps {
  multiselect?: boolean;
  selectedServiceList: (data: ServiceDetails[]) => void;
}

const ChooseServiceType = ({
  multiselect,
  selectedServiceList,
}: ChooseServiceTypeProps) => {
  const { serviceList } = useAppSelector((state) => state.commonData);
  const [selectedService, setSelectedService] = useState<ServiceDetails[]>([]);

  useEffect(() => {
    selectedServiceList([...selectedService]);
  }, []);

  const checkIsSelected = (serviceId: number) => {
    const findIndex = selectedService.findIndex(
      (cat) => cat.serviceId === serviceId
    );
    if (findIndex >= 0) return true;
    else return false;
  };

  const selectServiceDetails =(category:ServiceDetails)=>{
    const list: ServiceDetails[] = [...selectedService];
    if (multiselect) {
      if (list.length === 0) {
        list.push(category);
      } else {
        const findIndex = list.findIndex(
          (cat) => cat.serviceId === category.serviceId
        );
        if (findIndex >= 0) list.splice(findIndex, 1);
        else list.push(category);
      }
      setSelectedService([...list]);
    } else {
      setSelectedService([category]);
    }
  }

  return (
    <View style={styles.container}>
      <Text10PXBold>{labels.chooseServiceType}</Text10PXBold>
      <View style={styles.serviceList}>
        <ScrollView horizontal>
          {serviceList &&
            serviceList.map((category, index) => {
              return (
                <View style={styles.serviceViewContainer} key={index}>
                  <TouchableOpacity
                    style={[
                      styles.serviceView,
                      checkIsSelected(category.serviceId)
                        ? styles.selectedServiceView
                        : {},
                    ]}
                    onPress={() => {
                        selectServiceDetails(category)
                    }}
                  ></TouchableOpacity>
                  <Text10PXBold style={{ color: colors.disableTextColor }}>
                    {category.serviceName}
                  </Text10PXBold>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ChooseServiceType;

const styles = StyleSheet.create({
  container: {},
  serviceList: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  serviceViewContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  serviceView: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: colors.lightGrey,
  },
  selectedServiceView: {
    borderWidth: 2,
    borderColor: colors.themeColor,
  },
});
