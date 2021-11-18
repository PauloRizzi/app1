import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'



// Tela dos dados

const dados = () => {
  const route = useRoute();
  const navigation = useNavigation();   //pegando todos os modos do navigation
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dados</Text>
      <Text>{route.params.email}</Text>
      <Text>{route.params.senha}</Text>


       <TouchableOpacity
                // onPress={() => navigation.navigate('Login', {})}    
                onPress={() => navigation.goBack()}    
                title="Learn More"
                accessibilityLabel="Learn more about this purple button" style={styles.botao} > Voltar </TouchableOpacity> 

{/* <Button title = 'Voltar'
onPress = {() => navigation.goBack()}> 


</Button> */}


    </View>
  );
}

const styles = StyleSheet.create({

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


});


export default dados;