import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Style';
var dragon = require('../../assets/dragon.png');

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={dragon} />
        <Text style={styles.title}> Sehunda </Text>
      </View>
    </>
  );
};
export default Header;
