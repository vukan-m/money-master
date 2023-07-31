import { ObjectId } from "bson";
import React, { useCallback, useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { deleteIncomeExpense } from "../MMKVStorage";
import { CURRENCY, MMKV_OBJECTS } from "../constants";
import {
  alignCenter,
  balanceContainer,
  basicRoundedBorder,
  colors,
  columnHeader,
  descriptionStyle,
  expenseDataText,
  flex,
  halfMarginRight,
  incomeDataText,
  row,
  rowContainer,
  singleMarginBottom,
  singlePaddingLeft,
  spaceBetween,
  tableHeader,
  typography,
} from "../styles";
import { CategoryType, IncomeExpenseType } from "../types";

const IncomeExpenseItem = ({ id }: { id: ObjectId }) => {
  const [incomeExpense] = useMMKVObject<IncomeExpenseType>(MMKV_OBJECTS.incomeExpense(id));
  const [category] = useMMKVObject<CategoryType>(MMKV_OBJECTS.category(incomeExpense?.category as ObjectId));
  const prefix = useMemo(() => (incomeExpense?.type === "income" ? "+" : "-"), [incomeExpense?.type]);
  const amount = useMemo(() => Number(incomeExpense?.amount).toFixed(2), [incomeExpense?.amount]);

  const handlePress = useCallback(() => {
    deleteIncomeExpense(id);
  }, [id]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[rowContainer, spaceBetween, alignCenter, singleMarginBottom, basicRoundedBorder]}
    >
      <View style={[singlePaddingLeft, flex, row, alignCenter]}>
        {category?.icon && (
          <Icon
            style={[halfMarginRight]}
            name={category?.icon ?? ""}
            size={24}
            color={incomeExpense?.type === "income" ? colors.green : colors.red}
          />
        )}
        <View>
          <Text style={[incomeExpense?.type === "income" ? incomeDataText : expenseDataText, { textAlign: "left" }]}>
            {category?.name}
          </Text>
          {incomeExpense?.description ? (
            <Text numberOfLines={1} ellipsizeMode="tail" style={[descriptionStyle]}>
              {incomeExpense?.description}
            </Text>
          ) : null}
        </View>
      </View>
      <View style={[flex]}>
        <Text style={[incomeExpense?.type === "income" ? incomeDataText : expenseDataText]}>
          {prefix}
          {amount} {CURRENCY}
        </Text>
        <Text
          style={[incomeExpense?.type === "income" ? incomeDataText : expenseDataText, { fontSize: typography.sm }]}
        >
          {incomeExpense?.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const IncomeExpense = () => {
  const [data] = useMMKVObject<ObjectId[]>(MMKV_OBJECTS.incomeExpenses);
  const limitedData = data?.slice(0, 100);
  const renderItem = useCallback(({ item }) => <IncomeExpenseItem id={item} />, []);

  return (
    <View style={[balanceContainer, flex]}>
      <View style={tableHeader}>
        <Text style={columnHeader}>Category</Text>
        <Text style={columnHeader}>Amount</Text>
      </View>

      <FlatList
        data={limitedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `INCOME_EXPENSE_ITEM_${item}_${index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeExpense;
