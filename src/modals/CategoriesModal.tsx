import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ObjectId } from "bson";
import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { getCategory } from "../MMKVStorage";
import { MMKV_OBJECTS } from "../constants";
import {
  blueButton,
  buttonText,
  categoriesFlatListStyle,
  categoriesItemStyle,
  colors,
  halfMarginRight,
  halfPadding,
  singleMarginTop,
} from "../styles";
import { MainStackParamList } from "../types";
import Modal from "./Modal";

const CategoriesModal = (props: NativeStackScreenProps<MainStackParamList, "CategoriesModal">) => {
  const { setValue, name } = props.route.params;
  const [categories] = useMMKVObject<ObjectId[]>(MMKV_OBJECTS.categories);

  const renderItem = useCallback(
    ({ item, index }) => {
      const category = getCategory(item);
      const handlePress = () => {
        setValue?.(name, category?.id);
        props?.navigation?.goBack();
      };

      return (
        <TouchableOpacity
          style={[categoriesItemStyle, index === (categories?.length ?? 0) - 1 && { marginBottom: 0 }]}
          onPress={handlePress}
        >
          <Text style={[halfMarginRight]}>{"\u2022"}</Text>
          <Text style={[{ color: colors.darkWhite }]}>{category?.name}</Text>
        </TouchableOpacity>
      );
    },
    [name, categories],
  );

  const handlePress = useCallback(() => {
    props?.navigation?.navigate("AddCategory");
  }, []);

  return (
    <Modal title="CategoriesModal">
      <FlatList
        renderItem={renderItem}
        data={categories}
        keyExtractor={(item, index) => `CATEGORY_${item}_${index}`}
        style={[categoriesFlatListStyle]}
        contentContainerStyle={[halfPadding]}
      />
      <TouchableOpacity style={[singleMarginTop, blueButton]} onPress={handlePress}>
        <Text style={[buttonText]}>Add Category</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default CategoriesModal;
