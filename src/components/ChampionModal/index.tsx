import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import HabilidadeModal from "../HabilidadeModal";

export interface Item {
  id: string;
  lore: string;
  spells?: Spells[] | null;
}
export interface Spells {
  id: string;
}

export default function ChampionModal({
  modalVisible,
  setModalVisible,
  selectedChampion,
  championStats,
  setSelectedChampion,
  isLoading,
  setIsLoading,
}) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {isLoading ? (
          <ActivityIndicator
            size={"large"}
            color={"#fff"}
            style={styles.carregamento}
          />
        ) : (
          <View style={styles.modalContainer}>
            <View>
              <Text style={styles.texto}>{selectedChampion?.id}</Text>
              <Text style={styles.texto}>
                {selectedChampion?.title[0] == "o" ? "O" : "A"}{" "}
                {selectedChampion?.title.substr(
                  2,
                  selectedChampion?.title.length
                )}
              </Text>
              <Text style={styles.texto}>
                Classe: {selectedChampion?.tags[0]}
              </Text>
              <View>
                {Object.values(championStats).map((item: Item) => {
                  return (
                    <View key={item.id}>
                      <Text style={styles.texto}>{item.lore}</Text>
                      <Text style={styles.texto}>Habilidades:</Text>
                      <View style={styles.habilidades}>
                        <TouchableOpacity
                          onPress={() => setSelectedSkill(item.spells[0])}
                        >
                          <Text style={styles.texto}>Q</Text>
                          <Image
                            source={{
                              uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${item.spells[0].id}.png`,
                            }}
                            style={{ width: 50, height: 50 }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setSelectedSkill(item.spells[1])}
                        >
                          <Text style={styles.texto}>W</Text>
                          <Image
                            source={{
                              uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${item.spells[1].id}.png`,
                            }}
                            style={{ width: 50, height: 50 }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setSelectedSkill(item.spells[2])}
                        >
                          <Text style={styles.texto}>E</Text>
                          <Image
                            source={{
                              uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${item.spells[2].id}.png`,
                            }}
                            style={{ width: 50, height: 50 }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setSelectedSkill(item.spells[3])}
                        >
                          <Text style={styles.texto}>R</Text>
                          <Image
                            source={{
                              uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${item.spells[3].id}.png`,
                            }}
                            style={{ width: 50, height: 50 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setSelectedChampion(null);
                  setIsLoading(true);
                }}
                style={{
                  marginTop: 20,
                  backgroundColor: "#C89B3C",
                  padding: 10,
                  width: "25%",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontFamily: "BeaufortforLOLBold",
                    fontSize: 18,
                    color: "#FFF",
                  }}
                >
                  Fechar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
      <HabilidadeModal
        modalVisible={selectedSkill !== null}
        setModalVisible={() => setSelectedSkill(null)}
        selectedSkill={selectedSkill}
      />
    </>
  );
}
