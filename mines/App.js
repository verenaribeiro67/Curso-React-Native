import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import params from './src/params'
import Field from './src/components/Field';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.board}>iniciando o Mines</Text>
       <Text style={styles.board}>Tamanho da Grade {params.getRowsAmount()} x {params.getColumnsAmount()}
       </Text>
       <Field oepened/>
       <Field oepened nearMines={1}/>
       <Field mined oepened explosed/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})