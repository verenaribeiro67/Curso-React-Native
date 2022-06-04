import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Estilo from './estilo'


export default props => { 


    const [nome, setNome] = useState('Teste')

    return(
    <View>
    <Text>{nome}</Text>
    <TextInput
    placeholder='Digite o seu nome'
    value={nome}
    onChangeText={nome => setNome(nome)}
    />
    </View>
    
    )
}