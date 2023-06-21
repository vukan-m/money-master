import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { MMKV_OBJECTS } from "../constants";
import { alignSelfCenter, buttonText, colors, greenButton, redButton, row, spaceBetween, textInput } from "../styles";
import { CategoryStackParamList, CategoryType, IncomeExpenseType } from "../types";
import Modal from "./Modal";

const EditCategoryModal = (props: NativeStackScreenProps<CategoryStackParamList, "EditCategory">) => {
  const { navigation, route } = props;
  const { id, name } = route.params;
  const [value, setValue] = useState<string>(name);
  const [categories, setCategories] = useMMKVObject<CategoryType[]>(MMKV_OBJECTS.categories);
  const [incomeExpense, setIncomeExpense] = useMMKVObject<IncomeExpenseType[]>(MMKV_OBJECTS.incomeExpense);

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const deleteCategory = useCallback(() => {
    const category = categories?.find(cat => cat?.id === id);
    const transformedData = incomeExpense?.filter(item => item?.category !== category?.name);
    setIncomeExpense(transformedData);
  }, []);

  const handleSave = useCallback(() => {
    const editedCategories = categories?.map(cat => {
      if (cat.id === id) {
        return { ...cat, name: value };
      }
      return cat;
    });
    setCategories(editedCategories);
    navigation.goBack();
  }, [categories, value, navigation, id]);

  const handleDelete = useCallback(() => {
    const deletedCategory = categories?.filter(cat => cat?.id !== id);
    setCategories(deletedCategory);
    deleteCategory();
    navigation.goBack();
  }, [categories, navigation, id]);

  return (
    <Modal title="EditCategoryModal">
      <TextInput
        placeholder="Category"
        value={value}
        onChange={handleOnChange}
        style={[textInput]}
        placeholderTextColor={colors.grayLowOpacity}
      />
      <View style={[row, spaceBetween]}>
        <TouchableOpacity onPress={handleSave} style={[greenButton, alignSelfCenter]}>
          <Text style={[buttonText]}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={[redButton, alignSelfCenter]}>
          <Text style={[buttonText]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default EditCategoryModal;
