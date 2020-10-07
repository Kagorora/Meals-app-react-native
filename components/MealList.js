/** @format */

import React from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const MealList = props => {
  const { meals } = props;
  const favorityMeals = useSelector(state => state.meals.favorityMeals);
  
  const renderMeals = items => {
    const isFavority = favorityMeals.some(meal => meal.id === items.item.id);
    return (
      <MealItem
        title={items.item.title}
        duration={items.item.duration}
        complexity={items.item.complexity}
        affordability={items.item.affordability}
        image={items.item.imageUrl}
        onSelect={() => {
          props.navigation.push("MealDetails", {
            mealId: items.item.id,
            mealTitle: items.item.title,
            isFavority: isFavority
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={meals}
      renderItem={renderMeals}
    />
  );
};
export default MealList;
