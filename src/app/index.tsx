import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Quiz data: True/False geography questions
const questions = [
  {
    text: 'Canberra is the capital of Australia.',
    answer: true,
  },
  {
    text: 'The Amazon River is the longest river in the world.',
    answer: false,
  },
  {
    text: 'Mount Everest is located in the Himalayas.',
    answer: true,
  },
  {
    text: 'Russia is the largest country by land area.',
    answer: true,
  },
  {
    text: 'The Sahara Desert is located in South America.',
    answer: false,
  },
  {
    text: 'Japan is made up of over 6,000 islands.',
    answer: true,
  },
  {
    text: 'The Great Wall of China is visible from space with the naked eye.',
    answer: false,
  },
  {
    text: 'Africa has more countries than any other continent.',
    answer: true,
  },
  {
    text: 'Iceland is covered mostly in ice.',
    answer: false,
  },
  {
    text: 'The Pacific Ocean is the largest ocean on Earth.',
    answer: true,
  },
];

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const currentQuestion = questions[currentIndex];

  // Handle True/False button press
  const handleAnswer = (userAnswer: boolean) => {
    if (userAnswer === currentQuestion.answer) {
      Alert.alert('Correct!', 'Great job!', [
        {
          text: 'OK',
          onPress: () => {
            // Advance to next question (wrap around)
            setCurrentIndex((prev) => (prev + 1) % questions.length);
          },
        },
      ]);
    } else {
      Alert.alert('Incorrect!', 'Try again.');
    }
  };

  // Navigate to previous question (wraps around)
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? questions.length - 1 : prev - 1
    );
  };

  // Navigate to next question (wraps around)
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  // Navigate to cheat screen, passing the current answer
  const handleCheat = () => {
    router.push({
      pathname: '/cheat',
      params: { answer: String(currentQuestion.answer) },
    });
  };

  return (
    <View style={styles.container}>
      {/* Question text centered in the screen */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>
      </View>

      {/* True / False buttons */}
      <View style={styles.answerRow}>
        <TouchableOpacity
          style={styles.answerButton}
          onPress={() => handleAnswer(true)}
        >
          <Text style={styles.buttonText}>TRUE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.answerButton}
          onPress={() => handleAnswer(false)}
        >
          <Text style={styles.buttonText}>FALSE</Text>
        </TouchableOpacity>
      </View>

      {/* Prev / Next buttons with icons */}
      <View style={styles.navRow}>
        <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
          <Ionicons name="caret-back" size={18} color="#FFFFFF" />
          <Text style={styles.buttonText}>PREV</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Text style={styles.buttonText}>NEXT</Text>
          <Ionicons name="caret-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Cheat button */}
      <TouchableOpacity style={styles.cheatButton} onPress={handleCheat}>
        <Text style={styles.buttonText}>CHEAT</Text>
      </TouchableOpacity>
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
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
  },
  answerRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  navRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cheatButton: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 60,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
