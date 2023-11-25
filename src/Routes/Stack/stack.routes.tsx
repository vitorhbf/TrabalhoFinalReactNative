import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../screens/Login';
import Cadastro from '../../screens/Cadastro';
import { BottomTabRoutes } from '../BottomTabNav';



const StackNav = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <StackNav.Navigator screenOptions={{ headerShown: false }}>
            <StackNav.Screen name='Login' component={Login} />
            <StackNav.Screen name='BottomTabRoutes' component={BottomTabRoutes} />
            <StackNav.Screen name='Cadastro' component={Cadastro} />
        </StackNav.Navigator>
    )
}