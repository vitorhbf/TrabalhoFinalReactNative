import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    
  },
  Header: {
    backgroundColor: '#C89B3C',
    padding: 12
  },
  pesquisa:{
    paddingTop: 20,
    paddingHorizontal: 25
  },
  nome: {
    fontFamily: "BeaufortforLOLBold",
    fontSize: 25,
    color: "#fff",
  },
  nivel: {
    fontFamily: "BeaufortforLOLRegular",
  },
});

export default styles;
