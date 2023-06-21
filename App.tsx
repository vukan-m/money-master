import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import CustomTabBar from "./src/components/CustomTabBar";
import CategoryStack from "./src/navigation/CategoryStack";
import MainStack from "./src/navigation/MainStack";
import { flex } from "./src/styles";
import { MainTabParamList } from "./src/types";

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderCustomTabBar = props => <CustomTabBar {...props} />;

const App = () => {
  return (
    <SafeAreaView style={[flex]}>
      <NavigationContainer>
        <Tab.Navigator tabBar={renderCustomTabBar} screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Main" component={MainStack} />
          <Tab.Screen name="Categories" component={CategoryStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
