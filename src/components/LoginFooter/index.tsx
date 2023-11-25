import React from "react";
import { View, Image } from "react-native";


export default function LoginFooter({riotLogo, LeagueLogo, classificacao, styles}) {
  return (
    <View style={styles.footer}>
          <Image source={riotLogo} style={styles.riotLogo} />
          <Image source={LeagueLogo} style={styles.riotLogo} />
          <Image source={classificacao} style={styles.riotLogo} />
        </View>
  );
}
