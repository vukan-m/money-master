import React, { useCallback } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CURRENCY } from "../constants";
import { Schema, useQuery, useRealm } from "../storage/src";
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
import { FinancesType } from "../types";

const FinanceItem = ({ item }: { item: FinancesType }) => {
  const realm = useRealm();
  const prefix = item?.type === "income" ? "+" : "-";
  const amount = Number(item?.amount).toFixed(2);

  const handlePress = useCallback(() => {
    realm.write(() => {
      realm.delete(item);
    });
  }, [item]);

  if (item) {
    return (
      <TouchableOpacity onPress={handlePress} style={[rowContainer, alignCenter]}>
        <Text style={[flex, item?.type === "income" ? incomeDataText : expenseDataText]}>{item?.category?.name}</Text>
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
  }
  return null;
};

const Finance = () => {
  const data = useQuery(Schema.Finances)?.slice(0, 100);

  const renderItem = useCallback(({ item }) => <FinanceItem item={item} />, []);

  return (
    <View style={[balanceContainer, flex]}>
      <View style={tableHeader}>
        <Text style={columnHeader}>Category</Text>
        <Text style={columnHeader}>Amount</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `FINANCE_ITEM_${item?.amount}_${item?.category}_${item?.type}_${index}`}
      />
    </View>
  );
};

export default Finance;
