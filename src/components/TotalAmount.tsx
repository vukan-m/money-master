import React from "react";
import { Text, View } from "react-native";
import { CURRENCY } from "../constants";
import { Schema, useQuery } from "../storage/src";
import { balanceContainer, balanceText } from "../styles";

const TotalAmount = () => {
  const totalAmount = useQuery(Schema.Finances)?.reduce((acc, curr) => {
    if (curr.type === "expense") {
      return acc - curr.amount;
    }
    return acc + curr.amount;
  }, 0);

  return (
    <View style={[balanceContainer, { marginBottom: 0 }]}>
      <Text style={balanceText}>Current Balance:</Text>
      <Text style={balanceText}>{`${totalAmount} ${CURRENCY}`}</Text>
    </View>
  );
};

export default TotalAmount;
