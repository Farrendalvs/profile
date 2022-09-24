import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#CDC2AE'}}>
      <TouchableOpacity>
        <View style={{backgroundColor: '#EEE3CB', height: 320, weight: '100%'}}></View>
      </TouchableOpacity>

    {/* image + nama */}
    <View style={{alignItems: 'center', marginTop: -230 }}>
        <Image source={require('./src/images/foto.png')}/>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black', marginTop: 20}}>FARRENDA</Text>
        <Text style={{color: 'black', marginTop: 5}}>Siswa SMK Negeri 2 Surakarta</Text>
    </View>

    {/* kotak tengah */}
    <View style={{alignItems: 'center', marginTop: 90}}>
        <View style={{backgroundColor: '#EEE3CB', width: 258, height: 280, borderRadius: 10}}>
          <View style={{flexDirection: 'row',}}>
            <Ionicon name="calendar-outline" size={25} color="#000000" style={{marginLeft: 30, marginTop: 45,}}/>
            <Text style={{marginTop: 50, marginLeft: 15, color:"#000000",}}>7 April 2005</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Ionicon name="home-outline" size={25} color="#000000" style={{marginLeft: 30, marginTop: 25,}}/>
            <Text style={{marginTop: 30, marginLeft: 15, color:"#000000",}}>Karanganyar</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Ionicon name="school-outline" size={25} color="#000000" style={{marginLeft: 30, marginTop: 25,}}/>
            <Text style={{marginTop: 30, marginLeft: 15, color:"#000000",}}>SMK Negeri 2 Surakarta</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Ionicon name="mail-outline" size={25} color="#000000" style={{marginLeft: 30, marginTop: 25,}}/>
            <Text style={{marginTop: 30, marginLeft: 15, color:"#000000",}}>farrendalvs@gmail.com</Text>
          </View>
          </View>
        
    </View>


{/* sosmed */}
  <View style={{alignItems: 'center', marginTop: 50}}>
  <TouchableOpacity>
    <Text onPress={() => Linking.openURL('https://instagram.com')} style={{height: 120, width: 100}}> 
      <Image source={require('./src/images/logo_ig.png')} />
    </Text >
  </TouchableOpacity>
  </View>

    </View>

  )
}


