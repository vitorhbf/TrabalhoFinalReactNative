import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#C89B3C",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  greetings: {
    fontFamily: "BeaufortforLOLBold",
    color: "#fff",
    fontSize: 15,
  },
  userWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  centerImage: {
    width: 50,
    height: 50,
  },
});

export default styles;
