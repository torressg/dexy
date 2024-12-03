import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PokemonBoxProps {
  number: number;
  name: string;
  onPress: () => void;
}

const PokemonBox: React.FC<PokemonBoxProps> = ({ number, name, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.pokemonNumber}>#{number}</Text>
      <Text style={styles.pokemonName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2D3748',
    borderRadius: 8,
    padding: 16,
    width: '30%',
    marginBottom: 16,
    alignItems: 'center',
  },
  pokemonNumber: {
    color: '#A0AEC0',
    fontSize: 12,
    marginBottom: 8,
  },
  pokemonName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PokemonBox;
