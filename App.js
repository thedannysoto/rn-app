import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [myGoals, setMyGoals] = useState([]); 

  const addGoalHandler = goalTitle => {
    setMyGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setMyGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={myGoals} 
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
