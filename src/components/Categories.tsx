import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ObjectId } from "bson";
import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MMKV_OBJECTS } from "../constants";
import {
  categoriesContainer,
  categoriesItem,
  categoriesLabel,
  colors,
  singleMarginRight,
  singlePaddingBottom,
} from "../styles";
import { CategoryStackParamList, CategoryType } from "../types";

const CategoryItem = ({ id }: { id: ObjectId }) => {
  const [category] = useMMKVObject<CategoryType>(MMKV_OBJECTS.category(id));
  const navigation = useNavigation<NativeStackNavigationProp<CategoryStackParamList>>();

  const handlePress = useCallback(() => {
    if (category) {
      navigation.navigate("EditCategory", { id: category?.id, name: category?.name });
    }
  }, [category]);

  return (
    <TouchableOpacity onPress={handlePress} style={[categoriesItem]}>
      <Icon style={[singleMarginRight]} color={colors.white} size={24} name={category?.icon ?? "close"} />
      <Text style={[categoriesLabel]}>{category?.name}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const [categories] = useMMKVObject<CategoryType[]>(MMKV_OBJECTS.categories);

  const renderItem = useCallback(({ item }) => {
    return <CategoryItem id={item} />;
  }, []);

  return (
    <FlatList
      style={[categoriesContainer]}
      contentContainerStyle={[singlePaddingBottom]}
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => `CATEGORY_${item}_${index}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Categories;
