import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  championsContainer: {
    paddingHorizontal: 15,
  },
  title: {
    color: "#fff",
    fontFamily: "BeaufortforLOLBold",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  },
  championCard: {
    marginBottom: 30,
    flexDirection: "row",
    gap: 15,
  },
  championImage: {
    width: 75,
    height: 75,
  },
  infos: {
    gap: 3
  },
  championName: {
    color: "#fff",
    fontFamily: "BeaufortforLOLRegular",
    fontSize: 15
  },
  roleImage: {
    width: 50,
    height: 50
  }
});

export default styles;
