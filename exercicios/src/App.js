import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Mega from './components/Mega/Mega'
//import FlexBoxV4 from './components/Layout/FlexBoxV4'
//import FlexBoxV3 from './components/Layout/FlexBoxV3'
//import FlexBoxV2 from './components/Layout/FlexBoxV2'
//import FlexBoxV1 from './components/Layout/FlexBoxV1'
//import Quadrado from './components/Layout/Quadrado'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import UsuarioLogado from './components/UsuarioLogado'
//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/Membro'
//import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/Contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Botao from './components/Botao'
//import Contador from './components/Contador'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'


export default () => (
    <SafeAreaView style={style.App}>

         <Mega qteNumeros={6}/>
        
        {/* 

        <FlexBoxV4 />
        <DigiteSeuNome/>

         <ListaProdutosV2/>
         <ListaProdutos/>

         <UsuarioLogado usuario={{ nome: 'Verena', email: 'verena.cavalcante@ixcsoft.com.br'}}/>

        <UsuarioLogado usuario={{ nome: 'Teste'}}/>

        <UsuarioLogado usuario={{ email: 'teste@teste.com.br'}}/>

        <UsuarioLogado usuario={{}}/>
       
         <Familia>
            <Membro nome='Larissa' sobrenome='Queiroz'/>
            <Membro nome='Letícia' sobrenome='Queiroz'/>
        </Familia>

        <Familia>
            <Membro nome='Luiz' sobrenome='Queiroz'/>
            <Membro nome='Luciana' sobrenome='Queiroz'/>
        </Familia>

        <ParImpar num={3}/>    
        <Diferenciar/>
        <ContadorV2/>
        <Pai/>
        <Pai/>
        <Contador inicial={100} passo={17} />
        <Contador/>
        <Botao/>
        <Titulo principal='Cadastro do Produto'  secundario='Tela de Cadastro do Produto'/>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#00a86b'
    }

})