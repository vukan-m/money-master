import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Finance from "../../components/Finance";
import TotalAmount from "../../components/TotalAmount";
import {
  buttonText,
  container,
  doubleMarginBottom,
  financeContainer,
  flex,
  greenButton,
  redButton,
  row,
  singleMarginLeft,
  spaceBetween,
  titleStyle,
} from "../../styles";
import { AddFinanceScreenProps } from "../../types";

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AddFinanceScreenProps>>();
  const handleAddIncome = () => {
    navigation.navigate("AddFinance", { type: "income" });
  };

  const handleAddExpense = () => {
    navigation.navigate("AddFinance", { type: "expense" });
  };

  return (
    <View style={container}>
      <Text style={titleStyle}>Money Master App</Text>

      <View style={[row, spaceBetween, doubleMarginBottom]}>
        <Image
          // eslint-disable-next-line global-require
          source={require("../../../assets/app-logo.png")}
          style={[singleMarginLeft, { height: 100, width: 87 }]}
        />
        <TotalAmount />
      </View>

      <View style={[flex, spaceBetween]}>
        <Finance />

        <View style={[financeContainer]}>
          <TouchableOpacity onPress={handleAddIncome} style={greenButton}>
            <Text style={buttonText}>Add Income</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAddExpense} style={redButton}>
            <Text style={buttonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
