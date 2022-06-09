import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements'
import {TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="Userlist"
                screenOptions={screenOptions}>

                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={() => {
                        return{
                           title: "Lista de Usuários",
                            headerLeft: () => {
                               <Text>Olá</Text>
                            },
                            headerRight: () => (

                                <Button
                                type="clear"
                                icon={<Icon name="add" size={25} color="#FF0"/>}
                               />
                            )
                        }
                    }}
                />

                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#993399'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }


}