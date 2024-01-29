import Realm from "realm";
import Categories from "./Categories";

class Finances extends Realm.Object {
  public _id!: Realm.BSON.ObjectId;

  public date!: string;

  public type!: "income" | "expense";

  public amount!: number;

  public category!: Categories;

  public static schema: Realm.ObjectSchema = {
    name: "Finances",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      date: "string",
      type: "string",
      amount: "int",
      category: "Categories",
    },
  };
}

export default Finances;
