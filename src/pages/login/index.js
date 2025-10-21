import { Text, TouchableOpacity, View } from "react-native";

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Tela Login</Text>

      <TouchableOpacity onPress={() => navigation.navigate('register')}>
        <Text>Ir para "Register"</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('app')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
