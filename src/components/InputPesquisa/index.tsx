import React from "react";
import { TextInput } from "react-native";
import styles from './styles';


export default function InputPesquisa({playerName, setPlayerName}) {
  return (
    <TextInput
        placeholder={"Digite o nome de invocador"}
        value={playerName}
        onChangeText={(text) => setPlayerName(text)}
        placeholderTextColor="#F0E6D2"
        style={styles.input}
      />
  );
}
