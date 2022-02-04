import { View, Text,TextInput } from 'react-native';
import React from 'react';
import { scale ,verticalScale } from 'react-native-size-matters';

const MyTextInput = ({
  myPlaceholder="",
  myonChangeText

}) => {
  return (
    <View
    //  style={{flex:1,paddingHorizontal:50}}
     >
          <TextInput
        style={{backgroundColor:'#EFEEF4',height:verticalScale(35),fontSize:scale(14),borderRadius:5,color:'black'}}
        placeholderTextColor='#C9CECB'
       //underlineColorAndroid="transparent"
        blurOnSubmit
        placeholder={myPlaceholder}
        keyboardType="default"
        onChangeText={myonChangeText} 
      />
    </View>
  );
};

export default MyTextInput;
