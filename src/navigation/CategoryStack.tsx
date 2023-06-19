import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddCategoryModal from "../modals/AddCategoryModal";
import { MainStackParamList } from "../types";
import CategoryScreen from "./screens/CategoryScreen";

const Stack = createNativeStackNavigator<MainStackParamList>();

const modal: NativeStackNavigationOptions = { presentation: "transparentModal" };

const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={CategoryScreen} />
      <Stack.Screen name="AddCategory" component={AddCategoryModal} options={modal} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
