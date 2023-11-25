import React, { useRef, useEffect, useState, useContext } from "react";
import { Image, Animated, Dimensions, ScrollView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import LoLIcon from "../../assets/LoginIcons/LoLIcon.png";
import gifMf from "../../assets/LoginIcons/gifMf.gif";
import riotLogo from "../../assets/LoginIcons/riotLogo.png";
import classificacao from "../../assets/LoginIcons/classificacao.png";
import LeagueLogo from "../../assets/LoginIcons/logoLeague.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../contexts/auth";
import LoginHeader from "../../components/LoginHeader";
import LoginContainer from "../../components/LoginContainer";
import LoginFooter from "../../components/LoginFooter";

const { width } = Dimensions.get("window");

export default function Login({ navigation }) {
  const moveValue = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { setLoggedUser } = useContext(AuthContext);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveValue, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  }, [moveValue]);

  const move = moveValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0],
  });

  const validateEmail = (text) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
    setIsEmailValid(isValid);
    return isValid;
  };

  const validatePassword = (text) => {
    const isValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        text
      );
    setIsPasswordValid(isValid);
    return isValid;
  };

  const verifyLogin = async (enteredEmail, enteredPassword) => {
    const storedUser = await AsyncStorage.getItem(`user_${enteredEmail}`);
    if (storedUser !== null) {
      const user = JSON.parse(storedUser);
      if (user.email === enteredEmail && user.password === enteredPassword) {
        return user;
      }
    }
    return null;
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      Alert.alert(
        "Erro de Validação",
        "Por favor, verifique os campos e tente novamente."
      );
      return;
    }

    const user = await verifyLogin(email, password);
    if (user) {
      setLoggedUser(user);
      setEmail("");
      setPassword("");
      navigation.navigate("BottomTabRoutes");
    } else {
      Alert.alert(
        "Erro de Login",
        "E-mail ou senha incorretos. Por favor, tente novamente."
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#091428", "#042a41"]} style={styles.gradient}>
        <Animated.View
          style={[
            styles.animatedLine,
            {
              height: 2,
              width,
              transform: [{ translateY: 0 }, { translateX: move }],
            },
          ]}
        />

        <LoginHeader LoLIcon={LoLIcon} styles={styles} />

        <LoginContainer
          email={email}
          handleLogin={handleLogin}
          isPasswordVisible={isPasswordVisible}
          navigation={navigation}
          password={password}
          setEmail={setEmail}
          setIsPasswordVisible={setIsPasswordVisible}
          setPassword={setPassword}
          styles={styles}
          validateEmail={validateEmail}
          validatePassword={validatePassword}
        />

        <Image source={gifMf} style={styles.gifImage} />

        <LoginFooter
          LeagueLogo={LeagueLogo}
          classificacao={classificacao}
          riotLogo={riotLogo}
          styles={styles}
        />
      </LinearGradient>
    </ScrollView>
  );
}
