import { ObjectId } from "bson";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import CategoryDropdown from "../components/CategoryDropdown";
import { FORM_FIELDS, MMKV_OBJECTS } from "../constants";
import Form from "../form/Form";
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
import { IncomeExpenseType } from "../types";
import Modal from "./Modal";

const AddIncomeExpenseModal = ({ route, navigation }) => {
  const { type } = route?.params;
  const [value, setValue] = useState<string | undefined>();
  const [data, setData] = useMMKVObject<IncomeExpenseType[]>(MMKV_OBJECTS.incomeExpense);

  const methods = useForm({ defaultValues: { [FORM_FIELDS.categories.name]: "" } });

  const handleOnChange = useCallback(({ nativeEvent }) => {
    setValue(nativeEvent.text);
  }, []);

  const handleAdd = useCallback(() => {
    if (!value) {
      return;
    }
    if (type === "income") {
      setData([
        {
          id: new ObjectId(),
          amount: value,
          category: methods.getValues(FORM_FIELDS.categories.name),
          type: "income",
          date: new Date(),
        },
        ...(data ?? []),
      ]);
    } else {
      setData([
        {
          id: new ObjectId(),
          amount: value,
          category: methods.getValues(FORM_FIELDS.categories.name),
          type: "expense",
          date: new Date(),
        },
        ...(data ?? []),
      ]);
    }
    navigation.goBack();
  }, [type, value, data, methods]);

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
