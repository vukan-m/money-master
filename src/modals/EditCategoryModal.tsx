import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Schema, useObject, useRealm } from "../storage/src";
import { alignSelfCenter, buttonText, colors, greenButton, redButton, row, spaceBetween, textInput } from "../styles";
import { CategoryStackParamList } from "../types";
import Modal from "./Modal";

const EditCategoryModal = (props: NativeStackScreenProps<CategoryStackParamList, "EditCategory">) => {
  const { navigation, route } = props;
  const { _id, name } = route.params;
  const realm = useRealm();
  const [value, setValue] = useState<string>(name);
  const category = useObject(Schema.Categories, _id);

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleSave = useCallback(() => {
    if (category) {
      realm.write(() => {
        category.name = value;
      });
    }
    navigation.goBack();
  }, [category, value, navigation]);

  const handleDelete = useCallback(() => {
    realm.write(() => {
      realm.delete(realm.objects(Schema.Finances).filtered("category._id == $0", category?._id));
      realm.delete(category);
    });
    navigation.goBack();
  }, [category, navigation]);

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
