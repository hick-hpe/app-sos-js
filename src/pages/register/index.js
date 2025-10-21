import { Text, TouchableOpacity, View } from "react-native";

export default function Register({ navigation }) {
  return (
    <View>
      <Text>Tela Register</Text>

      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text>Ir para "Login"</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('app')}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}
