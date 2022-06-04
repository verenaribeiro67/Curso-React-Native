import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'


export default props => { 
    
    function obterLista() {
        
        return Produtos.map( p => {
             return <Text style={Estilo.txtM} key={p.id}>
               {p.id} {p.nome} - R$ {p.preco}</Text>
        })
    }

    return (
        <>
        <Text style={Estilo.txtG}>
        Lista de Produtos
        </Text>
              {obterLista()}
        </>
    
    )
}