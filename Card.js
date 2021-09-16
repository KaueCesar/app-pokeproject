import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';

const Card = ({...props}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(props.object.url);
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
