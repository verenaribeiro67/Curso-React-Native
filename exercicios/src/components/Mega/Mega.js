import React, { Component} from 'react'
import { Text, TextInput, Button, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'
import MegaNumero from '../MegaNumero'

export default class Mega extends Component {

    state = {
        qteNumeros: this.props.qteNumeros,
        numeros: []
    }
    
    alterarQteNumero =(qte) => {
        this.setState({ qteNumeros: +qte })
    }

    gerarNumeros = () => {

        const { qteNumeros} = this.state
        const numeros = []
        
        for(let i = 0; i < qteNumeros; i++){
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a,b) => a - b) 
        this.setState({ numeros })

        {/*const numeros = Array(this.state.qteNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
        .sort((a,b) => a - b) 
        .setState({ numeros })*/}
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(
            num => {
                return <MegaNumero key={num} num={num}/>
            })
    }

        render() {
            return (
                <>
                <Text style={Estilo.txtG}>
                Gerador de Mega-Sena 
                </Text>
                <TextInput
                keyboardType={'numeric'}
                style={{ borderBottomWidth: 1, marginBottom: 20, marginTop: 20}}
                placeholder='Quantidade de Números'
                value={`${this.state.qteNumeros}`}
                onChangeText={this.alterarQteNumero}
                />

                <Button
                title='Gerar'
                onPress={this.gerarNumeros}
                style={style.Botao}
                color='#000'
                />
                

                <View style={style.ContainerNumeros}>
                {this.exibirNumeros()}
                </View>

                {/*<Text style={Estilo.txtM}>
                    {this.state.numeros.join(',')}</Text>
                */}
            </>
            )
        }

}

const style = StyleSheet.create({
    ContainerNumeros: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20
    },
    Botao: {
        backgroundColor: '#000'
    }
})