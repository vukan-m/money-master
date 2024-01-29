import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomTabBar from "./src/components/CustomTabBar";
import CategoryStack from "./src/navigation/CategoryStack";
import MainStack from "./src/navigation/MainStack";
import { flex } from "./src/styles";
import { MainTabParamList } from "./src/types";
import { RealmProvider } from "./src/storage/src";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state."]);

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderCustomTabBar = props => <CustomTabBar {...props} />;

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={[flex]}>
        <SafeAreaView style={[flex]}>
          <RealmProvider>
            <NavigationContainer>
              <Tab.Navigator tabBar={renderCustomTabBar} screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Main" component={MainStack} />
                <Tab.Screen name="Categories" component={CategoryStack} />
              </Tab.Navigator>
            </NavigationContainer>
          </RealmProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
