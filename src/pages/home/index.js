import { ScrollView, View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CardArea from "../../components/home/CardArea"
import CardProximaAtividade from "../../components/home/CardProximaAtividade"

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'lightblue' }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Progresso Geral</Text>
                    <CardArea title="Matemática e suas Tecnologias" percent={60} />
                    <CardArea title="Linguagens, Códigos esuas Tecnologias" percent={50} />
                    <CardArea title="Ciências da Natureza e suas Tecnologias" percent={25} />
                    <CardArea title="Ciências Humanas e suas Tecnologias" percent={90} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Próximas atividades</Text>
                    <CardProximaAtividade
                        title="Funções Trigonométricas"
                        materia="Matemática"
                        horaInicio="14:00"
                        horaFim="16:00"
                        data={new Date(2025, 9, 20)}
                    />
                    <CardProximaAtividade
                        title="Simulado"
                        materia="Simulados"
                        horaInicio="13:00"
                        horaFim="17:00"
                        data={new Date(2025, 9, 21)}
                    />
                    <CardProximaAtividade
                        title="Literatura Brasileira"
                        materia="Português"
                        horaInicio="20:00"
                        horaFim="21:00"
                        data={new Date(2025, 9, 27)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 25,
        marginBottom: 15,
        gap: 10
    },
    title: {
        color: '#34445B',
        fontSize: 30,
        textAlign: 'center'
    }
})
