import {ScrollView, View} from 'react-native';
import React from 'react';
import Style from '../styles/general';
import Init from '../init/Init';
function Home() {
  return (
    <ScrollView>
      <View style={Style.container}>
        <Init />
      </View>
    </ScrollView>
  );
}
export default Home;
