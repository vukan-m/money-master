import { useNavigation } from "@react-navigation/native";
import React, { ReactNode, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { fillView, modalContainer, modalInnerContainer, titleStyle } from "../styles";

const Modal = ({ title, children }: { title: string; children: ReactNode }) => {
  const navigation = useNavigation();
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={[modalContainer]}>
      <TouchableOpacity onPress={handleBackPress} style={[fillView]} />
      <View style={[modalInnerContainer]}>
        <Text style={[titleStyle]}>{title}</Text>
        {children}
      </View>
    </View>
  );
};

export default Modal;
