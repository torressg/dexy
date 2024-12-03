import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Pokemon Name"
        placeholderTextColor="#AAAAAA"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 16,
    backgroundColor: '#2D3748',
  },
  searchInput: {
    backgroundColor: '#4A5568',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SearchBar;