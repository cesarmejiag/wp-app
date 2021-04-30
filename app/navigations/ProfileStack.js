import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './../components/Header'
import Profile from './../screens/Profile/Profile'
import Login from './../screens/Profile/Login'
import RegisterData from './../screens/Profile/RegisterData'
import UserLogged from "../screens/Profile/UserLogged";
import UserProfile from "../screens/Profile/UserProfile";

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({ scene, previous, navigation }) => {
                    const { options } = scene.descriptor;
                    const title =
                        options.headerTitle !== undefined
                            ? options.headerTitle
                            : options.title !== undefined
                                ? options.title
                                : scene.route.name;

                    return (
                        <Header
                            title={title}
                            leftButton={previous}
                            navigation={navigation}
                            style={options.headerStyle}
                            profileScreen={true} />
                    )
                }
            }}>
            <Stack.Screen
                name="profile"
                component={Profile}
                options={{ title: 'Mi perfil' }} />
            <Stack.Screen name="register-mail">
                {props => <RegisterData {...props} label="¿Cual es tu mail?" nextScreen="register-name" type="email" />}
            </Stack.Screen>
            <Stack.Screen name="register-name">
                {props => <RegisterData {...props} label="¿Cual es tu nombre?" nextScreen="register-password" type="name" />}
            </Stack.Screen>
            <Stack.Screen name="register-password">
                {props => <RegisterData {...props} label="¿Cual es tu contraseña?" type="password" />}
            </Stack.Screen>
            <Stack.Screen
                name="login"
                component={Login}
                options={{ title: 'Iniciar sesión' }} />
            <Stack.Screen
                name="user-logged"
                component={UserLogged}/>
            <Stack.Screen
                name="user-profile"
                component={UserProfile}/>
        </Stack.Navigator>
    );
}

export default ProfileStack
