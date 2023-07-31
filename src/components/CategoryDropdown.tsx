import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { MMKV_OBJECTS } from "../constants";
import { categoryDropdownStyle, colors } from "../styles";
import { CategoryDropdownProps, CategoryType, MainStackParamList } from "../types";

const CategoryDropdown = (props: CategoryDropdownProps) => {
  const { setValue, name, value } = props;
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList, "CategoriesModal">>();
  const [category] = useMMKVObject<CategoryType>(MMKV_OBJECTS.category(value));

  const handlePress = useCallback(() => {
    navigation.navigate("CategoriesModal", {
      setValue,
      name,
    });
  }, [navigation, setValue, name]);

  return (
    <TouchableOpacity onPress={handlePress} style={[categoryDropdownStyle]}>
      <Text style={[{ color: colors.darkWhite }]}>{category?.name || "Select category"}</Text>
    </TouchableOpacity>
  );
};

export default CategoryDropdown;
