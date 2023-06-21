import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddCategoryModal from "../modals/AddCategoryModal";
import EditCategoryModal from "../modals/EditCategoryModal";
import { CategoryStackParamList } from "../types";
import CategoryScreen from "./screens/CategoryScreen";

const Stack = createNativeStackNavigator<CategoryStackParamList>();

const modal: NativeStackNavigationOptions = { presentation: "transparentModal" };

const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CategoriesList" component={CategoryScreen} />
      <Stack.Screen name="AddCategory" component={AddCategoryModal} options={modal} />
      <Stack.Screen name="EditCategory" component={EditCategoryModal} options={modal} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
