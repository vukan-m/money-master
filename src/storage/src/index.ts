import Provider from "./providers/Provider";
import Category from "./schema/Category";
import IncomeExpense from "./schema/IncomeExpense";

const Schema = { IncomeExpense, Category };
const { RealmProvider, useObject, useQuery, useRealm } = Provider;

export { RealmProvider, useObject, useQuery, useRealm, Schema };
