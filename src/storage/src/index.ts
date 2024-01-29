import Provider from "./providers/Provider";
import Categories from "./schema/Categories";
import Finances from "./schema/Finances";

const Schema = { Finances, Categories };
const { RealmProvider, useObject, useQuery, useRealm } = Provider;

export { RealmProvider, Schema, useObject, useQuery, useRealm };
