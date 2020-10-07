import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const MealItem = props => {
  const { title, duration, complexity, affordability, image } = props;
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.mealBox}>
        <ImageBackground style={styles.mealImage} source={{ uri: image }}>
          <View style={styles.mealTitle}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.mealInfo}>
            <Text style={styles.text}>{duration}m</Text>
            <Text style={styles.text}>{complexity}</Text>
            <Text style={styles.text}>{affordability}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealBox: {
    width: "95%",
    height: 200,
    margin: 10,
    borderRadius: 12,
    overflow: "hidden"
  },
  mealImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealTitle: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  mealInfo: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 3
  },
  title: {
    fontSize: 15,
    color: "white",
    fontFamily: "default-font-bold",
    padding: 3
  },
  text: {
    fontSize: 15,
    fontFamily: "default-font-bold",
    padding: 3
  }
});
