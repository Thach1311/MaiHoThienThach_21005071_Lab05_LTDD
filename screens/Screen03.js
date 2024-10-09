import { Text, TouchableOpacity, TextInput, StyleSheet, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen03({ navigation }) {
    return (
        <View>
            <Image style={{ width: '100%' }} source={require('../assets/DATA/Image_20.png')} />
            <View style={{ padding: 30 }}>
                <Text style={{ fontWeight: '900', fontSize: 30, marginTop: 30, marginBottom: 40 }}>Welcome!</Text>
                
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontWeight: '800' }}>Email</Text>
                    <View style={styles.layoutInput}>
                        <Icon style={{ marginRight: 10, fontSize: 20 }} name="envelope" />
                        <TextInput
                            keyboardType="default"
                            placeholder="Enter email"
                            style={{ flex: 1 }}  // Flex will allow the TextInput to expand properly
                        />
                    </View>
                </View>

                <View>
                    <Text style={{ fontWeight: '800' }}>Password</Text>
                    <View style={styles.layoutInput}>
                        <Icon style={{ marginRight: 10, fontSize: 20 }} name="lock" />
                        <TextInput
                            keyboardType="default"
                            secureTextEntry={true} // Secure text input for passwords
                            placeholder="Enter password"
                            style={{ flex: 1 }}  // Flex will allow the TextInput to expand properly
                        />
                        <Icon name="eye-slash" />
                    </View>

                    <TouchableOpacity style={styles.btnLogin} onPress={() => { navigation.navigate("Screen04") }}>
                        <Text style={{ color: 'white', fontWeight: '400' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layoutInput: {
        backgroundColor: '#dadbdd',
        width: 330,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
    },
    btnLogin: {
        marginTop: 50,
        width: 330,
        height: 50,
        backgroundColor: '#25c3d9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
});
