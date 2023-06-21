import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { MMKV_OBJECTS } from "../constants";
import { categoriesContainer, categoriesItem, categoriesLabel } from "../styles";
import { CategoryStackParamList, CategoryType } from "../types";

const CategoryItem = ({ item }) => {
  const navigation = useNavigation<NativeStackNavigationProp<CategoryStackParamList>>();

  const handlePress = useCallback(() => {
    navigation.navigate("EditCategory", { id: item?.id, name: item?.name });
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={[categoriesItem]}>
      <Text style={[categoriesLabel]}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const [categories] = useMMKVObject<CategoryType[]>(MMKV_OBJECTS.categories);
  const sortedCategories = categories?.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const renderItem = useCallback(({ item }) => {
    return <CategoryItem item={item} />;
  }, []);

  return (
    <FlatList
      style={[categoriesContainer]}
      data={sortedCategories}
      renderItem={renderItem}
      keyExtractor={item => `CATEGORY_${item?.name}_${item?.id}`}
    />
  );
};

export default Categories;
