import React from "react";
import { Image, Text} from "react-native";

export default function LoginHeader({ LoLIcon, styles}) {
  return (
    <>
      <Image source={LoLIcon} style={styles.logoImage} />
      <Text style={styles.text}>BEM VINDO, INVOCADOR</Text>
    </>
  );
}
