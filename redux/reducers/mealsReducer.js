/** @format */

import { initialState } from "../initialState";
import {
  FILTERMEAL,
  TOGGLEFAVORITYMEAL,
  ALLMEALS
} from "../../constants/constants";

export const mealsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ALLMEALS:
      return { ...state.meals };

    case TOGGLEFAVORITYMEAL:
      const isFavority = state.favorityMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (isFavority >= 0) {
        const updatedFavorities = [...state.favorityMeals];
        updatedFavorities.splice(isFavority, 1);

        return { ...state, favorityMeals: updatedFavorities };
      } else {
        const selectedMeal = state.meals.filter(
          meal => meal.id === action.mealId
        );
        return {
          ...state,
          favorityMeals: state.favorityMeals.concat(selectedMeal)
        };
      }

    case FILTERMEAL:
      const { filters } = action;
      const filteredMeals = state.meals.filter(meal => {
        if (filters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (filters.isVegan && !meal.isVegan) {
          return false;
        }
        if (filters.isVegeterian && !meal.isVegeterian) {
          return false;
        }
        if (filters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };

    default:
      return state;
  }
};
