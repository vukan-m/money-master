import React, { useCallback, useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";
import { CURRENCY, MMKV_OBJECTS } from "../constants";
import {
  alignCenter,
  balanceContainer,
  columnHeader,
  expenseDataText,
  flex,
  incomeDataText,
  rowContainer,
  tableHeader,
  typography,
} from "../styles";
import { IncomeExpenseType } from "../types";

const IncomeExpenseItem = ({
  item,
  data,
  setData,
}: {
  item: IncomeExpenseType;
  data: IncomeExpenseType[] | undefined;
  setData: (value: IncomeExpenseType[] | undefined) => void;
}) => {
  const prefix = useMemo(() => (item?.type === "income" ? "+" : "-"), [item?.type]);
  const amount = useMemo(() => Number(item?.amount).toFixed(2), [item?.amount]);

  const handlePress = useCallback(() => {
    setData(data?.filter(dataItem => dataItem !== item));
  }, [item, data, setData]);

  return (
    <TouchableOpacity onPress={handlePress} style={[rowContainer, alignCenter]}>
      <Text style={[flex, item?.type === "income" ? incomeDataText : expenseDataText]}>{item?.category}</Text>
      <View style={[flex]}>
        <Text style={[item?.type === "income" ? incomeDataText : expenseDataText]}>
          {prefix}
          {amount} {CURRENCY}
        </Text>
        <Text style={[item?.type === "income" ? incomeDataText : expenseDataText, { fontSize: typography.sm }]}>
          {item?.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const IncomeExpense = () => {
  const [data, setData] = useMMKVObject<IncomeExpenseType[]>(MMKV_OBJECTS.incomeExpense);
  const limitedData = data?.slice(0, 100);
  const renderItem = useCallback(
    ({ item }) => <IncomeExpenseItem item={item} data={data} setData={setData} />,
    [data, setData],
  );

  return (
    <View style={[balanceContainer, flex]}>
      <View style={tableHeader}>
        <Text style={columnHeader}>Category</Text>
        <Text style={columnHeader}>Amount</Text>
      </View>

      <FlatList
        data={limitedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `INCOME_EXPENSE_ITEM_${item?.amount}_${item?.category}_${item?.type}_${index}`}
      />
    </View>
  );
};

export default IncomeExpense;
