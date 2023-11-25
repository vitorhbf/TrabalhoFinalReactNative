import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";


export default function ButtonPesquisa({handleButtonClick}) {
  return (
    <TouchableOpacity
        style={styles.button}
        onPress={handleButtonClick}
      >
        <Text style={styles.texto}>Buscar</Text>
      </TouchableOpacity>
  );
}
