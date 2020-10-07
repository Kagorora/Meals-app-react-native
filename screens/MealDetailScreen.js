/** @format */

import React, { useCallback, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../constants/constants";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultHeaderButton from "../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavority } from "../redux/actions/mealsAction";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const meals = useSelector(state => state.meals.meals);
  const mealDetails = meals.find(meal => meal.id === mealId);
 
  const isFav = useSelector(state =>
    state.meals.favorityMeals.some(meal => meal.id === mealId)
  );

  const dispatch = useDispatch();

  const handleFavority = useCallback(() => {
    dispatch(toggleFavority(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ handleFavority: handleFavority });
  }, [handleFavority]);

  useEffect(() => {
    props.navigation.setParams({ isFavority: isFav });
  }, [isFav]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <Text style={{ ...styles.title, ...styles.title_sec }}>INGREDIENTS</Text>
      {mealDetails.ingredients.map(item => (
        <View key={mealDetails.ingredients.indexOf(item)}>
          <Text style={styles.text}>
            {mealDetails.ingredients.indexOf(item) + 1}.{"   "}
            {item}
          </Text>
        </View>
      ))}
      <View>
        <Text style={{ ...styles.title, ...styles.title_sec }}>STEPS</Text>
        {mealDetails.steps.map(step => (
          <View key={step}>
            <Text numberOfLines={2} style={styles.text}>
              - {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navData => {
  const mealTitle = navData.navigation.getParam("mealTitle");
  const handleFavority = navData.navigation.getParam("handleFavority");
  const isFavority = navData.navigation.getParam("isFavority");

  return {
    headerTitle: mealTitle,
    headerTitleStyle: {
      fontSize: 15
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={DefaultHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavority ? "ios-star" : "ios-star-outline"}
          onPress={handleFavority}
        />
      </HeaderButtons>
    )
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 15
  },
  title: {
    color: Colors.secondary,
    fontFamily: "default-font-bold",
    fontSize: 20,
    marginVertical: 5,
    textTransform: "uppercase",
    textAlign: "center"
  },
  title_sec: {
    textAlign: "left",
    marginTop: 30
  },
  text: {
    margin: 5,
    fontFamily: "default-font",
    fontSize: 15,
    borderWidth: 1,
    padding: 5,
    borderColor: "whitesmoke"
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12
  }
});
