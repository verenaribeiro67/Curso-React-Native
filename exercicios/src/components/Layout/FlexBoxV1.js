import React from 'react'
import Quadrado from './Quadrado'
import { Text, View, StyleSheet } from 'react-native'

export default props => { 
   
    return(
    <View style={style.FlexV1}>
        
        <Quadrado/>
        <Quadrado cor='#F00'/>
        <Quadrado cor='#0F0'/>
        <Quadrado cor='#00F'/>
        <Quadrado cor='#EE0'/>

    </View>
    
    )
}

const style = StyleSheet.create({

    FlexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    }
})