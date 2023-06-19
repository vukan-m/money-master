import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { MMKV_OBJECTS } from "../constants";
import { categoriesContainer, categoriesItem, categoriesLabel, fullWidth, singleMarginRight, spacing } from "../styles";
import { CategoryStackParamList, CategoryType } from "../types";

const ITEM_MAX_WIDTH = (fullWidth() - spacing.double * 2 - spacing.single * 2) / 2 - spacing.half;

const CategoryItem = ({ item, index }) => {
  const navigation = useNavigation<NativeStackNavigationProp<CategoryStackParamList>>();

  const handlePress = useCallback(() => {
    navigation.navigate("EditCategory", { id: item?.id, name: item?.name });
  }, []);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[categoriesItem, index % 2 === 0 && singleMarginRight, { width: ITEM_MAX_WIDTH }]}
    >
      <Text style={[categoriesLabel]}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const [categories] = useMMKVObject<CategoryType[]>(MMKV_OBJECTS.categories);

  const renderItem = useCallback(({ item, index }) => {
    return <CategoryItem item={item} index={index} />;
  }, []);

  return (
    <FlatList
      style={[categoriesContainer]}
      data={categories}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => `CATEGORY_${item?.name}_${item?.id}`}
    />
  );
};

export default Categories;
