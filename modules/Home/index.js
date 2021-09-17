import {SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from '../../Card';
import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        const response = await axios.get(API);
        setPokemons(response.data.results);
      } catch (error) {
        console.log('Deu erro', error);
      }
    }
    bootstrap();
  }, [pokemons]);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <ScrollView>
          {pokemons.map((item, key) => (
            <Card key={item.name} object={item} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
