import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import {
  getChampions,
  getMastery,
  getRanks,
  getSummonerByName,
} from "../../service/apiLol";
import styles from "./styles";
import iron from "../../assets/RankIcons/IRON.png";
import bronze from "../../assets/RankIcons/BRONZE.png";
import silver from "../../assets/RankIcons/SILVER.png";
import gold from "../../assets/RankIcons/GOLD.png";
import platina from "../../assets/RankIcons/PLATINUM.png";
import esmeralda from "../../assets/RankIcons/EMERALD.png";
import diamante from "../../assets/RankIcons/DIAMOND.png";
import master from "../../assets/RankIcons/MASTER.png";
import grandmaster from "../../assets/RankIcons/GRANDMASTER.png";
import challenger from "../../assets/RankIcons/CHALLENGER.png";
import fundo1 from "../../assets/RankIcons/wings/borderIcon.png";
import InputPesquisa from "../../components/InputPesquisa";
import ButtonPesquisa from "../../components/ButtonPesquisa";
import PlayerCard from "../../components/PlayerCard";
import { LinearGradient } from "expo-linear-gradient";

interface Champion {
  id: string;
  title: string;
  tags?: string[] | null;
  key: string;
}

interface PlayerData {
  id: string;
  puuid: string;
}

interface UserMasteryData {
  championId: string;
}

function SearchPlayer() {
  const [playerName, setPlayerName] = useState("");
  const [message, setMessage] = useState(false);
  const [nameNotFound, setNameNotFound] = useState(false);
  const [playerData, setPlayerData] = useState<PlayerData>({
    id: "",
    puuid: "",
  });
  const [userRankData, setUserRankData] = useState([]);
  const [userMasteryData, setUserMasteryData] = useState<UserMasteryData[]>([]);
  const [campeoesJson, setCampeoesJson] = useState<Record<string, Champion>>(
    {}
  );
  const [nomeCampeao, setNomeCampeao] = useState("");

  useEffect(() => {
    buscaCampeoes();
  }, []);

  useEffect(() => {
    if (playerData.id) {
      buscaRanks();
      buscaMaestria();
    }
  }, [playerData]);

  useEffect(() => {
    if (userMasteryData[0]) {
      setNomeCampeao("");
      buscarIdPeloKey(userMasteryData[0].championId);
    }
  }, [userMasteryData[0]]);

  const buscaCampeoes = () => {
    getChampions()
      .then((response) => {
        setCampeoesJson(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarIdPeloKey = (chave: string) => {
    for (const id in campeoesJson) {
      if (campeoesJson[id].key == chave) {
        setNomeCampeao(id);
      }
    }
    return null;
  };

  const buscaNome = () => {
    getSummonerByName(playerName)
      .then((response) => {
        setPlayerData(response.data);
        setNameNotFound(false);
        setPlayerName("");
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log(error);
          setNameNotFound(true);
          setPlayerData({ id: "", puuid: "" });
        }
      });
  };

  const buscaRanks = () => {
    if (playerData != undefined) {
      getRanks(playerData.id)
        .then((response) => {
          setUserRankData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const buscaMaestria = () => {
    if (playerData != undefined) {
      getMastery(playerData.puuid)
        .then((response) => {
          setUserMasteryData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleButtonClick = () => {
    if (playerName == "") {
      setMessage(true);
      return;
    } else {
      setMessage(false);
    }
    buscaNome();
  };

  const winRate = (win: number, lose: number): React.ReactNode => {
    if (win === 0 && lose === 0) {
      return "N/A";
    }
    const result = (win / (win + lose)) * 100;
    return `Winrate ${result.toFixed(2)}%`;
  };

  function getTierImage(tier) {
    switch (tier.toUpperCase()) {
      case "IRON":
        return iron;
      case "BRONZE":
        return bronze;
      case "SILVER":
        return silver;
      case "GOLD":
        return gold;
      case "PLATINUM":
        return platina;
      case "EMERALD":
        return esmeralda;
      case "DIAMOND":
        return diamante;
      case "MASTER":
        return master;
      case "GRANDMASTER":
        return grandmaster;
      case "CHALLENGER":
        return challenger;
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#091428", "#042a41"]} style={styles.gradient}>
        <ScrollView style={styles.pesquisa}>
          <InputPesquisa
            playerName={playerName}
            setPlayerName={setPlayerName}
          />
          <ButtonPesquisa handleButtonClick={handleButtonClick} />
          {message && (
            <Text style={{ color: "red" }}>O nome não pode ser vazio</Text>
          )}
          {nameNotFound && (
            <Text style={{ color: "red" }}>Jogador não encontrado</Text>
          )}
          {Boolean(playerData.id) && (
            <PlayerCard
              fundo1={fundo1}
              getTierImage={getTierImage}
              nomeCampeao={nomeCampeao}
              playerData={playerData}
              userRankData={userRankData}
              winRate={winRate}
            />
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default SearchPlayer;
