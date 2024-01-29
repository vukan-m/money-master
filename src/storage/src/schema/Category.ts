import Realm from "realm";

class Category extends Realm.Object {
  public _id!: Realm.BSON.ObjectId;

  public name!: string;

  public static schema: Realm.ObjectSchema = {
    name: "Category",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
    },
  };
}

export default Category;
