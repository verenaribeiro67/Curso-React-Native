import React, { Component } from 'react'
import {
    ImageBackground,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert
} from 'react-native'
import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commomStyles'
import AuthInput from '../components/AuthInput'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: true
    }

    signinOrSignUp = () => {
        if(this.state.stageNew){
        Alert.alert('Sucesso', 'Criar a Conta')
        }
        else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    render () {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>

                <Text style={styles.title}>Tasks</Text>

                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>
                        {this.state.stageNew ? 'Crie a sua Conta' : 'Informe os seus dados'}
                    </Text>

                    {
                        this.state.stageNew &&
                        <AuthInput icon={user}
                                   placeholder='Nome'
                                   value={this.state.name}
                                   style={styles.input}
                                   onChangeText={name => this.setState({ name })}/>
                    }
                    <AuthInput icon={at}
                               placeholder='E-mail'
                               value={this.state.email}
                               style={styles.input}
                               onChangeText={email => this.setState({ email })}/>

                    <AuthInput icon={lock}
                               placeholder='Senha'
                               value={this.state.password}
                               secureTextEntry={true}
                               style={styles.input}
                               onChangeText={password => this.setState({ password })}/>

                    {
                        this.state.stageNew &&
                        <AuthInput icon={lock}
                                   placeholder='Confirmação de Senha'
                                   value={this.state.confirmPassword}
                                   style={styles.input}
                                   onChangeText={confirmPassword => this.setState({ confirmPassword })}/>
                    }

                    <TouchableOpacity onPress={this.signinOrSignUp}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> {this.state.stageNew ? 'Registrar' : 'Entrar'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ padding: 10 }}
                                  onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>
                    {this.state.stageNew ? 'Já possui Conta?' : 'Ainda não possui Conta?'}
                    </Text>
                </TouchableOpacity>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        width: '90%'
    },
    input: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: Platform.OS == 'ios' ? 20 : 0,
        borderRadius: 2

    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#fff',
        fontSize: 20,
        borderRadius: 2

    }
})
