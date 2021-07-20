import { useDispatch, useSelector } from "react-redux";

import CategoryGridItem from "../Components/CategoryGridItem";
import { FlatList } from "react-native";
import React from "react";
import { selectCategory } from "../Store/Actions/Category.Action";

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const highCategory = useSelector((state) => state.categories.list);
  
    const handleSelected = (item) => {
      dispatch(selectCategory(item.id));
      navigation.navigate({ name: item.name });
    };
    const renderItem = ({ item }) => (
      <CategoryGridItem item={item} onSelected={handleSelected} />
    );
    return (
      <FlatList
        data={highCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    );
};

export default HomeScreen;
