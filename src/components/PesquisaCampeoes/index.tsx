import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";

export default function PesquisaCampeoes({ value, setValue }) {
  return (
    <View style={styles.pesquisa}>
      <TextInput
        placeholder={"Digite o nome do campeão"}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholderTextColor="#F0E6D2"
        style={styles.input}
      />
    </View>
  );
}
