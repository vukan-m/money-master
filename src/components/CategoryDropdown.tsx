import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import { CategoryDropdownProps, MainStackParamList } from "../types";
import { categoryDropdownStyle, colors } from "../styles";
import { Schema, useRealm } from "../storage/src";

const CategoryDropdown = (props: CategoryDropdownProps) => {
  const { setValue, name, value } = props;
  const realm = useRealm();
  const category = value ? realm.objectForPrimaryKey(Schema.Category, value) : {};
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList, "CategoriesModal">>();

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
