import React, { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { MMKV_OBJECTS } from "../constants";
import { CategoryType } from "../types";

const Categories = () => {
  const [categories] = useMMKVObject<CategoryType[]>(MMKV_OBJECTS.categories);

  const renderItem = useCallback(
    ({ item }) => (
      <View>
        <Text>{item?.name}</Text>
      </View>
    ),
    [],
  );

  return (
    <FlatList data={categories} renderItem={renderItem} keyExtractor={item => `CATEGORY_${item?.name}_${item?.id}`} />
  );
};

export default Categories;
