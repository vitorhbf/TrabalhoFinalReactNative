import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import { Text } from "react-native";
import {
  getChampionRotation,
  getChampions,
  getChampionsStats,
} from "../../service/apiLol";
import assassin from "../../assets/RoleIcons/assassin.png";
import tank from "../../assets/RoleIcons/tank.png";
import support from "../../assets/RoleIcons/support.png";
import fighter from "../../assets/RoleIcons/fighter.png";
import marksman from "../../assets/RoleIcons/marksman.png";
import mage from "../../assets/RoleIcons/mage.png";
import ChampionsList from "../../components/ChampionsList";
import ChampionModal from "../../components/ChampionModal";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import PesquisaCampeoes from "../../components/PesquisaCampeoes";
import RotacaoGratis from "../../components/RotacaoGratis";


export default function Home() {
  const [campeoesJson, setCampeoesJson] = useState<undefined | {}>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [championStats, setChampionStats] = useState<undefined | {}>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [championRotation, setChampionRotation] = useState<undefined | {}>({});
  const [nomesCampeoes, setNomesCampeoes] = useState([]);
  const [value, setValue] = React.useState("");

  useEffect(() => {
    buscaCampeoes();
    buscaRotacao();
  }, []);

  useEffect(() => {
    if (campeoesJson.Aatrox) {
      setIsLoaded(true);
    }
  }, [campeoesJson]);

  useEffect(() => {
    if (modalVisible) {
      buscaCampeaoByName();
    }
  }, [modalVisible]);

  useEffect(() => {
    if (championRotation?.freeChampionIds) {
      arrayNomes();
    }
  }, [championRotation]);

  const buscaCampeoes = () => {
    getChampions()
      .then((response) => {
        setCampeoesJson(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscaCampeaoByName = () => {
    getChampionsStats(selectedChampion?.id)
      .then((response) => {
        setChampionStats(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const buscaRotacao = () => {
    getChampionRotation()
      .then((response) => {
        setChampionRotation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarIdPeloKey = (champId: number) => {
    for (const id in campeoesJson) {
      if (campeoesJson[id].key == champId) {
        return id;
      }
    }
    return null;
  };

  const arrayNomes = () => {
    const nomesChamps = championRotation?.freeChampionIds.map((champ) => {
      return buscarIdPeloKey(champ);
    });

    setNomesCampeoes(nomesChamps.sort());
  };

  const filteredProdutos = Object.values(campeoesJson).filter((campeao) => {
    return campeao.id.toLowerCase().includes(value.toLowerCase());
  });

  function getRoleImage(role) {
    switch (role.toUpperCase()) {
      case "ASSASSIN":
        return assassin;
      case "MAGE":
        return mage;
      case "FIGHTER":
        return fighter;
      case "TANK":
        return tank;
      case "SUPPORT":
        return support;
      case "MARKSMAN":
        return marksman;
      default:
        return null;
    }
  }

  return (
      <LinearGradient colors={["#091428", "#042a41"]} style={styles.gradient}>
      <PesquisaCampeoes value={value} setValue={setValue}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          
          
          <Text style={styles.textoRotacao}>
            Rotação semanal de campeões grátis
          </Text>
          <RotacaoGratis nomesCampeoes={nomesCampeoes}/>

          {isLoaded && (
            <ChampionsList
              campeoesJson={filteredProdutos}
              getRoleImage={getRoleImage}
              setModalVisible={setModalVisible}
              setSelectedChampion={setSelectedChampion}
            />
          )}
          <ChampionModal
            championStats={championStats}
            modalVisible={modalVisible}
            selectedChampion={selectedChampion}
            setModalVisible={setModalVisible}
            setSelectedChampion={setSelectedChampion}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </ScrollView>
      </LinearGradient>
  );
}
