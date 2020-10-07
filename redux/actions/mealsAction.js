/** @format */

import { TOGGLEFAVORITYMEAL, FILTERMEAL } from "../../constants/constants";

export const toggleFavority = mealId => {
  return { type: TOGGLEFAVORITYMEAL, mealId };
};

export const filterMeals = filterSettings => {
  return { type: FILTERMEAL, filters: filterSettings };
};
