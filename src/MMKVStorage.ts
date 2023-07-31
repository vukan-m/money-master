import { ObjectId } from "bson";
import { MMKV } from "react-native-mmkv";
import { MMKV_OBJECTS } from "./constants";
import { CategoryType, IncomeExpenseType } from "./types";

export const storage = new MMKV();

export const getCategory = (id: ObjectId) => {
  const category = JSON.parse(storage.getString(MMKV_OBJECTS.category(id)) ?? "{}") as CategoryType;
  return category;
};

export const getIncomeExpense = (id: ObjectId) => {
  const incomeExpense = JSON.parse(storage.getString(MMKV_OBJECTS.incomeExpense(id)) ?? "{}") as IncomeExpenseType;
  return incomeExpense;
};

export const getAllIncomeExpense = () => {
  const incomeExpenses = JSON.parse(storage.getString(MMKV_OBJECTS.incomeExpenses) ?? "[]") as ObjectId[];
  const allData = incomeExpenses?.map(item => {
    const data = getIncomeExpense(item);
    return data;
  }) as IncomeExpenseType[];
  return allData;
};

export const getAllCategories = () => {
  const categories = JSON.parse(storage.getString(MMKV_OBJECTS.categories) ?? "[]") as ObjectId[];
  const allData = categories?.map(item => {
    const data = getCategory(item);
    return data;
  }) as CategoryType[];
  return allData;
};

export const getTotalAmount = () => {
  const allData = getAllIncomeExpense();
  const totalAmount = allData?.reduce((prev, curr) => {
    if (curr.type === "income") {
      return prev + Number(curr.amount);
    }
    return prev - Number(curr.amount);
  }, 0);
  return totalAmount;
};

export const deleteIncomeExpense = (id: ObjectId) => {
  const data = JSON.parse(storage.getString(MMKV_OBJECTS.incomeExpenses) ?? "[]") as ObjectId[];
  const deletedId = data?.filter(item => item !== id);
  storage.set(MMKV_OBJECTS.incomeExpenses, JSON.stringify(deletedId));
  storage.delete(MMKV_OBJECTS.incomeExpense(id));
};

export const deleteCategory = (id: ObjectId) => {
  const data = JSON.parse(storage.getString(MMKV_OBJECTS.categories) ?? "[]") as ObjectId[];
  const incomeExpenses = JSON.parse(storage.getString(MMKV_OBJECTS.incomeExpenses) ?? "[]") as ObjectId[];
  const deletedCategory = data?.filter(item => item !== id);
  storage.set(MMKV_OBJECTS.categories, JSON.stringify(deletedCategory));
  storage.delete(MMKV_OBJECTS.category(id));
  const allIncomeExpense = incomeExpenses
    ?.map(itemId => {
      const incomeExpense = getIncomeExpense(itemId);
      if (incomeExpense?.category === id) {
        return incomeExpense?.id;
      }
      return null;
    })
    ?.filter(item => item) as ObjectId[];
  allIncomeExpense?.forEach(item => deleteIncomeExpense(item));
};
