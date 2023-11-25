import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function HabilidadeModal({
  modalVisible,
  setModalVisible,
  selectedSkill,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        {selectedSkill && (
          <View>
            <Text style={styles.texto}> {selectedSkill.name}</Text>
            <Image
              source={{
                uri: `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${selectedSkill.id}.png`,
              }}
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginBottom: 20,
              }}
            />
            <Text style={styles.texto}>Detalhes da Habilidade:</Text>
            <Text style={styles.texto}> {selectedSkill.description}</Text>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                marginTop: 20,
                backgroundColor: "#C89B3C",
                padding: 10,
                width: "25%",
                borderRadius: 10,
                alignSelf: "center"
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
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
}
