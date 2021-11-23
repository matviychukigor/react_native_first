import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView } from 'react-native';

import Header from "./src/components/heaser/header";
import ButtonGroup from "./src/components/btn_group";
import CardSlider from "./src/components/card_with_slider/cardSlider";
import MapDrop from "./src/components/map_and_dropdown/map";
import Menu from "./src/components/menu/menu";

const { width } = Dimensions.get('window');

export default function App() {
  
  
  return (
    <View style={styles.container}>

        <Header/>

        <View style={styles.pricing_wrapper}>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          > 
          <ButtonGroup buttons={[{text: "Free", img: false}, {text: "$", img: false}, {text: "$$", img: false}, {text: "$$$", img: false}, {text: "Kids friendly", img: true}, {text: "Covid free", img: false}]} />
          </ScrollView>
        </View>

        <ScrollView>
          <MapDrop/>
          <CardSlider/>
          <CardSlider/>
        </ScrollView>

        <Menu/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062F25',
  },
  pricing_wrapper: {
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 8,
    marginBottom: 16
  },
});
