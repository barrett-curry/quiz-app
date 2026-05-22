import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CheatScreen() {
  const { answer } = useLocalSearchParams<{ answer: string }>();
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.container}>
      {/* Warning text */}
      <Text style={styles.warningText}>Are you sure you want to do this?</Text>

      {/* Show the answer if revealed */}
      {showAnswer && (
        <Text style={styles.answerText}>
          The answer is: {answer === 'true' ? 'True' : 'False'}
        </Text>
      )}

      {/* Show Answer button */}
      <Pressable
        style={styles.showButton}
        onPress={() => setShowAnswer(true)}
      >
        <Text style={styles.buttonText}>SHOW ANSWER</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 30,
  },
  warningText: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    position: 'absolute',
    top: 40,
  },
  answerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6A5ACD',
    textAlign: 'center',
  },
  showButton: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
