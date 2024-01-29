import { createRealmContext, Realm } from "@realm/react";

import IncomeExpense from "../schema/IncomeExpense";
import Category from "../schema/Category";

export const objectSchema = [IncomeExpense, Category];

export const realmConfig: Realm.Configuration = {
  schema: objectSchema,
  schemaVersion: 1,
  path: "main.realm",
};

export default createRealmContext(realmConfig);
