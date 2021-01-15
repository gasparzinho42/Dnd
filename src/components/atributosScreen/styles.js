import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  attrs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 50,
  },
  equip:{
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 20,
  },
  bonuses: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    borderTopColor: 'gold',
    borderTopWidth: 1,
    borderBottomColor: 'gold',
    borderBottomWidth: 1,
  },
  points: {
    fontFamily: 'Yeon Sung Regular',
    fontSize: 21,
    color: 'purple',
    alignSelf: 'center',
    marginRight: 20,
  },
  text: {
    fontFamily: 'Yeon Sung Regular',
    color: 'purple',
    alignSelf: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 2,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
