import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'


export default props => { 
    return(
    <>
    <Text style={Estilo.txtG}>{props.a}</Text>
    <Text style={Estilo.txtG}>{props.b}</Text>
    </>
    )
}