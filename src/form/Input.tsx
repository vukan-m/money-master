import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { absolute, center, colors, fillWidth, overflowHidden, spacing, textInput } from "../styles";
import { BasicTextInputInputProps, BasicTextInputProps, BasicTextInputRef } from "../types";

function InputBase(props: BasicTextInputInputProps) {
  const { value, setValue } = props;

  const handleReset = useCallback(() => {
    if (setValue) {
      setValue("");
    }
    if (props?.onChangeText) {
      props?.onChangeText("");
    }
  }, []);

  return (
    <View style={[fillWidth, props.containerStyle, overflowHidden]}>
      <TextInput
        disableFullscreenUI
        {...props}
        placeholderTextColor={colors.grayLowOpacity}
        value={value !== undefined && value !== null ? String(value) : ""}
        underlineColorAndroid="transparent"
      />

      {props?.value !== "" && (
        <TouchableOpacity
          onPress={handleReset}
          style={[absolute, center, { top: 0, bottom: 0, right: spacing.single }]}
        >
          <Icon name="close" size={22} color={colors.darkWhite} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const Input = forwardRef<BasicTextInputRef, BasicTextInputProps>((props, ref) => {
  const [value, setValue] = useState(props?.value);
  const handleChange = useCallback(newValue => {
    setValue(newValue);
    props?.onChange && props?.onChange(newValue);
  }, []);

  useEffect(() => {
    if (props.value) {
      setValue(props?.value);
    }
  }, [props?.value]);

  useImperativeHandle(ref, () => ({
    setValue(newValue) {
      handleChange(newValue);
    },
    getValue() {
      return value;
    },
  }));

  return (
    <InputBase
      {...props}
      onChange={() => null}
      onChangeText={handleChange}
      setValue={setValue}
      value={value}
      style={[textInput, props?.style]}
    />
  );
});

export default Input;
