import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View stle={[ styles.flagpole, props.bigger ? styles.flagpoleBigger : null ]}/>
            <View stle={[ styles.flag, props.bigger ? styles.flagBigger : null ]}/>
            <View stle={[ styles.base1, props.bigger ? styles.base1Bigger : null ]}/>
            <View stle={[ styles.base2, props.bigger ? styles.base2Bigger : null ]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    flag: {
        position: 'absoulte',
        height: 5,
        width: 6,
        backgroundColor: '#f22'

    },
    flagpole: {
        position: 'absoulte',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,

    },
    base1: {
        position: 'absoulte',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absoulte',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    flagBigger: {
        position: 'absoulte',
        height: 10,
        width: 14,
        backgroundColor: '#f22',
        marginLeft: 3

    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 16

    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24
    },
})