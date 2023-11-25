import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  Background: {
    flex: 1,
    height: 560,
    marginBottom: 20,
  },
  icone: {
    marginBottom: 270,
    alignItems: "center",
  },
  playerIcon: {
    width: 72,
    height: 70,
    borderRadius: 28,
    marginTop: -40,
  },
  borda: {
    width: 110,
    height: 115,
    position: "absolute",
    zIndex: 1,
    marginTop: -60,
  },
  nomeLevel: {
    alignItems: "center",
    marginBottom: 15,
  },
  nome: {
    fontFamily: "BeaufortforLOLBold",
    fontSize: 25,
    color: "#C8AA6E",
    paddingTop: 15
  },
  level: {
    fontFamily: "BeaufortforLOLRegular",
    fontSize: 18,
    color: "#fff",
  },
  rankContainer: {
    alignItems: "center",
  },
  rankAndTier: {
    fontFamily: "BeaufortforLOLRegular",
    fontSize: 16,
    color: "#fff",
  },
  rankIcon: {
    width: 120,
    height: 120,
    marginTop: -10
  },
  winLoss: {
    fontFamily: "BeaufortforLOLRegular",
    fontSize: 16,
    color: "#fff",
  },
  winrate: {
    fontFamily: "BeaufortforLOLRegular",
    fontSize: 16,
    color: "#fff",
    paddingBottom: 20
  },
  shadow: {
    backgroundColor: "rgba(10, 9, 9, 0.7)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 4,
    paddingBottom: 12
  },
});

export default styles;
