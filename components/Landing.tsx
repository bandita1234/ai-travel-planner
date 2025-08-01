import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter, type Href } from "expo-router";

export const options = {
  headerShown: false,
};

const Landing: React.FC = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/landing.jpeg") as ImageSourcePropType}
        style={{
          width: "100%",
          height: 520,
          resizeMode: "stretch",
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
            marginBottom: 20,
            color:Colors.TEXT
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={[
            styles.subtitle,
            { fontFamily: "outfit-bold", marginBottom: 0 },
          ]}
        >
          Planning a trip? We’ve got you covered!
        </Text>

        <Text style={styles.subtitle}>
          With AI-powered planning, your trip fits your style, budget, and
          timeline. From flights to hidden gems, we handle it all — so you can
          enjoy every moment!
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>router.push('/auth/sign-in' as Href)}>
            <Text style={{color:Colors.WHITE,textAlign:'center',fontFamily:'outfit',fontSize:17}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 25,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: "outfit",
    textAlign: "center",
    color: '#6e5f91',
    marginBottom: 15,
    lineHeight: 24,
  },
  button: {
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:80,
    marginTop:'10%'
  }
});

export default Landing;
