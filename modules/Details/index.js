import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

const Details = () => {
  const {params} = useRoute();

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  const {url} = params;

  useEffect(() => {
    async function bootstrap() {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setPokemon(response.data);
      } catch (error) {
        console.log('Deu erro2', error);
      }
    }
    bootstrap();
    setLoading(false);
  }, [pokemon, url]);


  return (
    <SafeAreaView>
        {loading ? (
          <ActivityIndicator color="#000" size="large" />
          ) : (
          <ScrollView>
                <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  backgroundColor:'#444',
                }}>
                <Text style={{fontSize: 24}}>{pokemon.name}</Text>
              </View>

              <View style={{backgroundColor: '#777', widht: 150, height: 150}}>
                
              </View>
              
              <View style={{ 
                justifyContent: 'center',
                 alignItems: 'center',
                 marginTop: 20
                     }}>
                       <View style={{ 
                         backgroundColor: '#444',
                         width: 200,
                         height: 100,
                         }}>
                             <Text>Informações:</Text>
                           <View style={{justifyContent: 'space-around', flexDirection: 'row',}}>
                           <Text>Peso: {pokemon.weight}</Text>
                           <Text>Altura: {pokemon.height}</Text>
                             </View>
                             <Text>EXP Inicial: {pokemon.base_experience}</Text>

                       </View>
              </View>


      </ScrollView>
        )}
    </SafeAreaView>
  );
};

export default Details;
