import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { OneImage, SecondImage, ThreeImage, FourImage, Mother } from "./img/index.js";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.text_wrapper}>
            <Text style={styles.text}>Tropa.io</Text>
          </View>
          <View style={styles.img_wrapper}>
            <Image
              source={OneImage}
            />
            <Image
              source={SecondImage}
            />
            <Image
              source={ThreeImage}
            />
            <Image
              source={FourImage}
            />
          </View>
        </View>
        <View style={styles.pricing_wrapper}>
          <View style={styles.text_back}><Text style={styles.text_pricin}>Free</Text></View>
          <View style={styles.text_back}><Text style={styles.text_pricin}>$</Text></View>
          <View style={styles.text_back}><Text style={styles.text_pricin}>$$</Text></View>
          <View style={styles.text_back}><Text style={styles.text_pricin}>$$$</Text></View>
          <View style={styles.text_back}>
            <View style={styles.mother}>
              <Image
                source={Mother}
                style={styles.mother_img}
              />
              <Text style={styles.text_pricin}>
                Kids friendly
              </Text>
            </View>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#062F25',
  },
  header: {
    flexDirection: 'row',
    marginTop: 44,
  },
  img_wrapper: {
    flexDirection: "row"
  },  
  text_wrapper: {
    backgroundColor: '#2AB009',
    width: 173,
    height: 48,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 34,
    lineHeight: 48,
    letterSpacing: -0.04,
    textTransform: "uppercase",
    color: "#FFFFFF",
  }, 
  pricing_wrapper: {
    flexDirection: "row",
    marginTop: 16,
    marginHorizontal: 8
  },
  text_back:{
    backgroundColor: "#ED0B34",
    borderRadius: 20,
    paddingVertical: 6, 
    paddingHorizontal: 12,
    marginHorizontal: 1
  },
  text_pricin:{
    color: "#FFFFFF",
    letterSpacing: 0.02,
    lineHeight: 20,
    fontSize: 16,
    fontWeight: "600"
  },
  mother: {
    flexDirection: "row"
  },
  mother_img: {
    marginRight: 8
  }
});
