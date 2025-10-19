import React, {useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Bruce');
  const [age, setAge] = useState(25);
  const [people, setPeople] = useState([
    {name:"Shawn", key: '1'},
    {name:"Bruce", key: '2'},
    {name:"Peter", key: '3'},
    {name:"Robert", key: '4'},
    {name:"Jesse", key: '5'},
    {name:"Micheal", key: '6'},
    {name:"Robert", key: '7'},
    {name:"Jesse", key: '8'},
    {name:"Micheal", key: '9'},
    {name:"Robert", key: '10'},
    {name:"Jesse", key: '11'},
    {name:"Micheal", key: '12'},
  ]);
  const pressHandler = (key) =>{
    console.log(key);
    setPeople((prevPeople) =>{
      return prevPeople.filter(person => person.key != key);
    })
  }

  return (
    <View style={styles.container}>
      {/* <Text>Enter your name:</Text>
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
      <StatusBar style="auto" /> */}
      {/* <ScrollView>
      {people.map(item =>(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
      ))}
      </ScrollView> */}
      <FlatList
      numColumns={3}
      data={people}
      renderItem={({item})=>(
        <TouchableOpacity style={styles.item} onPress={()=> pressHandler(item.key)}>
        <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // boldText:{
  //   fontWeight:'bold',
  // },
  // buttonContainer:{
  //   backgroundColor: "lightgrey",
  //   marginTop: 20,
  // },
  // input:{
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200,

  // },
  item: {
  flex: 1,
  marginTop: 20,
  padding: 16,
  height: 200,
  backgroundColor: '#777',
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 10,
  borderRadius: 10,
},
itemText: {
  fontSize: 20,
  color: '#fff',
}



});
