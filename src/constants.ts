import { ObjectId } from "bson";

export const CURRENCY = "RSD";

export const FORM_FIELDS = {
  categories: {
    name: "categories",
  },
  description: {
    name: "description",
  },
};

export const MMKV_OBJECTS = {
  category: (id: ObjectId) => `category/${id}`,
  incomeExpense: (id: ObjectId) => `incomeExpense/${id}`,
  categories: "categories",
  incomeExpenses: "incomeExpenses",
};

export const ALLOWED_CATEGORY_ICONS = [
  "home",
  "cellphone",
  "cash",
  "shopping",
  "receipt",
  "car",
  "gas-station",
  "heart",
  "gift",
  "food",
  "school",
];
