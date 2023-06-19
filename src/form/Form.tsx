import React, { useCallback, useRef } from "react";
import { TextInput, View } from "react-native";
import { useDeepMemo } from "../../utils";
import { FormProps, UnknownArrayOrObject } from "../types";
import FormItemWrapper from "./FormItemWrapper";

export const dirtyValues = (
  dirtyFields: UnknownArrayOrObject | boolean,
  allValues: UnknownArrayOrObject,
): UnknownArrayOrObject => {
  if (dirtyFields === true || Array.isArray(dirtyFields)) {
    return allValues;
  }
  return Object.fromEntries(Object.keys(dirtyFields).map(key => [key, dirtyValues(dirtyFields[key], allValues[key])]));
};

function Form<T>(props: FormProps<T>) {
  const { children } = props;

  const Inputs = useRef<Array<TextInput | null>>((Array.isArray(children) ? children : [])?.map(() => null));

  const renderItem = useCallback((child, index) => {
    if (child) {
      return (
        <View key={`FORM_KEY_${(child as any)?.props?.name}_${index}_${(child as any)?.key}`}>
          {typeof (child as any)?.props?.name === "string" ? (
            <FormItemWrapper {...props} Inputs={Inputs} index={index} children={child} />
          ) : (
            child
          )}
        </View>
      );
    }
    return null;
  }, []);

  return (
    <View style={props?.containerStyle} {...props}>
      {useDeepMemo(() => React.Children.map(children, renderItem), [props])}
    </View>
  );
}

export default Form;
