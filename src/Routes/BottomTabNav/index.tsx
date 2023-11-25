import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/index";
import PlayerSearch from "../../screens/SearchPlayer/index";
import InicialIcon2 from "../../assets/caraDoCapacete.png";
import Header from "../../components/Header";
import { FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  PlayerSearch: {};
  Home: {};
};

export function BottomTabRoutes({ navigation }) {
  return (
    <>
      <Header navigation={navigation}/>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#000", paddingBottom: 2, borderColor: "#000"},
          tabBarActiveTintColor: "#fff",
		  tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          options={{
			
            tabBarIcon: ({ color }) => (
				<FontAwesome name="home" size={18} color={color}/>
            ),
			
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Buscar Jogador",
            tabBarIcon: ({ color }) => (
              <Image
                resizeMode="contain"
                source={InicialIcon2}
                style={{ tintColor: color, width: 30 }}
              />
            ),
          }}
          name="PlayerSearch"
          component={PlayerSearch}
        />
      </Tab.Navigator>
    </>
  );
}
