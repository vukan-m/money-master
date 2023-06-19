import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Categories from "../../components/Categories";
import { buttonText, container, greenButton, incomeExpenseContainer, titleStyle } from "../../styles";
import { MainStackParamList } from "../../types";

const CategoryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const handleAddCategory = () => {
    navigation.navigate("AddCategory");
  };

  return (
    <View style={container}>
      <Text style={titleStyle}>Money Master App</Text>

      <View style={[{ flex: 1, justifyContent: "space-between" }]}>
        <Categories />

        <View style={[incomeExpenseContainer]}>
          <TouchableOpacity onPress={handleAddCategory} style={greenButton}>
            <Text style={buttonText}>Add Category</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CategoryScreen;
