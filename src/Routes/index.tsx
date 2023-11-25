import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabRoutes } from './BottomTabNav/index';
import { StatusBar } from 'react-native';
import StackRoutes from './Stack/stack.routes';
import AuthProvider from '../contexts/auth';


export const Routes = () => {
	return <NavigationContainer>
		<AuthProvider>
			<StatusBar backgroundColor="#000" barStyle="light-content" />
			<StackRoutes />
		</ AuthProvider>
	</ NavigationContainer>
}