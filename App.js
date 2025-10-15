import React, {useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Bruce');
  const [age, setAge] = useState(25);

  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput 
      style={styles.input}
      placeholder='Bruce Wayne'
      onChangeText={(e)=> setName(e)}/>
      <Text>Enter your age:</Text>
      <TextInput 
      keyboardType='number-pad'
      style={styles.input}
      placeholder='21'
      onChangeText={(e)=> setAge(e)}/>
        <Text style={styles.boldText}>Hello {name}, you are {age} years old</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText:{
    fontWeight:'bold',
  },
  buttonContainer:{
    backgroundColor: "lightgrey",
    marginTop: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,

  },

});
