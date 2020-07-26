import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ColorBox = ({colorName, colorHex}) => {
  const boxColor = {
    backgroundColor: colorHex,
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingTop: 40,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    box: {
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: colorHex,
    },
    boxText: {
      color:
        parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
          ? 'black'
          : 'white',
      fontWeight: 'bold',
    },
  });
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>
        {colorName}: {colorHex}
      </Text>
    </View>
  );
};
