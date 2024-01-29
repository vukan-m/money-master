import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Realm from "realm";
import CategoryDropdown from "../components/CategoryDropdown";
import { FORM_FIELDS } from "../constants";
import Form from "../form/Form";
import { Schema, useRealm } from "../storage/src";
import {
  alignSelfCenter,
  buttonText,
  colors,
  greenButton,
  redButton,
  singleAndAHalfMarginBottom,
  subtitleStyle,
  textInput,
} from "../styles";
import Modal from "./Modal";

const AddIncomeExpenseModal = ({ route, navigation }) => {
  const { type } = route?.params;
  const realm = useRealm();
  const [value, setValue] = useState<string | undefined>();

  const methods = useForm({ defaultValues: { [FORM_FIELDS.categories.name]: null } });

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleAdd = useCallback(() => {
    if (!value) {
      return;
    }
    realm.write(() => {
      const category = realm.objectForPrimaryKey(Schema.Category, methods.getValues(FORM_FIELDS.categories.name) ?? "");
      if (category) {
        realm.create(Schema.IncomeExpense, {
          _id: new Realm.BSON.ObjectId(),
          amount: Number(value),
          category,
          type,
          date: new Date().toLocaleDateString("sr"),
        });
      }
    });
    navigation.goBack();
  }, [type, value, methods]);

  return (
    <Modal title="AddIncomeExpenseModal">
      <View>
        <Form {...methods} containerStyle={[singleAndAHalfMarginBottom]}>
          <Text style={[subtitleStyle]}>Category:</Text>
          <CategoryDropdown name={FORM_FIELDS.categories.name} />
        </Form>
        <View>
          <Text style={[subtitleStyle]}>Amount:</Text>
          <TextInput
            inputMode="numeric"
            keyboardType="number-pad"
            placeholder="1000"
            value={value}
            onChange={handleOnChange}
            style={[textInput]}
            placeholderTextColor={colors.grayLowOpacity}
          />
        </View>
        <TouchableOpacity onPress={handleAdd} style={[type === "income" ? greenButton : redButton, alignSelfCenter]}>
          <Text style={[buttonText]}>Add</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AddIncomeExpenseModal;
