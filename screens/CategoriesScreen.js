import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultHeaderButton from "../components/HeaderButton";

const CategoryScreen = props => {
  const renderItems = items => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ ...styles.categoryBox, backgroundColor: items.item.color }}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeal",
            params: {
              categoryId: items.item.id,
              categoryTitle: items.item.title
            }
          });
        }}
      >
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {items.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderItems} />
    </View>
  );
};

CategoryScreen.navigationOptions = navData => {
  return {
    headerTitle: "Categories",
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

export default CategoryScreen;

const styles = StyleSheet.create({
  categoryBox: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 12,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 4
  },
  title: {
    fontFamily: "default-font-bold",
    fontSize: 17,
    textTransform: "uppercase"
  }
});
