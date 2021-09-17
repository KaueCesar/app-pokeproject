import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({...props}) => {

  const nav = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          nav.navigate('Details', {
            url: props.object.url,
          });
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: '#777',
          }}>
          <Text style={{fontSize: 24}}>{props.object.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;
