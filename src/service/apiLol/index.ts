import axios from "axios";

const API_KEY = "RGAPI-8459650b-bf04-491d-a66e-9e2dea921529";

const apiLol = axios.create({
  baseURL: "https://br1.api.riotgames.com",
});

const campeoes = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com/"
})

export const getChampions = () =>{
    const url = "cdn/13.22.1/data/pt_BR/champion.json"

    return campeoes.get(url);
}

export const getChampionsStats = (championName) =>{
  const url = `cdn/13.22.1/data/pt_BR/champion/${championName}.json`

  return campeoes.get(url);
}

export const getSummonerByName = (nome) => {
  const url = `/lol/summoner/v4/summoners/by-name/${nome}?api_key=${API_KEY}`;

  return apiLol.get(url);
};

export const getRanks = (id) => {
  const url = `/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`;

  return apiLol.get(url);
};

export const getMastery = (puuid) => {
  const url = `/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?api_key=${API_KEY}`;

  return apiLol.get(url);
};

export const getChampionRotation = () =>{
  const url = `/lol/platform/v3/champion-rotations?api_key=${API_KEY}`;

  return apiLol.get(url)
}
