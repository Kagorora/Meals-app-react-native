/** @format */

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavorityScreen from "../screens/FavorityScreen";
import FilterScreen from "../screens/FilterScreen";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Colors } from "../constants/constants";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

const navOptions = {
  headerTintColor: Platform.OS === "android" ? "whitesmoke" : "teal",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "teal" : ""
  },
  headerTitleStyle: {
    textTransform: "uppercase",
    fontFamily: "default-font-bold",
    textAlign: "center"
  },
  // headerBackTitleStyle: {
  //   fontFamily: "default-font-bold"
  // },
  headerBackTitleVisible: false
};

const MealNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeal: {
      screen: CategoryMealScreen
    },
    MealDetails: MealDetailScreen
  },

  {
    defaultNavigationOptions: navOptions
  }
);

const FavorityMealNavigator = createStackNavigator(
  {
    Favorities: FavorityScreen,
    MealDetails: MealDetailScreen
  },
  {
    defaultNavigationOptions: navOptions
  }
);

const BottomTab = createBottomTabNavigator(
  {
    Meal: {
      screen: MealNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={24}
              color={
                tabInfo.focused
                  ? Platform.OS === "ios"
                    ? "teal"
                    : "white"
                  : "grey"
              }
            />
          );
        }
      }
    },
    Favority: {
      screen: FavorityMealNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-star"
              size={24}
              color={
                tabInfo.focused
                  ? Platform.OS === "ios"
                    ? "teal"
                    : "white"
                  : "grey"
              }
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? Colors.primary : "white",
      activeBackgroundColor: Platform.OS === "android" ? Colors.primary : "",
      labelStyle: {
        fontFamily: "default-font-bold",
        fontSize: 12
      }
    }
  }
);

const FilterNavigation = createStackNavigator(
  {
    Filters: FilterScreen
  },
  {
    defaultNavigationOptions: navOptions
  }
);

const MainNavigation = createDrawerNavigator(
  {
    Home: {
      screen: BottomTab,
      navigationOptions: {
        drawerIcon: drawerInfo => {
          return (
            <Ionicons
              name="ios-home"
              size={20}
              color={drawerInfo.focused ? Colors.primary : Colors.secondary}
            />
          );
        }
      }
    },
    Filters: {
      screen: FilterNavigation,
      navigationOptions: {
        drawerIcon: drawerInfo => {
          return (
            <Ionicons
              name="ios-funnel"
              size={20}
              color={drawerInfo.focused ? Colors.primary : Colors.secondary}
            />
          );
        }
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
      activeTab: Colors.primary,
      labelStyle: {
        fontFamily: "default-font-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigation);
