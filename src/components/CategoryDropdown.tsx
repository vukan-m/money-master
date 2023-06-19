import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";
import { CategoryDropdownProps, MainStackParamList } from "../types";
import { categoryDropdownStyle } from "../styles";

const CategoryDropdown = (props: CategoryDropdownProps) => {
  const { setValue, name, value } = props;
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList, "Categories">>();

  const handlePress = useCallback(() => {
    navigation.navigate("Categories", {
      setValue,
      name,
    });
  }, [navigation, setValue, name]);

  return (
    <TouchableOpacity onPress={handlePress} style={[categoryDropdownStyle]}>
      <Text>{value || "Select category"}</Text>
    </TouchableOpacity>
  );
};

export default CategoryDropdown;
