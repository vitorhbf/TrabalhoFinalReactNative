import React from "react";
import { FlatList, TouchableOpacity, Text, Image, View } from "react-native";
import styles from "./styles";

export interface Item { 
  id: string;
  title: string;
  tags?: string[] | null;
}

interface ChampionsListProps {
  readonly campeoesJson: { readonly [key: string]: Item };
  readonly setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  readonly setSelectedChampion: React.Dispatch<React.SetStateAction<Item | null>>;
  readonly getRoleImage: (tag: string | undefined) => any;
}

export default function ChampionsList({
  campeoesJson,
  setModalVisible,
  setSelectedChampion,
  getRoleImage,
}: ChampionsListProps) {
  return (
    <View style={styles.championsContainer}>
      <Text style={styles.title}>Todos os campeões</Text>
      <FlatList
        data={Object.values(campeoesJson)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }: { item: Item }) => {
          return (
            <TouchableOpacity
              style={styles.championCard}
              onPress={() => {
                setModalVisible(true);
                setSelectedChampion(item);
              }}
            >
              <Image
                source={{
                  uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${item.id}.png`,
                }}
                style={styles.championImage}
              />
              <View style={styles.infos}>
                <Text style={styles.championName}>
                  {item.id}: {item.title}
                </Text>
                <Image
                  source={getRoleImage(item.tags ? item.tags[0] : undefined)}
                  style={styles.roleImage}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
