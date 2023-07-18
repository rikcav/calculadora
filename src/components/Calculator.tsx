import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import Display from './Display';

const Calculator: React.FC = () => {
  const [memory, setMemory] = useState<number>(0);
  const [displayValue, setDisplayValue] = useState<string>('0');

  const handleButtonClick = (value: string | number) => {
    if (value === '=') {
      // Realizar o cálculo e exibir o resultado no display
      try {
        const result = eval(displayValue).toString();
        setDisplayValue(result);
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === 'C') {
      // Limpar a calculadora
      setDisplayValue('0');
    } else if (value === 'M+') {
      // Adicionar o valor do display à memória
      setMemory(memory + parseFloat(displayValue));
    } else if (value === 'MR') {
      // Exibir o valor da memória no display
      setDisplayValue(memory.toString());
    } else if (value === 'M-') {
      // Subtrair o valor do display da memória
      setMemory(memory - parseFloat(displayValue));
    } else {
      // Atualizar o valor no display com o botão pressionado
      setDisplayValue((prevValue) =>
        prevValue === '0' ? value.toString() : prevValue + value
      );
    }
  };

  return (
    <View style={styles.calculator}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button value="MC" onPress={handleButtonClick} />
        <Button value="MR" onPress={handleButtonClick} />
        <Button value="M+" onPress={handleButtonClick} />
        <Button value="M-" onPress={handleButtonClick} />
      </View>
      <View style={styles.buttons}>
        <Button value="7" onPress={handleButtonClick} />
        <Button value="8" onPress={handleButtonClick} />
        <Button value="9" onPress={handleButtonClick} />
        <Button value="/" onPress={handleButtonClick} />
      </View>
      <View style={styles.buttons}>
        <Button value="4" onPress={handleButtonClick} />
        <Button value="5" onPress={handleButtonClick} />
        <Button value="6" onPress={handleButtonClick} />
        <Button value="*" onPress={handleButtonClick} />
      </View>
      <View style={styles.buttons}>
        <Button value="1" onPress={handleButtonClick} />
        <Button value="2" onPress={handleButtonClick} />
        <Button value="3" onPress={handleButtonClick} />
        <Button value="-" onPress={handleButtonClick} />
      </View>
      <View style={styles.buttons}>
        <Button value="0" onPress={handleButtonClick} />
        <Button value="." onPress={handleButtonClick} />
        <Button value="=" onPress={handleButtonClick} />
        <Button value="+" onPress={handleButtonClick} />
        <Button value="C" onPress={handleButtonClick} />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    padding: 10,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Calculator;