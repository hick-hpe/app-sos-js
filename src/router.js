import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Materias from "./pages/materias";
import Cronograma from "./pages/cronograma";
import Progresso from "./pages/progresso";
import Configuracoes from "./configuracoes";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons size={size} color={color} name="home" />
            ) : (
              <Ionicons size={size} color={color} name="home-outline" />
            ),
        }}
      />
      <Tab.Screen
        name="materias"
        component={Materias}
        options={{
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons size={size} color={color} name="book" />
            ) : (
              <Ionicons size={size} color={color} name="book-outline" />
            ),
        }}
      />
      <Tab.Screen
        name="cronograma"
        component={Cronograma}
        options={{
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons size={size} color={color} name="timer" />
            ) : (
              <Ionicons size={size} color={color} name="timer-outline" />
            ),
        }}
      />
      <Tab.Screen
        name="progresso"
        component={Progresso}
        options={{
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons size={size} color={color} name="bar-chart" />
            ) : (
              <Ionicons size={size} color={color} name="bar-chart-outline" />
            ),
        }}
      />
      <Tab.Screen
        name="configuracoes"
        component={Configuracoes}
        options={{
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons size={size} color={color} name="settings" />
            ) : (
              <Ionicons size={size} color={color} name="settings-outline" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="app" component={AppTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    
});
