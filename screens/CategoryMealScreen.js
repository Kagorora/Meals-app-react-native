/** @format */

import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/constants";

const CategoryMealScreen = props => {
  const mealsList = useSelector(state =>
    state.meals.filteredMeals.filter(
      meal =>
        meal.categoryIds.indexOf(props.navigation.getParam("categoryId")) >= 0
    )
  );
  if (mealsList.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>No meals found! check your filters</Text>
      </View>
    );
  } else {
    return <MealList meals={mealsList} navigation={props.navigation} />;
  }
};

CategoryMealScreen.navigationOptions = props => {
  return {
    headerTitle: props.navigation.getParam("categoryTitle")
  };
};

export default CategoryMealScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontFamily: "default-font-bold",
    textAlign: "center",
    fontSize: 20,
    color: Colors.secondary
  }
});
