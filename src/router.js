import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Materias from "./pages/materias";
import Cronograma from "./pages/cronograma";
import Progresso from "./pages/progresso";
import Configuracoes from "./configuracoes";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.container,
      }}
    >
      {/* HOME */}
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                size={size}
                color={styles.labelColorSelecionado.color}
                name="home"
              />
            ) : (
              <Ionicons
                size={size}
                color={styles.labelColorNaoSelecionado.color}
                name="home-outline"
              />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                { fontSize: 10 },
                focused
                  ? styles.labelColorSelecionado
                  : styles.labelColorNaoSelecionado,
              ]}
            >
              Início
            </Text>
          ),
          tabBarActiveBackgroundColor: styles.tabBarActiveBackgroundColor.backgroundColor,
        }}
      />

      {/* MATÉRIAS */}
      <Tab.Screen
        name="materias"
        component={Materias}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                size={size}
                color={styles.labelColorSelecionado.color}
                name="book"
              />
            ) : (
              <Ionicons
                size={size}
                color={styles.labelColorNaoSelecionado.color}
                name="book-outline"
              />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                { fontSize: 10 },
                focused
                  ? styles.labelColorSelecionado
                  : styles.labelColorNaoSelecionado,
              ]}
            >
              Matérias
            </Text>
          ),
          tabBarActiveBackgroundColor: styles.tabBarActiveBackgroundColor.backgroundColor,
        }}
      />

      {/* CRONOGRAMA */}
      <Tab.Screen
        name="cronograma"
        component={Cronograma}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                size={size}
                color={styles.labelColorSelecionado.color}
                name="timer"
              />
            ) : (
              <Ionicons
                size={size}
                color={styles.labelColorNaoSelecionado.color}
                name="timer-outline"
              />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                { fontSize: 10 },
                focused
                  ? styles.labelColorSelecionado
                  : styles.labelColorNaoSelecionado,
              ]}
            >
              Cronograma
            </Text>
          ),
          tabBarActiveBackgroundColor: styles.tabBarActiveBackgroundColor.backgroundColor,
        }}
      />

      {/* PROGRESSO */}
      <Tab.Screen
        name="progresso"
        component={Progresso}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                size={size}
                color={styles.labelColorSelecionado.color}
                name="bar-chart"
              />
            ) : (
              <Ionicons
                size={size}
                color={styles.labelColorNaoSelecionado.color}
                name="bar-chart-outline"
              />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                { fontSize: 10 },
                focused
                  ? styles.labelColorSelecionado
                  : styles.labelColorNaoSelecionado,
              ]}
            >
              Progresso
            </Text>
          ),
          tabBarActiveBackgroundColor: styles.tabBarActiveBackgroundColor.backgroundColor,
        }}
      />

      {/* CONFIGURAÇÕES */}
      <Tab.Screen
        name="configuracoes"
        component={Configuracoes}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <Ionicons
                size={size}
                color={styles.labelColorSelecionado.color}
                name="settings"
              />
            ) : (
              <Ionicons
                size={size}
                color={styles.labelColorNaoSelecionado.color}
                name="settings-outline"
              />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                { fontSize: 10 },
                focused
                  ? styles.labelColorSelecionado
                  : styles.labelColorNaoSelecionado,
              ]}
            >
              Configurações
            </Text>
          ),
          tabBarActiveBackgroundColor: styles.tabBarActiveBackgroundColor.backgroundColor,
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
  container: {
    backgroundColor: "lightblue",
  },
  tabBarActiveBackgroundColor: {
    backgroundColor: "#34445B"
  },
  labelColorSelecionado: {
    color: "lightblue",
    fontWeight: "bold",
  },
  labelColorNaoSelecionado: {
    color: "#34445B",
  },
});
