import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Escalacao from "./src/screens/Escalacao";
import Jogadores from "./src/screens/Jogadores";
import EscalacaoProvider from "./src/contexts/escalacao";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoHeader() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/logo-scc.png")}
    />
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#C7662B",
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1C1C1C",
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Escalacao"
        component={Escalacao}
        options={{
          title: "Escalação",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Jogadores"
        component={Jogadores}
        options={{
          title: "Jogadores",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="users" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <EscalacaoProvider>
        <Stack.Navigator
          screenOptions={{
            headerTitle: (props) => <LogoHeader {...props} />,
            title: "Manager SCC",
            headerStyle: {
              backgroundColor: "#1C1C1C",
              height: 100,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Main" component={Tabs} />
          <Stack.Screen name="Jogadores" component={Jogadores} />
        </Stack.Navigator>
      </EscalacaoProvider>
    </NavigationContainer>
  );
}
