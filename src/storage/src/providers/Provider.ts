import { createRealmContext, Realm } from "@realm/react";

import Categories from "../schema/Categories";
import Finances from "../schema/Finances";

export const objectSchema = [Finances, Categories];

export const realmConfig: Realm.Configuration = {
  schema: objectSchema,
  schemaVersion: 1,
  path: "main.realm",
};

export default createRealmContext(realmConfig);
