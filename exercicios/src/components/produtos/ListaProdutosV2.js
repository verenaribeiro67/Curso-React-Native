import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'


export default props => { 
    
    const produtoRender = ({ item: p} ) => {
        return <Text style={Estilo.txtM}>({p.id}) 
         {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
        <Text style={Estilo.txtG}>
        Lista de Produtos V2
        </Text>
        <FlatList 
        data={Produtos}
        keyExtratctor={i => `${i.id}`}
        renderItem={produtoRender}
        />
        </>
    
    )
}