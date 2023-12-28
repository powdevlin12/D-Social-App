import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ProfileParams } from "../../types/params/Profile";
import { AppStackParamList } from "../../navigation/app";

type ProfileScreenRouteProp = RouteProp<AppStackParamList, "Profile">;
const ProfileScreen = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const { name } = route.params as ProfileParams;
  return (
    <View>
      <Text>{`Hello ${name}`}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
