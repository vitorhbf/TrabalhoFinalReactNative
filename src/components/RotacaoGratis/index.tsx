import React from "react";
import { View, Image } from "react-native";
import styles from './styles';

export default function RotacaoGratis({nomesCampeoes}) {
  return (
    <View
      style={styles.rotacaoContainer}
    >
      {nomesCampeoes.map((nome) => {
        return (
          <View key={nome}>
            <Image
              source={{
                uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${nome}.png`,
              }}
              style={styles.imagemCampeao}
            />
          </View>
        );
      })}
    </View>
  );
}
