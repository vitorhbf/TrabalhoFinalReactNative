import { Text, View, ImageBackground, Image } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export default function PlayerCard({
  playerData,
  nomeCampeao,
  fundo1,
  userRankData,
  getTierImage,
  winRate,
}) {
  return (
    <View style={styles.container}>
      {JSON.stringify(playerData) !== "{}" && (
        <ImageBackground resizeMode="stretch"
          source={{
            uri: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomeCampeao}_0.jpg`,
          }}
          style={styles.Background}
        >
          <View style={styles.icone}>
            <Image
              source={{
                uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/profileicon/${playerData.profileIconId}.png`,
              }}
              style={styles.playerIcon}
            />
            <Image source={fundo1} style={styles.borda} />
          </View>

          <LinearGradient
            colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.99)"]}
            style={{
              flex: 1,
            }}
          >
            <View style={styles.nomeLevel}>
              <Text style={styles.nome}>{playerData.name}</Text>

              <Text style={styles.level}>Nível {playerData.summonerLevel}</Text>
            </View>

            <View>
              {userRankData.slice(0, 1).map((rank) => (
                <View key={rank.queueType} style={styles.rankContainer}>
                  <Text style={styles.rankAndTier}>
                    {rank.queueType == "RANKED_SOLO_5x5"
                      ? "Ranqueada Solo/Duo"
                      : "Ranqueada Flex"}
                    : {rank.tier} {rank.rank}
                  </Text>
                  <Image
                    source={getTierImage(rank.tier)}
                    style={styles.rankIcon}
                  />
                  <Text style={styles.winLoss}>
                    Vitórias: {rank.wins} Derrotas: {rank.losses}
                  </Text>
                  <Text style={styles.winrate}>
                    {winRate(rank.wins, rank.losses)}
                  </Text>
                </View>
              ))}
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
}
