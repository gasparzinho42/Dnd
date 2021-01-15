import React, {useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import general from '../styles/general';
import styles from './styles';

function Atributos({route}) {
  const abilityScores = [
    'strenght',
    'Dexterity',
    'Constitution',
    'Inteligence',
    'Wisdom',
    'Charism',
  ];
  const [str, setStr] = useState(8);
  const [dex, setDex] = useState(8);
  const [con, setCon] = useState(8);
  const [int, setInt] = useState(8);
  const [wis, setWis] = useState(8);
  const [cha, setCha] = useState(8);
  const [points, setPoints] = useState(27);
  const [color,setColor] = useState('purple');
  const {Name,Race,Class,Subrace,Bonus,} = route.params
  useEffect(()=>{
    points < 0 ? setColor('red') : null
    console.log('====================================');
    console.log(Name);
    console.log(Class);
    console.log(Race);
    console.log(Subrace);
    console.log(Bonus);
    console.log('====================================');

},[points])
  function plus(atr, set){
    var number = points - 1
    var number2 = atr + 1
    set(number2)
    setPoints(number)
  }
  function minus(atr, set){
    set(atr - 1)
    setPoints(points + 1)
  }
  return (
    <View style={general.container}>
      <View style={styles.attrs}>
        {/* Início Botões */}
        <Text style={{fontFamily: 'Yeon Sung Regular', fontSize: 21, color: `${color}`, alignSelf: 'center', marginRight: 20}}>Points remaining: {points}</Text>
        <View>
          {/* strenght */}
          <Text style={styles.text}>
            {abilityScores[0]}{' '}
            <TouchableOpacity
              onPress={()=> {plus(str, setStr)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}> + </Text>
            </TouchableOpacity>  {str}  <TouchableOpacity
            onPress={()=> {minus(str, setStr)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}>  -  </Text>
            </TouchableOpacity>
          </Text>
          {/* dexterity */}
          <Text style={styles.text}>
          {abilityScores[1]}{' '}
            <TouchableOpacity
              onPress={()=> {plus(dex,setDex)}} //função mais
              style={styles.button}>
              <Text style={styles.buttonTitle}> + </Text>
            </TouchableOpacity>  {dex}  <TouchableOpacity
            onPress={()=> {minus(dex,setDex)}} //funçao menos
              style={styles.button}>
              <Text style={styles.buttonTitle}>  -  </Text>
            </TouchableOpacity>
          </Text>
          {/* constitution */}
          <Text style={styles.text}>
          {abilityScores[2]}{' '}
            <TouchableOpacity
              onPress={()=> {plus(con,setCon)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}> + </Text>
            </TouchableOpacity>  {con}  <TouchableOpacity
            onPress={()=> {minus(con,setCon)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}>  -  </Text>
            </TouchableOpacity>
          </Text>
          {/* inteligence */}
          <Text style={styles.text}>
          {abilityScores[3]}{' '}
            <TouchableOpacity
              onPress={()=> {plus(int,setInt)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}> + </Text>
            </TouchableOpacity>  {int}  <TouchableOpacity
            onPress={()=> {minus(int,setInt)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}>  -  </Text>
            </TouchableOpacity>
          </Text>
          {/* wisdom */}
          <Text style={styles.text}>
          {abilityScores[4]}{' '}
            <TouchableOpacity
              onPress={()=> {plus(wis,setWis)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}> + </Text>
            </TouchableOpacity>  {wis}  <TouchableOpacity
            onPress={()=> {minus(wis,setWis)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}>  -  </Text>
            </TouchableOpacity>
          </Text>
          {/* charism */}
          <Text style={styles.text}>
          {abilityScores[5]}{' '}
            <TouchableOpacity
              onPress={()=> {plus(cha,setCha)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}> + </Text>
            </TouchableOpacity>  {cha}  <TouchableOpacity
            onPress={()=> {minus(cha,setCha)}}
              style={styles.button}>
              <Text style={styles.buttonTitle}>  -  </Text>
            </TouchableOpacity>
          </Text>
        </View>
        {/* fim botões */}

        {/* parte dos bônus */}
        <View style={styles.bonuses}>
          <Text style={styles.text}>Mind your Bonuses!</Text>
          {Bonus.map((bonus)=>{
            return (
            <View>
              <Text style={styles.text}>{bonus.name}: + {bonus.bonus}</Text>
            </View>)
          })}
        </View>
       
       
      </View>
      <View style={styles.equip}>
        <Text >Name: {Name}</Text>
        <Text >Race: {Race}</Text>
        <Text >Class: {Class}</Text>
        <Text style={{color: 'red', width:300, alignSelf:'center'}}>AQUI VAI SER A LISTA DE EQUIPAMENTOS DE ACORDO COM A CLASSE ESCOLHIDA</Text>
      </View>
      

    </View>
  );
}
export default Atributos;
