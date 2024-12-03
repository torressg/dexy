import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PokemonCard from '../PokemonBox';
import { PokemonModel } from '../../Models/PokemonModel';

interface PokemonGridProps {
  pokemons: PokemonModel[]; // Define que pokemons é uma lista de PokemonModel
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.grid}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            number={pokemon.id}
            name={pokemon.name}
            onPress={() => alert(`${pokemon.name} clicado!`)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default PokemonGrid;
