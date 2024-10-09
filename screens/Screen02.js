import { StyleSheet, TextInput } from "react-native";
import { View, Text, Image, Button, CheckBox } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome icon library
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Screen02({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Screen01")}>
        <Icon style={styles.returnIcon} name="arrow-left" />
      </TouchableOpacity>
      <View style={styles.layout}>
        <Image source={require('../assets/DATA/Image_19.png')} />
        <Text style={styles.textNice}>Nice to see you!</Text>
        <Text style={styles.textCreate}>Create your account</Text>

        <View style={styles.textInput}>
          <Icon style={styles.icon} name="user" />
          <TextInput
            keyboardType="default"
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.textInput}>
          <Icon style={styles.icon} name="envelope" />
          <TextInput
            keyboardType="email-address"
            placeholder="Enter your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.textInput}>
          <Icon style={styles.icon} name="lock" />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.role}>
          <CheckBox value={isChecked} onValueChange={handleChecked} />
          <Text style={styles.roleText}>I agree with</Text>
          <TouchableOpacity>
            <Text style={styles.textTerm}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            navigation.navigate("Screen03");
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  returnIcon: {
    fontSize: 20,
    margin: 10,
  },
  layout: {
    alignItems: "center",
    width: "100%",
  },
  textNice: {
    fontSize: 30,
    fontWeight: "800",
  },
  textCreate: {
    color: "#aeb0b3",
    marginBottom: 50,
  },
  textInput: {
    width: 300,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  role: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  roleText: {
    marginLeft: 10,
    marginRight: 10,
  },
  textTerm: {
    color: "#71b7ec",
  },
  continueButton: {
    width: 300,
    height: 50,
    backgroundColor: "#00bdd6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
