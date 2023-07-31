import { ObjectId } from "bson";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { storage } from "../MMKVStorage";
import CategoryDropdown from "../components/CategoryDropdown";
import { FORM_FIELDS, MMKV_OBJECTS } from "../constants";
import Form from "../form/Form";
import Input from "../form/Input";
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
  const [value, setValue] = useState<string | undefined>();
  const incomeExpenseId = new ObjectId();
  const [incomeExpenses, setIncomeExpenses] = useMMKVObject<ObjectId[]>(MMKV_OBJECTS.incomeExpenses);

  const methods = useForm({
    defaultValues: {
      [FORM_FIELDS.categories.name]: "",
      [FORM_FIELDS.description.name]: "",
    },
  });

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleAdd = useCallback(() => {
    const category = methods.getValues(FORM_FIELDS.categories.name) as unknown as ObjectId;
    if (!value || !category) {
      return;
    }
    if (type === "income") {
      storage.set(
        MMKV_OBJECTS.incomeExpense(incomeExpenseId),
        JSON.stringify({
          id: incomeExpenseId,
          amount: value,
          category,
          type: "income",
          date: new Date().toLocaleDateString("sr"),
          description: methods.getValues(FORM_FIELDS.description.name),
        }),
      );
    } else {
      storage.set(
        MMKV_OBJECTS.incomeExpense(incomeExpenseId),
        JSON.stringify({
          id: incomeExpenseId,
          amount: value,
          category,
          type: "expense",
          date: new Date().toLocaleDateString("sr"),
          description: methods.getValues(FORM_FIELDS.description.name),
        }),
      );
    }
    setIncomeExpenses([incomeExpenseId, ...(incomeExpenses ?? [])]);
    navigation.goBack();
  }, [type, value, incomeExpenseId, incomeExpenses, methods]);

  return (
    <Modal title="AddIncomeExpenseModal">
      <View>
        <Form {...methods} containerStyle={[singleAndAHalfMarginBottom]}>
          <Text style={[subtitleStyle]}>Category:</Text>
          <CategoryDropdown name={FORM_FIELDS.categories.name} />
          <Text style={[subtitleStyle]}>Description:</Text>
          <Input name={FORM_FIELDS.description.name} style={[textInput]} placeholderTextColor={colors.grayLowOpacity} />
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
