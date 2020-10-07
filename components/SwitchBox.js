/** @format */

import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { Colors } from "../constants/constants";

const SwitchBox = props => {
  const { title, status, onChange } = props;
  return (
    <View style={styles.filterBox}>
      <Text>{title}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor="whitesmoke"
        value={status}
        onValueChange={onChange}
      />
    </View>
  );
};

export default SwitchBox;

const styles = StyleSheet.create({
  title: {
    margin: 10,
    fontFamily: "default-font-bold",
    fontSize: 18,
    color: Colors.secondary,
    textTransform: "uppercase"
  },
  filterBox: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10
  }
});
