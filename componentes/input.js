import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput ,StyleSheet, Text, View } from 'react-native';


export default function comp1(){

    return(
      <TextInput style={styles.inputstyle} >       
      </TextInput>



    )
}

const styles = StyleSheet.create({
inputstyle:{
 backgroundColor: '#f00'
}


    })