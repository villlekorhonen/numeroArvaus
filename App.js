import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

let secret;
let guesses;

export default function App() {

  const [input, setInput] = useState('');
  const [guidance, setGuidance] = useState('');

  const init = () => {
    setGuidance('Guess a number between 1-100');
    guesses = 0;
    secret = Math.floor(Math.random() * 100) + 1;
    console.log('Secret:', secret);
  }

  useEffect(() => {
    init();
  }, [])

  const makeGuess = () => {
    const guess = Number(input);
    console.log('Guess:', guess);
    guesses++;
    if (guess < secret) {
      setGuidance(`Your guess ${guess} is too low`);
    } else if (guess > secret) {
      setGuidance(`Your guess ${guess} is too high`);
    } else {
      Alert.alert('🏆Congratulation!!!🏆',
        `You guessed the number in ${guesses} guesses`);
      init();
    }
    setInput('');
    
  }

  return (


    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style= {styles.title}>{guidance}</Text>
      </View>
      <TextInput style={styles.input} value={input} keyboardType='numeric' onChangeText= {text => setInput(text)}></TextInput>
      <TouchableOpacity style={styles.TouchableOpacity} title='MAKE GUESS' onPress={makeGuess}>
        <Text style={styles.text}>Make Guess</Text>
      </TouchableOpacity>
      </View>
  );
}
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'olive',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems:'center',
    justifyContent: 'center',
    width:'60%',
    margin: 20
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: 'lightgreen',
    borderRadius: 50,
    width: '90%',
    textAlign: 'center',
    borderColor: 'darkgreen',
    borderWidth: 4,
    paddingVertical: 20,
    
    
    
  },

input: {
  borderColor:'darkgreen' ,
  borderWidth: 5,
  width: '30%',
  height: '13%',
  margin:50,
  fontSize: 25,
  backgroundColor: 'lightgreen',
  fontWeight: 'bold',
  textAlign: 'center'
  

  },
  TouchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 60,
    borderWidth: 4,
    backgroundColor: 'lightgreen',
    borderColor: 'darkgreen',
    borderRadius: 40

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});