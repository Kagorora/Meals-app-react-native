import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultHeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/constants";

const FavorityScreen = props => {
  const favorityMeals = useSelector(state => state.meals.favorityMeals);
  if (favorityMeals.length !== 0) {
    return <MealList meals={favorityMeals} navigation={props.navigation} />;
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>No favority meals found!</Text>
    </View>
  );
};

FavorityScreen.navigationOptions = navData => {
  return {
    headerTitle: "Favority",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={DefaultHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavorityScreen;

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
