import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Schema, useQuery } from "../storage/src";
import { categoriesContainer, categoriesItem, categoriesLabel } from "../styles";
import { CategoriesType, CategoryStackParamList } from "../types";

const CategoryItem = ({ item }: { item: CategoriesType }) => {
  const navigation = useNavigation<NativeStackNavigationProp<CategoryStackParamList>>();

  const handlePress = useCallback(() => {
    navigation.navigate("EditCategory", { _id: item?._id, name: item?.name });
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={[categoriesItem]}>
      <Text style={[categoriesLabel]}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const categories = useQuery(Schema.Categories).sorted("name");

  const renderItem = useCallback(({ item }) => {
    return <CategoryItem item={item} />;
  }, []);

  return (
    <FlatList
      style={[categoriesContainer]}
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => `CATEGORY_${item?.name}_${item?._id}`}
    />
  );
};

export default Categories;
