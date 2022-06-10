import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import checkImage from '../../assets/imgs/check.png'
import commomStyles from '../commomStyles'
import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {

    const doneOrNotStyle = props.doneAt != null ?
        {textDecorationLine: 'line-through'} : { }

    const date = props.doneAt ? props.doneAt : props.estimateAt

    const formattedDate = moment(props.estimateAt).locale('pt-br').format('ddd,D [de] MMMM, YYYY')

    return (
        <View style={styles.container}>

            <View styles={styles.CheckContainer}>
                {getCheckView(props.doneAt)}
            </View>

            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>


        </View>
    )
}

function getCheckView(doneAt){
    if (doneAt != null ){
        return(
            <View style={styles.done}>
                <Text>OK</Text>
            </View>
        )
    }
        else {
        return(
            <View style={styles.pending}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
         flexDirection: 'row',
         borderColor: '#AAA',
         borderBottomWidth: 1,
         alignItems: 'center',
         paddingVertical: 10
    },
    CheckContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
        margin: 20
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        margin: 20,
        backgroundColor: '#52a40f',
        justifyContent: 'center'
    },
    checkImg: {
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    desc: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.mainText,
        fontSize: 15
    },
    date: {
    fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.subtext,
        fontSize: 12
    }
})