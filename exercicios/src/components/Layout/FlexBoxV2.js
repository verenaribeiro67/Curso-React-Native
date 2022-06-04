import React from 'react'
import Quadrado from './Quadrado'
import { Text, View, StyleSheet } from 'react-native'

export default props => { 
   
    return(
    <View style={style.FlexV2}>
        
        <Quadrado/>
        <Quadrado cor='#F00'/>
        <Quadrado cor='#0F0'/>
        <Quadrado cor='#00F'/>
        <Quadrado cor='#EE0'/>

    </View>
    
    )
}

const style = StyleSheet.create({

    FlexV2: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: '#E50'
    }
})