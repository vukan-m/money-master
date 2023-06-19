import { MMKV } from "react-native-mmkv";
import { IncomeExpenseType } from "./types";
import { MMKV_OBJECTS } from "./constants";

export const storage = new MMKV();

const getData: () => IncomeExpenseType[] = () => {
  const data = JSON.parse(storage.getString(MMKV_OBJECTS.incomeExpense) ?? "[]");
  return data;
};

export const getTotalAmount = () => {
  const data = getData();
  const totalAmount = data.reduce((total, item) => {
    if (item?.type === "income") {
      return total + Number(item?.amount);
    }
    return total - Number(item?.amount);
  }, 0);
  return totalAmount;
};
