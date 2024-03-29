import { ReactNode } from "react";
import { RegisterOptions, UseFormReturn, UseFormSetValue } from "react-hook-form";
import { ImageStyle, StyleProp, TextInput, TextStyle, ViewStyle } from "react-native";
import Realm, { BSON } from "realm";
import Categories from "./storage/src/schema/Categories";
import Finances from "./storage/src/schema/Finances";

export type SchemaType<T> = Omit<T, keyof Realm.Object>;
export type CategoriesType = SchemaType<InstanceType<typeof Categories>>;
export type FinancesType = SchemaType<InstanceType<typeof Finances>>;

export type AddFinanceScreenProps = {
  AddFinance: {
    type: "income" | "expense";
  };
};

export type BasicStyleProp = StyleProp<ViewStyle | TextStyle | ImageStyle>;

export type UnknownArrayOrObject = unknown[] | Record<string, unknown>;

export type FormProps<T> =
  // @ts-ignore
  UseFormReturn<T> & {
    isNotModal?: boolean;
    children: ReactNode;
    onDone?: (values: any) => void;
    _id?: string;
    type?: any;
    /**
     *
     * when set to false the the data will contain the whole form, otherwise it will contain only the chagned values
     * set this to false when creating an entity
     * DEFAULTS TO TRUE
     * @type {boolean}
     */
    dirtyFieldsOnly?: boolean;

    /**
     * the style of the view that wraps the childrens
     *
     * @type {BasicStyleProp}
     */
    containerStyle?: BasicStyleProp;
  };

export type FormDependencyType = { name: string; visibleWhen: (v: any) => boolean };

export type FormItemProps = Pick<UseFormReturn<any>, "setValue" | "control" | "getValues"> & {
  onChange: (...event: any[]) => void;
  onBlur: () => void;

  /**
   *
   * value of the field
   * @type {*}
   */
  value: any;

  /**
   *
   * refs of all inputs
   * @type {React.MutableRefObject<TextInput[]>}
   */
  Inputs: React.MutableRefObject<TextInput[]>;

  /**
   *
   * the name of the field
   * @type {string}
   */
  name: string;

  /**
   * index of the form field
   *
   * @type {number}
   */
  index: number;

  /**
   * validation rules for the field
   *
   * @type {RegisterOptions}
   */
  rules: RegisterOptions;

  /**
   * array of field to subscribe to
   * when the specified field changes this field will trigger a rerender
   * if the visibleWhen condition is false then this field will dissapear
   *
   * @type {Array<FormDependencyType>}
   */
  dependencies?: Array<FormDependencyType>;

  /**
   *
   * needed if the field is nested and does not have a unique name prop
   * @type {string}
   */
  key?: string;

  /**
   * when true the values will not be lost when not visible by dependencies
   * Roles modal  Access time
   *
   * @type {boolean}
   */
  dontUnregisterWhenNotVisible?: boolean;
};

export type CategoryDropdownProps = Partial<FormItemProps> & {
  /**
   * name of field
   *
   * @type {string}
   */
  name: string;
};

export type MainTabParamList = {
  Main: MainStackParamList;
  Categories: CategoryStackParamList;
};

export type MainStackParamList = {
  Home: any;
  AddFinance: any;
  CategoriesModal: CategoriesModalProps;
  AddCategory: any;
};

export type CategoryStackParamList = {
  CategoriesList: any;
  AddCategory: any;
  EditCategory: EditCategoryScreenProps;
};

export type EditCategoryScreenProps = {
  _id: BSON.ObjectId;
  name: string;
};

export type CategoriesModalProps = {
  setValue: UseFormSetValue<any> | undefined;
  name: string;
};
