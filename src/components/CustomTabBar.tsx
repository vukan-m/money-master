import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { center, colors, flex, fullWidth, tabBarStyle, tabRightBorder } from "../styles";

const SCREEN_WIDTH = fullWidth();

const TabItem = props => {
  const { route, index, state, navigation, isLast } = props;

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route.key,
    });
  };

  const itemWidth = SCREEN_WIDTH / state.routes.length - (state.routes.length - 1) * 2;

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[flex, center, !isLast && tabRightBorder, { maxWidth: itemWidth }]}
    >
      <Text style={[{ color: isFocused ? colors.gold : colors.white, fontWeight: "700" }]}>{route.name}</Text>
    </TouchableOpacity>
  );
};

const CustomTabBar = (props: { state; descriptors; navigation }) => {
  const { state } = props;
  return (
    <View style={[tabBarStyle]}>
      {state.routes.map((route, index) => (
        <TabItem
          route={route}
          index={index}
          key={`TAB_BAR_ITEM_${route.name}`}
          isLast={state.routes.length - 1 === index}
          {...props}
        />
      ))}
    </View>
  );
};

export default CustomTabBar;
