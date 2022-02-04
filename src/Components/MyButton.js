import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';

const MyButton = ({
    myText='',
    myColor={},
    myPress=()=>{},
}) => {
  return (
    <TouchableOpacity
    style={{...styles.Buttonstyle,...myColor}}
    onPress={myPress}
    activeOpacity={0.8}
    >
<Text style={{fontSize:scale(18),fontWeight:'600',color:'white'}}>{myText}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  Buttonstyle:{
    height:45,backgroundColor:'gray',justifyContent:'center',alignItems:'center',borderRadius:5
  }
});

