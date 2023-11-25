import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginContainer({
  styles,
  email,
  setEmail,
  validateEmail,
  isPasswordVisible,
  password,
  setPassword,
  validatePassword,
  setIsPasswordVisible,
  handleLogin,
  navigation,
}) {
  return (
    <View style={styles.logincontainer}>
      <Text style={styles.text2}>E-mail</Text>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
        onBlur={() => validateEmail(email)}
        placeholder="Email"
        placeholderTextColor="rgba(255, 255, 255, 0.3)"
      />
      <Text style={styles.text2}>Senha</Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={(text) => setPassword(text)}
        onBlur={() => validatePassword(password)}
        placeholder="Senha"
        placeholderTextColor="rgba(255, 255, 255, 0.3)"
      />
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={25}
            color={"gray"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.textInputEntrar} onPress={handleLogin}>
        <Text style={styles.textEntrar}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
        style={{ marginTop: 10, padding: 10 }}
      >
        <Text style={styles.text4}>Não possui conta? Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
