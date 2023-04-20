import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" />
            <Text>TravelMate</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const image = {uri: 'https://reactjs.org/logo-og.png'};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});