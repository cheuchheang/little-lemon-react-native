import React from "react";
import { Text, TextInput, View } from "react-native";
import { validateEmail } from "../utils/index";
import Button from "../components/Button";

const Onboarding = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const isEmailValid = validateEmail(email);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          height: "40%",
        }}
      >
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Let use get to know you
        </Text>
      </View>
      <View style={{ width: "80%", justifyContent: "center", height: "50%" }}>
        <View>
          <Text
            style={{
              color: "#333333",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            First Name
          </Text>
          <TextInput
            style={{
              height: 40,
              marginVertical: 24,
              borderRadius: 8,
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              borderColor: "EDEFEE",
            }}
            value={name}
            onChangeText={setName}
            keyboardType="ascii-capable"
            textContentType="name"
            placeholder={"Type your name"}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#333333",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Email
          </Text>
          <TextInput
            style={{
              height: 40,
              marginVertical: 24,
              borderRadius: 8,
              borderWidth: 1,
              padding: 10,
              fontSize: 16,
              borderColor: "EDEFEE",
            }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder={"Type your email"}
          />
        </View>
      </View>
      <View style={{ backgroundColor: "white", width: "80%" }}>
        <Button
          onPress={() => navigation.navigate("Profile")}
          disabled={!(isEmailValid && name !== "")}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

export default Onboarding;
