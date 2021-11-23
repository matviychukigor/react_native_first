import React from 'react';
import styles from "./style";
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Map, Drop, Arrow, } from "../../../img/index";

const MapDrop = () => {
    return(
        <View style={styles.map_block}>
          <TouchableOpacity><Image source={Map}/></TouchableOpacity>
          <View>
            <TouchableOpacity>
              <View style={styles.dropdown_one}>
                <Image source={Drop}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.dropdown_two}>
                <Text style={styles.dropdown_text}>All City Trails</Text>
                <Image
                  source={Arrow}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default MapDrop;