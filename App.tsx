import React, { useEffect, useState } from 'react';
import SafeContainer from './components/SafeContainer';
import SearchBar from './components/SearchBar';
import PokemonGrid from './components/Grid';
import { PokeAPIService } from './services/PokeAPI';

const App = () => {
  const [pokemons, setPokemons] = useState([]); // Estado para armazenar os Pokémon
  const [loading, setLoading] = useState(true); // Estado para o indicador de carregamento
  const [error, setError] = useState(null); // Estado para erros

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia o carregamento
        const data = await new PokeAPIService().fetchAllPokemons(); // Chama a API
        setPokemons(data); // Atualiza o estado com os Pokémon
      } catch (err) {
        setError(err.message); // Atualiza o estado de erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchData(); // Chama a função
  }, []); // Executa apenas quando o componente monta

  if (loading) {
    return <SafeContainer>Carregando Pokémon...</SafeContainer>;
  }

  if (error) {
    return <SafeContainer>Erro: {error}</SafeContainer>;
  }

  return (
    <SafeContainer>
      <SearchBar />
      <PokemonGrid pokemons={pokemons} />
    </SafeContainer>
  );
};

export default App;