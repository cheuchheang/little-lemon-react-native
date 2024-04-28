import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import { Image, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const CustomHeader = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ marginLeft: 20 }}>LITTLE LEMON</Text>
      </View>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LITTLE LEMON"
        component={Onboarding}
        options={{
          headerTitle: (props) => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
