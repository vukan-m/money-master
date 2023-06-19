import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddCategoryModal from "../modals/AddCategoryModal";
import AddIncomeExpenseModal from "../modals/AddIncomeExpenseModal";
import CategoriesModal from "../modals/CategoriesModal";
import { MainStackParamList } from "../types";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator<MainStackParamList>();

const modal: NativeStackNavigationOptions = { presentation: "transparentModal" };

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddIncomeExpense" component={AddIncomeExpenseModal} options={modal} />
      <Stack.Screen name="Categories" component={CategoriesModal} options={modal} />
      <Stack.Screen name="AddCategory" component={AddCategoryModal} options={modal} />
    </Stack.Navigator>
  );
};

export default MainStack;
