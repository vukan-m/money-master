import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { deleteCategory } from "../MMKVStorage";
import IconList from "../components/IconList";
import { MMKV_OBJECTS } from "../constants";
import { alignSelfCenter, buttonText, colors, greenButton, redButton, row, spaceBetween, textInput } from "../styles";
import { CategoryStackParamList, CategoryType } from "../types";
import Modal from "./Modal";

const EditCategoryModal = (props: NativeStackScreenProps<CategoryStackParamList, "EditCategory">) => {
  const { navigation, route } = props;
  const { id, name } = route.params;
  const [value, setValue] = useState<string>(name);
  const [category, setCategory] = useMMKVObject<CategoryType>(MMKV_OBJECTS.category(id));
  const [iconName, setIconName] = useState(category?.icon ?? "");

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleSave = useCallback(() => {
    if (value !== "") {
      setCategory({ ...(category as CategoryType), name: value, icon: iconName });
      navigation.goBack();
    }
  }, [category, iconName, value, navigation]);

  const handleDelete = useCallback(() => {
    deleteCategory(id);
    navigation.goBack();
  }, [navigation, id]);

  return (
    <Modal title="EditCategoryModal">
      <TextInput
        placeholder="Category"
        value={value}
        onChange={handleOnChange}
        style={[textInput]}
        placeholderTextColor={colors.grayLowOpacity}
      />
      <IconList iconName={iconName} setIconName={setIconName} />
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
