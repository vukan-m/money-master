import Realm from "realm";

class Categories extends Realm.Object {
  public _id!: Realm.BSON.ObjectId;

  public name!: string;

  public static schema: Realm.ObjectSchema = {
    name: "Categories",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
    },
  };
}

export default Categories;
