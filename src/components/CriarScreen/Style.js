import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  Input: {
    color: 'purple',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 5,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    width: '99%',
  },
  label: {
    color: 'purple',
    alignSelf: 'flex-start',
    fontSize: 24,
    fontFamily: 'Yeon Sung Regular',
  },
  plus: {
    color: 'purple',
    fontFamily: 'Yeon Sung Regular',
    fontWeight: '400',
    fontSize: 28,
    marginTop:10
  },
  select: {
    fontFamily: 'Yeon Sung Regular',
    color: 'purple',
    marginBottom: 5,
    height: 50,
    width: '99%',
    borderWidth: 24,
  },
  form: {
    marginTop: 40,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 8,
    justifyContent: 'center',
    maxHeight: 1280,
    width: '90%',
  },
  image: {
    height: 20,
    width: 20,
    marginBottom: -5.5,
    marginLeft: 5
    

    // top:-15,
    // left: 10

  },
  subrace: {
    color: 'purple',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginRight:30,
  },
  modal: {
    position:'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top:'20%',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '90%',
    minHeight:300,
    maxHeight:1280
  },
  attr: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    width: '85%',
    padding:10,
    backgroundColor: 'white',
    
  },
  Text: {
    fontFamily: 'Yeon Sung Regular',
    color: 'purple',
    textAlign: 'center',
  },
  ab: {
    marginLeft: 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
});

export default styles;
