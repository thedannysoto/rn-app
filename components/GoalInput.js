import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    return(
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="My Goal" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
        <Button title="ADD" onPress={props.addGoalHandler.bind(this, enteredGoal)} />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      },
      input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
      }
})

export default GoalInput