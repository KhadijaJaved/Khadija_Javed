import { View, Text, Image, ImageBackground} from 'react-native';
import React,{useState} from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import MyTextInput from '../../Components/MyTextInput';
import MyButton from '../../Components/MyButton';



const LoginScreen = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    // const LoginFunc = () => {
    //   if(!Email){
    //     Alert.alert('Enter Email');
    //   }else if (!Password){
    //     Alert.alert('Enter Password');
    //   }else{
    //     const uri ='';
    //     const LoginData = {
    //         email: Email,
    //         password: Password,
    //     };
    //     fetch(uri,{
    //       method:'POST',
    //       headers:{
    //         Accept:'application/json',
    //         'Content-Type':'application/json',
    //       },
    //       body:JSON.stringify(LoginData),
    //     })
    //     .then (response => response.text())
    //     .then (async responseText =>{
    //       let responseData = JSON.parse(responseText);
    //       console.log('response Login screen', responseData);
    //       if(responseData.code==200){
    //           console.log('successed');
    //       }else {
    //         console.log('fail');
    //       }
    //     })
    //     .catch(error=>{
    //       console.log(error,'error from API');
    //     });
    //   }
    // };





  return (
    <View style={{flex:1}}>
      <ImageBackground
       style={{flex:1,opacity:0.9}}
      source={require('../../Image/backgroundImage/backgroundImage.jpg')}
     >
        <View style={{flex:2}}></View>
      <View style={{width:420,height:500,backgroundColor:'#00101D',borderRadius:30}}>
        <View style={{flex:1,height:200,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:34,fontWeight:'700',color:'white'}}>SignIn</Text>
          </View>
          <View style={{height:60,paddingHorizontal:30}}>
          <MyTextInput
          myPlaceholder='gmail@gmail.com'
          myonChangeText={(e)=>setEmail()}
          /></View>
          <View style={{height:60,paddingHorizontal:30}}>
          <MyTextInput
          myPlaceholder='********'
          myonChangeText={(e)=>setPassword()}
          />
          </View>
          <View style={{flex:1,paddingHorizontal:30}}>
            <MyButton
            myText='LogIn'
            myPress={()=>{
              // LoginFunc()
              // console.log('Email:',Email)
              // console.log('Password:',Password)
            }}
            myColor={{backgroundColor:'#7C007C'}}
            />
          </View>
          
     
          </View>
          <View style={{flex:1}}></View>
         
      <KeyboardSpacer/>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;