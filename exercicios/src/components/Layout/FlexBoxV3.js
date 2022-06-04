import React from 'react'
import Quadrado from './Quadrado'
import { Text, View, StyleSheet } from 'react-native'

export default props => { 
   
    return(
    <View style={style.FlexV3}>
        
        <Quadrado/>
        <Quadrado cor='#F00' lado={20}/>
        <Quadrado cor='#0F0' lado={20}/>
        <Quadrado cor='#00F' lado={20}/>
        <Quadrado cor='#EE0' lado={20}/>

    </View>
    
    )
}

const style = StyleSheet.create({

    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: '#E50'
    }
})