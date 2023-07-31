import React, { useCallback, useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ALLOWED_CATEGORY_ICONS } from "../constants";
import {
  alignSelfCenter,
  colors,
  halfMarginBottom,
  halfMarginRight,
  selectedItemStyle,
  singleMarginTop,
  unselectedItemStyle,
  wrap,
} from "../styles";

const IconList = props => {
  const { setIconName, iconName } = props;
  const [selectedIcon, setSelectedIcon] = useState(iconName ?? ALLOWED_CATEGORY_ICONS[0]);

  const renderItem = useCallback(
    ({ item }) => {
      const selectIcon = () => {
        setIconName(item);
        setSelectedIcon(item);
      };

      return (
        <TouchableOpacity
          onPress={selectIcon}
          style={[halfMarginRight, halfMarginBottom, selectedIcon === item ? selectedItemStyle : unselectedItemStyle]}
        >
          <Icon name={item} color={colors.darkWhite} size={20} />
        </TouchableOpacity>
      );
    },
    [selectedIcon],
  );

  useEffect(() => {
    setIconName(ALLOWED_CATEGORY_ICONS[0]);
  }, []);

  return (
    <FlatList
      data={ALLOWED_CATEGORY_ICONS}
      style={[wrap, singleMarginTop, alignSelfCenter]}
      numColumns={6}
      renderItem={renderItem}
      keyExtractor={item => `CATEGORY_ICON_${item}`}
    />
  );
};

export default IconList;
