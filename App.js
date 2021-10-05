import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';


export default function App() {
  return (
    <View>
    <View style={{padding:30,flexDirection: 'row',alignItems: 'center',justifyContent:"space-evenly"}}>
    <TextInput
      style={{
        height: 50,
        width:200,
        borderBottomColor:"black",
        borderBottomWidth:2,
        marginLeft:5,
        marginBottom:20
        
      }}
      placeholder="Enter Your name"
    />
    <Button title="Say Hi!" 
    style={{
      width:"10",
      height:"10"
    }}/>

    </View>
    <View>


    </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
