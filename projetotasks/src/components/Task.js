import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback, Dimensions,
    TouchableOpacity, Modal, Alert, Button, TouchableHighlight,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import commonStyles from '../commomStyles'

export default props => {

    const doneOrNotStyle = props.doneAt != null ? {textDecorationLine: 'line-through'} : {};
    const [modalVisible, setModalVisible] = useState(false)
    const [showBox, setShowBox] = useState(true);
    const screenWidth = Dimensions.get('window').width

    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right}
                              onPress={()=>props.onDelete && props.onDelete(props.id)}>
                <Icon name='trash' size={30} color={'#FFF'} />
            </TouchableOpacity>
        )
    }

    const getLeftContent = () => {
        return (

            <View style={styles.left}>
                <Icon name='trash' size={20} color={'#FFF'} style={styles.excludeIcon} />
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        )
    }


    const confirmDeleteTask = () => {
        return Alert.alert(
            'Excuir Tarefa',
            'Deseja excluir a tarefa',
            [
                {text: 'Não', onPress: () => console.log('Deletado'), style: 'cancel'},

                {text: 'Sim', onPress: () => props.onDelete(props.id), style: 'cancel'},

            ]
        );
    }

    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}>

            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>

                    <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                    </View>

                    <View style={styles.right}>
                        <TouchableHighlight onPress={ () => confirmDeleteTask()} style={styles.right}>
                            <Icon name='trash' size={20} color='#fff'/>
                        </TouchableHighlight>
                    </View>

                </View>
            </View>
         </Swipeable>
    )
}


function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View>
                <View style={styles.done}>
                    <Icon name="check" size={20} color='#FFF' />
                </View>
            </View>
        )

    } else {
        return (
            <View style={styles.pending}></View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'#AAA',
        borderWidth:1,
        alignItems:'center',
        paddingVertical:10,
        backgroundColor:'#FFF',
    },
    checkContainer:{
        width:'20%',
        alignItems: 'center',
        justifyContent:'center',
    },
    pending:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done:{
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems:'center',
        justifyContent: 'center'
    },
    desc:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    date:{
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12
    },
    right:{
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent:'center'

    },
    left:{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems:'center'
    },
    excludeText:{
        fontFamily: commonStyles.fontFamily,
        color:'#000',
        fontSize: 20,
        margin:10,
    },
    excludeIcon:{
        marginLeft: 10,
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteBox: {
        backgroundColor: '#ff0000'
    }
})
