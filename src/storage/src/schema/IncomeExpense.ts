import Realm from "realm";
import Category from "./Category";

class IncomeExpense extends Realm.Object {
  public _id!: Realm.BSON.ObjectId;

  public date!: string;

  public type!: "income" | "expense";

  public amount!: number;

  public category!: Category;

  public static schema: Realm.ObjectSchema = {
    name: "IncomeExpense",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      date: "string",
      type: "string",
      amount: "int",
      category: "Category",
    },
  };
}

export default IncomeExpense;
