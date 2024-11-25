import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.namesContent}>
          <View style={styles.teamContent}>
            <Image
              style={styles.imageTeam}
              source={require("../../../assets/logo-clube.png")}
            ></Image>
            <View>
              <Text style={styles.nameTeam}>FC Isvi de Munique</Text>
              <Text style={styles.nameManager}>Arthur Isvi</Text>
            </View>
          </View>
        </View>
        <View style={styles.pointsContainer}>
          <View style={styles.pointsContent}>
            <Text style={styles.labelPoints}>ÚLTIMA PONTUAÇÃO</Text>
            <Text style={styles.points}>59.7</Text>
          </View>
          <View style={styles.pointsContent}>
            <Text style={styles.labelPoints}>TOTAL</Text>
            <Text style={styles.points}>670.25</Text>
          </View>
        </View>
        <View style={styles.pointsContainer}></View>
        <View style={styles.market}>
          <Text style={styles.textMarket}>Mercado fecha em: 10/06/2022</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonLineup}
          onPress={() => {
            navigation.navigate("Lineup");
          }}
        >
          <Text style={styles.textButtonLineup}>Escalar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
