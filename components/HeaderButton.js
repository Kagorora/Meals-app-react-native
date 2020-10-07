import React from "react";
import { Colors } from "../constants/constants";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const DefaultHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Platform.OS === "ios" ? Colors.primary : "white"}
    />
  );
};

export default DefaultHeaderButton;
