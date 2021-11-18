import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TextInput, Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import imagem from '../assets/favicon.png';
import { useNavigation } from '@react-navigation/native'

//  import Input from './componentes/input'     
// Linha 5 estou importando do Input,js


export default function App() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    useEffect(() => {
        console.log(`email : ${email} - senha: ${senha}`)
    }
        , [email, senha])

    return (
        <View style={styles.container}>

            <Image source={imagem} style={styles.img} />

            <TextInput style={styles.inputstyle} placeholder="email" value={email} onChangeText={(text) => setEmail(text)} />


            <TextInput style={styles.inputstyle} secureTextEntry={true} placeholder="Senha" value={senha} onChangeText={(text) => setSenha(text)} />


            <TouchableOpacity
                onPress={() => navigation.navigate('Dados', { email, senha })}
                accessibilityLabel="Learn more about this purple button" style={styles.botao} > Entrar </TouchableOpacity>

            <Text style={styles.texto}> Desenvolvido por: PH Produções </Text>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputstyle: {
        backgroundColor: '#fff',
        margin: 10,
        width: 250,
        // comprimento do input
        height: 40,
        // altura
        paddingStart: 10,
        // espaço do input
        borderRadius: 10,
        // deixando a borda do input redonda
    },
    img: {
        height: 100,
        width: 100,


    },

    botao: {
        backgroundColor: '#262626',
        height: 50,
        width: 250,
        color: '#fff',
        // color é pra letra
        alignItems: 'center',
        // centraliza a letra
        justifyContent: 'center',
        // coloca no meio de baixo pra cima
        borderRadius: 10,
    },


    texto: {
        justifyContent: 'stretch',
        color: '#000'





    },




});

