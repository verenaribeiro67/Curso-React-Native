import React, { useState, Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


const InformaNome = () => {

    const [nome, setNome] = useState('')

    const exibeNome = () => {

    }


    return (
       <View>

           <TextInput
               style={styles.txtInput}
               placeholder='Informe o seu nome'
               onChangeText={newName => setNome(newName)}
               defaultValue={nome}
          />

           <TouchableOpacity
               style={styles.btEnviar}
               onPress={exibeNome}>

               <Text style={styles.txtComecar}>Começar</Text>

           </TouchableOpacity>

           {exibeNome()}
       </View>
    )
}

const styles = StyleSheet.create({
    txtInput: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        fontSize: 20,
        borderBottomColor: '#7c7c7a',
        borderBottomWidth: 2
    },
    btEnviar: {
        backgroundColor: '#1e9dcc',
        padding: 15,
        marginTop: 10,
        marginHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center'
    },
    txtComecar: {
        color: '#fff'
    }
})

export default InformaNome