import { StyleSheet, Text, View } from "react-native";

export default function CardProximaAtividade({ title, materia, horaInicio, horaFim, data }) {
    function ehMesmoDia(d1, d2) {
        return (
            d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
        );
    }

    function retornarDistancia(d1, d2) {
        const umDia = 1000 * 60 * 60 * 24;

        const data1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
        const data2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());

        const diff = data1.getTime() - data2.getTime();

        if (diff === 0) return 'Hoje';
        if (diff === umDia) return 'Amanhã';

        return data1.toLocaleDateString('pt-BR');
    }

    const dataHoje = new Date();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text>{materia} | {horaInicio} - {horaFim}</Text>
            </View>
            <View>
                {ehMesmoDia(data, dataHoje) ?
                    <Text style={styles.hoje}>Hoje</Text>
                    :
                    <Text style={styles.outroDia}>{retornarDistancia(data, dataHoje)}</Text>
                }
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#34445B',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#34445B',
        fontWeight: 'bold'
    },
    hoje: {
        borderWidth: 1,
        borderColor: '#34445B',
        backgroundColor: '#8895AA',
        color: '#34445B',
        borderRadius: 10,
        textAlign: 'center',
        paddingHorizontal: 10
    },
    outroDia: {
        borderWidth: 1,
        borderColor: '#34445B',
        color: '#34445B',
        borderRadius: 10,
        textAlign: 'center',
        paddingHorizontal: 10
    },
});
