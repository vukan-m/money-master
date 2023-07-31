import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ObjectId } from "bson";
import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { storage } from "../MMKVStorage";
import { MMKV_OBJECTS } from "../constants";
import { alignSelfCenter, blueButton, buttonText, colors, textInput } from "../styles";
import { MainStackParamList } from "../types";
import Modal from "./Modal";
import IconList from "../components/IconList";

const AddCategoryModal = (props: NativeStackScreenProps<MainStackParamList, "AddCategory">) => {
  const { navigation } = props;
  const [value, setValue] = useState<string>("");
  const [iconName, setIconName] = useState<string>("");
  const [categories, setCategories] = useMMKVObject<ObjectId[]>(MMKV_OBJECTS.categories);
  const categoryId = new ObjectId();

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleAdd = useCallback(() => {
    if (value) {
      setCategories([...(categories ?? []), categoryId]);
      storage.set(MMKV_OBJECTS.category(categoryId), JSON.stringify({ id: categoryId, name: value, icon: iconName }));
      navigation.goBack();
    }
  }, [categories, setCategories, value, iconName, categoryId, navigation]);

  return (
    <Modal title="AddCategoryModal">
      <TextInput
        placeholder="Category"
        value={value}
        onChange={handleOnChange}
        style={[textInput]}
        placeholderTextColor={colors.grayLowOpacity}
      />
      <IconList setIconName={setIconName} />
      <TouchableOpacity onPress={handleAdd} style={[blueButton, alignSelfCenter]}>
        <Text style={[buttonText]}>Add</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddCategoryModal;
