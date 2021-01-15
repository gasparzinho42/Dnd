import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import style from './Style';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function Init() {
  const navigation = useNavigation();
  return (
    <>
      <View style={style.add}>
        <TouchableOpacity onPress={(evt) => navigation.navigate('Create')}>
          <Text style={style.plus}> New character + </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Init;
