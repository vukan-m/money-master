import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Schema, useQuery } from "../storage/src";
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
  const categories = useQuery(Schema.Category).sorted("name");

  const renderItem = useCallback(
    ({ item, index }) => {
      const handlePress = () => {
        setValue?.(name, item?._id);
        props?.navigation?.goBack();
      };

      return (
        <TouchableOpacity
          style={[categoriesItemStyle, index === (categories?.length ?? 0) - 1 && { marginBottom: 0 }]}
          onPress={handlePress}
        >
          <Text style={[halfMarginRight]}>{"\u2022"}</Text>
          <Text style={[{ color: colors.darkWhite }]}>{item?.name}</Text>
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
        keyExtractor={(item, index) => `CATEGORY_${item?._id}_${index}`}
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
