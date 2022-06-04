import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Membro from './Membro'
import Estilo from '../estilo'


export default props => { 
    return(
<>
    <Text style={Estilo.txtG}>Membros da família:</Text>
    {props.children}
    <Text style={Estilo.txtG}>--------</Text>
</>
    
    )
}