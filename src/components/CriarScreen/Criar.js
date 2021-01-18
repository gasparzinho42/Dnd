import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import styles from './Style';
import {useEffect} from 'react';

function Criar() {
  const navigation = useNavigation();
  const abilityScores = [
    'strenght',
    'Dexterity',
    'Constitution',
    'Inteligence',
    'Wisdom',
    'Charism',
  ];
  const bonuses = [];
  const [name, setName] = useState('');
  const [raca, setRaca] = useState('human');
  const [subrace, setSubrace] = useState('');
  const [hidden, sethidden] = useState(true);
  const [classe, setClasse] = useState('barbarian');
  const [modalVisible, setModalVisible] = useState(false);
  const [bonus, setBonus] = useState([]);
  const [subraceName, setSubraceName] = useState('');
  const [subraceDesc, setSubraceDesc] = useState('');
  const baseURL = 'https://www.dnd5eapi.co/api';
  const subraces = baseURL + `/races/${raca}/subraces`;
  const races = baseURL + `/races/${raca}/`;
  const subracesInfo = baseURL + `/subraces/${subraceName}`;
  useEffect(() => {
    function racesInfo() {
      fetch(races)
        .then((response) => response.json())
        .then((response) => {
          for (let i = 0; i < response.ability_bonuses.length; i++) {
            bonuses.push({
              name: response.ability_bonuses[i].ability_score.name,
              bonus: response.ability_bonuses[i].bonus,
            });
          }
          return setBonus(bonuses);
        });
    }
    racesInfo(); //Pega o nome da habilidade e o bônus a cada vez que o 'races' mudar no select.
  }, [races]);

  function SubraceDesc() { // Mostra a descrição da sub raça no modal ao apertar o balãozinho da interrogação.
    fetch(subracesInfo)
      .then((response) => response.json())
      .then((response) => {
        setSubraceDesc(response.desc);
      });
  }

  function checar() { // Checa se a raça selecionada no select tem sub raça, se sim ele mostra na tela o nome da sub raça.
    fetch(subraces)
    .then((res) => res.json())
    .then((res) => {
      if (res.count > 0) {
        sethidden(false);
        const resultado = res.results[0].name;
        const subraceIndex = res.results[0].index;
        setSubraceName(subraceIndex);
        setSubrace(resultado);
        return;
      } else {
        sethidden(true);
        setSubrace('');
        return;
      }
     
      });
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.Input}
          onChangeText={(evt) => {
            setName(evt);
          }}
        />
        <Text style={styles.label}>Race</Text>
        <Picker //select para as raças.
          selectedValue={raca}
          style={styles.select}
          onValueChange={(checar(), SubraceDesc(), (itemValue) => setRaca(itemValue))}>
          <Picker.Item label="Human" value="human" />
          <Picker.Item label="Halfling" value="halfling" />
          <Picker.Item label="Dragonborn" value="dragonborn" />
          <Picker.Item label="Elf" value="elf" />
          <Picker.Item label="Gnome" value="gnome" />
          <Picker.Item label="Half-elf" value="half-elf" />
          <Picker.Item label="Half-orc" value="half-orc" />
          <Picker.Item label="Tiefling" value="tiefling" />
          <Picker.Item label="Dwarf" value="dwarf" />
        </Picker>
        {hidden ? null : <Text style={styles.label}>Sub Race</Text>}
        <Text style={styles.subrace}>
          {subrace}{' '}
          {hidden ? null : (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}>
              <Image
                style={styles.image}
                source={require('../../assets/about.png')}
              />
            </TouchableOpacity>
          )}{' '}
        </Text>

        <Text style={styles.label}>Class</Text>
        <Picker
          selectedValue={classe}
          style={styles.select}
          onValueChange={(itemValue, itemIndex) => setClasse(itemValue)}>
          <Picker.Item label="barbarian" value="barbarian" />
          <Picker.Item label="bard" value="bard" />
          <Picker.Item label="cleric" value="cleric" />
          <Picker.Item label="druid" value="druid" />
          <Picker.Item label="fighter" value="fighter" />
          <Picker.Item label="Monk" value="monk" />
          <Picker.Item label="Paladin" value="paladin" />
          <Picker.Item label="ranger" value="ranger" />
          <Picker.Item label="rogue" value="rogue" />
          <Picker.Item label="sorcerer" value="sorcerer" />
          <Picker.Item label="Warlock" value="warlock" />
          <Picker.Item label="wizard" value="wizard" />
        </Picker>

        <View style={styles.attr}>
          {abilityScores.map(function (ab, key) {
            return (
              <View key={key} style={styles.ab}>
                <Text style={styles.Text}>{ab}</Text>
                <Text style={styles.Text}>____________</Text>
                <Text style={styles.Text}>8</Text>
              </View>
            );
          })}
          <View>
            <Text
              style={{
                fontFamily: 'Yeon Sung Regular',
                fontSize: 22,
                color: 'purple',
              }}>
              Racial Bonus
            </Text>

            {bonus.map(function (bonus, key) {
              return (
                <View key={key}>
                  <Text style={styles.Text}>
                    {bonus.name}: + {bonus.bonus}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <TouchableOpacity onPress={(evt) => navigation.navigate('attributes',{Name: name,Race: raca,Class: classe,Subrace: subraceName,Bonus: bonus})}>
          <Text style={styles.plus}> {'next ->'} </Text>
        </TouchableOpacity>
        {/* modal */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modal}>
            <View style={{paddingLeft: 40, paddingRight: 40}}>
              <Text style={styles.Text}>{subraceDesc}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text
                style={{
                  backgroundColor: 'purple',
                  color: 'white',
                  width: 100,
                  marginTop: 50,
                  textAlign: 'center',
                }}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

export default Criar;
