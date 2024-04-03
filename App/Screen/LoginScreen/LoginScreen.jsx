import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import Colors from '../../Utils/colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser'
import { useOAuth } from "@clerk/clerk-expo";


WebBrowser.maybeCompleteAuthSession();

//Login Page banner
export default function LoginScreen() {
    useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
  const onPress=async()=>{
    try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }

  };
  return (
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    }}>
      <Image   //Logo
        source={require("../../../assets/images/logo.png")}
        style={styles.logoImage}
        resizeMode="contain"
      />
      <Image  //Login Banner
        source={require('../../../assets/images/login-bg.jpg')}
        style={styles.bgImage}
        resizeMode="cover"
      />

<View style={{padding:20}}>
<Text style={styles.heading}> Discover the Ultimate EV Charging Locator App in Sri Lanka </Text>
<Text style={styles.subheading}> Easily locate EV charging stations near you, plan your trips, and explore much more with just a single click. </Text>

{/* Login Buttons */}
<TouchableOpacity style={styles.button}
onPress={onPress}
>
   <Text style={{
    color:Colors.WHITE,
    fontFamily:'poppins',
    fontSize:15,
    textAlign:'center'

   }}>Login With Google</Text>

</TouchableOpacity>

</View>

    </View>
  );
}


// Login Page Styles 
const styles = StyleSheet.create({
    logoImage: {
      width: 200,
      height: 45,
    },
    bgImage: {
      width: '100%',
      height: 180,
      marginTop: 20,
    },
    heading: {
      fontSize: 22,
      fontFamily: 'poppin-bold',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    subheading: {
      fontSize:15,
      paddingTop:20,
      fontFamily:'poppins',
      textAlign:'center',
      color:Colors.GRAY

    },
    // Google Login Button
    button:{  
        backgroundColor:Colors.PRIMARY,
        padding:16, 
        display:'flex',
        borderRadius:99,
        marginTop:80

    }
  });
