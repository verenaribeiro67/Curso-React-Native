import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'http://localhost:3000/' : 'http://10.25.24.171:3000'

const showError = (err) => {
    let mensagem = 'Ocorreu uma falha ao tentar realizar o login!'
    if(err.response && err.response.data){
        mensagem = err.response.data;
    }
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${mensagem}`)
}

const showSuccess = (msg) => {
    Alert.alert('Sucesso!', msg)
}

export {server, showError, showSuccess}
