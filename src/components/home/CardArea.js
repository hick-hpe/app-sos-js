import { StyleSheet, Text, View } from "react-native";

export default function CardArea({ title, percent }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitlePercent}>
                <Text>{title}</Text>
                <Text>{percent}%</Text>
            </View>
            <View style={{
                borderWidth: 1,
                borderColor: '#34445B',
                borderRadius: 10,
                width: '100%',
            }}>
                <View style={{
                    backgroundColor: '#34445B',
                    padding: 5,
                    width: `${percent}%`
                }}></View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#34445B',
        padding: 10,
        gap: 5,
        borderRadius: 10
    },
    containerTitlePercent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: '#34445B',
    },
});
