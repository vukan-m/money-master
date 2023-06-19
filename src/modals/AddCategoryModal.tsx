import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ObjectId } from "bson";
import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { MMKV_OBJECTS } from "../constants";
import { blueButton, buttonText, colors, textInput } from "../styles";
import { CategoryType, MainStackParamList } from "../types";
import Modal from "./Modal";

const AddCategoryModal = (props: NativeStackScreenProps<MainStackParamList, "AddCategory">) => {
  const { navigation } = props;
  const [value, setValue] = useState<string>("");
  const [categories, setCategories] = useMMKVObject<CategoryType[]>(MMKV_OBJECTS.categories);

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleAdd = useCallback(() => {
    const sortedCategories = [...(categories ?? []), { id: new ObjectId(), name: value }];
    setCategories(sortedCategories);
    navigation.goBack();
  }, [categories, setCategories, value, navigation]);

  return (
    <Modal title="AddCategoryModal">
      <TextInput
        placeholder="Category"
        value={value}
        onChange={handleOnChange}
        style={[textInput]}
        placeholderTextColor={colors.grayLowOpacity}
      />
      <TouchableOpacity onPress={handleAdd} style={[blueButton, { alignSelf: "center" }]}>
        <Text style={[buttonText]}>Add</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddCategoryModal;
