import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "./../../contexts/auth";
import styles from "./styles";
import poro from "../../assets/jinxPoro.png";

export default function Header({ navigation }) {
  const { loggedUser} = useContext(AuthContext);
  const [numSort, setNumSort] = useState<number>();

  useEffect(() => {
    sortearNumero();
  }, [loggedUser]);

  const sortearNumero = () => {
    const numeroSorteado = Math.floor(Math.random() * 27) + 1;
    setNumSort(numeroSorteado);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userWrap}>
        <Image
          source={{
            uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/profileicon/${numSort}.png`,
          }}
          style={styles.userIcon}
        />
        <Text style={styles.greetings}>Olá, {loggedUser.name}</Text>
      </View>
      <Image source={poro} style={styles.centerImage} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.greetings}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
