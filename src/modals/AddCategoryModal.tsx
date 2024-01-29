import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import Realm from "realm";
import { Schema, useRealm } from "../storage/src";
import { alignSelfCenter, blueButton, buttonText, colors, textInput } from "../styles";
import { MainStackParamList } from "../types";
import Modal from "./Modal";

const AddCategoryModal = (props: NativeStackScreenProps<MainStackParamList, "AddCategory">) => {
  const { navigation } = props;
  const realm = useRealm();
  const [value, setValue] = useState<string>("");

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleAdd = useCallback(() => {
    realm.write(() => {
      realm.create(Schema.Category, { _id: new Realm.BSON.ObjectId(), name: value });
    });
    navigation.goBack();
  }, [value, navigation]);

  return (
    <Modal title="AddCategoryModal">
      <TextInput
        placeholder="Category"
        value={value}
        onChange={handleOnChange}
        style={[textInput]}
        placeholderTextColor={colors.grayLowOpacity}
      />
      <TouchableOpacity onPress={handleAdd} style={[blueButton, alignSelfCenter]}>
        <Text style={[buttonText]}>Add</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddCategoryModal;
