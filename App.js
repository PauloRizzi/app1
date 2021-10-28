import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput , Image, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import imagem from './assets/favicon.png';

//  import Input from './componentes/input'     
// Linha 5 estou importando do Input,js


export default function App() {



  return (
    <View style={styles.container}>

      <Image source={ imagem } style={styles.img}   />        

      <TextInput style={styles.inputstyle}    placeholder="email"    >       
      </TextInput>

      <TextInput style={styles.inputstyle} placeholder="Senha" >       
      </TextInput>
     
      <TouchableOpacity
      onPress={()=>{}} title="Learn More" 
      accessibilityLabel="Learn more about this purple button" style={styles.botao} > Entrar </TouchableOpacity>
      
    

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

  inputstyle:{
    backgroundColor: '#fff',
    margin: 10,
    width: 250, 
// comprimento do input
    height: 40,
    // altura
    paddingStart: 10,
    // espaço do input
    borderRadius: 10 ,
    // deixando a borda do input redonda
   },
   img:{
    height:100,
    width: 100,


   },

   botao:{
    backgroundColor: '#262626',
    height: 50,
    width: 250,
    color: '#fff',
    // color é pra letra
    alignItems: 'center',
    // centraliza a letra
    justifyContent: 'center',
    // coloca no meio de baixo pra cima
    borderRadius: 10 ,




   },




});

