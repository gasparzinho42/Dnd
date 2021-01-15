import {StyleSheet} from 'react-native';
import {colors, fonts} from '../styles';

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontFamily:'Yeon Sung Regular',
    fontSize: fonts.large,
    marginRight: 10,
    fontWeight:'100'
  },
  tinyLogo: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
    width:'100%'
  },
});

export default styles;
