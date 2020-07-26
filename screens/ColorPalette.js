import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {ColorBox} from '../components/ColorBox';

export const ColorPalette = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
      <FlatList
        data={route.params.colors}
        keyExtractor={(item, index) => `${index}-${item.colorName}`}
        renderItem={({item}) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
        ListHeaderComponent={
          <Text style={styles.text}>{route.params.paletteName}</Text>
        }
      />
    </View>
  );
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
});
