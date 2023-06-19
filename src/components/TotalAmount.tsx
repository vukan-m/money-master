import React, { useState } from "react";
import { Text, View } from "react-native";
import { useMMKV, useMMKVListener } from "react-native-mmkv";
import { getTotalAmount } from "../MMKVStorage";
import { CURRENCY } from "../constants";
import { balanceContainer, balanceText } from "../styles";

const TotalAmount = () => {
  const [totalAmount, setTotalAmount] = useState<number>(getTotalAmount());
  const storage = useMMKV();

  useMMKVListener(changedKey => {
    if (changedKey === "incomeExpense") {
      setTotalAmount(getTotalAmount());
    }
  }, storage);

  return (
    <View style={[balanceContainer, { marginBottom: 0 }]}>
      <Text style={balanceText}>Current Balance:</Text>
      <Text style={balanceText}>{`${totalAmount} ${CURRENCY}`}</Text>
    </View>
  );
};

export default TotalAmount;
