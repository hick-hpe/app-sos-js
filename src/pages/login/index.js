import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <View style={styles.container}>
                {/* cabecalho */}
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Seja bem vindo(a),</Text>
                    <Text style={styles.title}>faça login para</Text>
                    <Text style={styles.title}>usar o app</Text>
                </View>

                {/* form */}
                <View style={styles.form}>
                    <View style={styles.field}>
                        <MaterialIcons name="email" size={24} color="#34445B" />
                        <TextInput style={styles.input} keyboardType='email-address' placeholder='Digite seu email' />
                    </View>
                    <View style={styles.field}>
                        <MaterialIcons name="lock" size={24} color="#34445B" />
                        <TextInput style={styles.input} placeholder='Digite sua senha' secureTextEntry />
                    </View>

                    <TouchableOpacity onPress={() => alert('Esqueci minha senha')}>
                        <Text style={[styles.link, styles.textLink]}>Esqueci minha senha!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.replace("app")}>
                        <Text style={styles.buttonLoginText}>Login</Text>
                    </TouchableOpacity>
                </View>

                {/* nao tem conta? */}
                <View style={styles.containerLink}>
                    <Text style={styles.textLink}>Ainda não tem conta?</Text>
                    <TouchableOpacity onPress={() => navigation.push("register")}>
                        <Text style={[styles.link, styles.textLink]}>Crie uma agora!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 30
    },
    containerTitle: {
        marginTop: 30
    },
    title: {
        color: '#34445b',
        fontSize: 30
    },
    form: {
        gap: 20
    },
    field: {
        backgroundColor: '#DEE8FC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 10
    },
    input: {
        padding: 15,
        paddingLeft: 5
    },
    buttonLogin: {
        backgroundColor: '#34445b',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonLoginText: {
        color: '#fff',
        fontSize: 20
    },
    textLink: {
        fontSize: 14
    },
    link: {
        textDecorationLine: 'underline',
        color: 'rgba(41, 128, 221, 1)'
    },
    containerLink: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 30
    },
});
