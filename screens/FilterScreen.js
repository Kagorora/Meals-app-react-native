/** @format */

import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultHeaderButton from "../components/HeaderButton";
import { Colors } from "../constants/constants";
import SwitchBox from "../components/SwitchBox";
import { useDispatch } from "react-redux";
import { filterMeals } from "../redux/actions/mealsAction";

const FilterScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(true);
  const [isVegeterian, setIsVegeterian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  const handleFilters = useCallback(() => {
    const filters = {
      isGlutenFree: isGlutenFree,
      isVegan: isVegan,
      isVegeterian: isVegeterian,
      isLactoseFree: isLactoseFree
    };
    dispatch(filterMeals(filters));
  }, [isGlutenFree, isVegan, isVegeterian, isLactoseFree]);

  useEffect(() => {
    props.navigation.setParams({ handleFilters: handleFilters });
  }, [handleFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filter & restrictions</Text>
      <View>
        <SwitchBox
          status={isGlutenFree}
          title="Gluten free"
          onChange={newStatus => setIsGlutenFree(newStatus)}
        />
        <SwitchBox
          status={isVegan}
          title="Vegan"
          onChange={newStatus => setIsVegan(newStatus)}
        />
        <SwitchBox
          status={isVegeterian}
          title="Vegeterian"
          onChange={newStatus => setIsVegeterian(newStatus)}
        />
        <SwitchBox
          status={isLactoseFree}
          title="Lactose free"
          onChange={newStatus => setIsLactoseFree(newStatus)}
        />
      </View>
    </View>
  );
};

FilterScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filters ",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={DefaultHeaderButton}>
        <Item
          title="SAVE"
          iconName="ios-save"
          onPress={navData.navigation.getParam("handleFilters")}
        />
      </HeaderButtons>
    )
  };
};
export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20
  },
  title: {
    margin: 10,
    fontFamily: "default-font-bold",
    fontSize: 18,
    color: Colors.secondary,
    textTransform: "uppercase"
  }
});
