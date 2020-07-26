import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export const PalettePreview = ({handlePress, colorPalette}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={item => item.colorName}
        horizontal={true}
        renderItem={({item}) => (
          <View style={[{backgroundColor: item.hexCode}, styles.box]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  list: {
    marginBottom: 20,
  },
});
