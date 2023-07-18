import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface DisplayProps {
  value: string;
}

const { width } = Dimensions.get('window');

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    width: width * 0.9, // Adjust the width as needed
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    height: 100,
  },
  displayText: {
    fontSize: 36,
  },
});

export default Display;