import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {PalettePreview} from '../components/PalettePreview';

export const Home = ({navigation, route}) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchColorPalettes = async () => {
    const results = await fetch(
      'https://gist.githubusercontent.com/ali-nr/a9e76048ddbf790faeb20b786bd742d6/raw/ce73c34f24362298493fc28354b783ee03d6a588/color-palettes',
    );
    if (results.ok) {
      const palettes = await results.json();
      setColorPalettes(palettes);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes(palettes => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={item => item.paletteName}
        renderItem={({item}) => (
          <PalettePreview
            handlePress={() => {
              navigation.push('ColorPalette', {
                paletteName: item.paletteName,
                colors: item.colors,
              });
            }}
            colorPalette={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate('ColorPaletteModal')}>
            <Text style={styles.buttonText}>Add a new color palette</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
});
