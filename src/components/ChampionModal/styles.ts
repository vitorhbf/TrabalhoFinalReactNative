import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carregamento: {
    marginTop: "50%",
  },
  modalContainer: {
    marginTop: 100,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: 'rgba(6, 15, 30, 95)',
    borderRadius: 16,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 30,
    shadowOpacity: 1,
    borderWidth: 2,
    borderColor: '#C89B3C',
  },
  texto: {
    color: "#F0E6D2",
    fontFamily: "BeaufortforLOLRegular",
    marginBottom: 10,
    textAlign: "center",
  },
  habilidades: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center"
  }
});

export default styles;
