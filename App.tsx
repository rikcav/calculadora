import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calculator from './src/components/Calculator';

const App: React.FC = () => {
  return (
    <View style={styles.app}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;