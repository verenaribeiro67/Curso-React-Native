import React from 'react'
import { Button } from 'react-native'

export default props => {

    const executar = () => {
        console.warn('Executar Função #01')
    }

    return (

            <>
            <Button
            title='Executar #01'
            onPress={executar}
            />
            
            <Button
            title='Executar #02'
            onPress={ function(){
                console.warn('Executar Função #02')
            }}
            />


            <Button
            title='Executar #03'
            onPress={() => console.warn('Executar Função #03')}
            />

        </>
    )
}