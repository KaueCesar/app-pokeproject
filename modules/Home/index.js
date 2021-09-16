import {SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from '../../Card';
import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function request() {
      await axios
        .get(API)
        .then(function (response) {
          setPokemons(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    request();
    setLoading(false);
  }, [pokemons]);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <ScrollView>
          {pokemons.map(item => (
            <Card object={item} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
