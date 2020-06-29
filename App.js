import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [myGoals, setMyGoals] = useState([]); 
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    setMyGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setMyGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput addGoalHandler={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
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
