import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  value: string | number;
  onPress: (value: string | number) => void;
}

const Button: React.FC<ButtonProps> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 5,
    height: 60,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Button;