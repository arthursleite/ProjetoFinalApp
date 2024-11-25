import React, { useContext, useEffect } from "react";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { LineupContext } from "../../contexts/lineup";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Lineup({ navigation }) {
  const {
    lineup,
    removePlayerToLineup,
    removeAllPlayers,
    handleAsyncStorage,
    getData,
  } = useContext(LineupContext);

  function positionDefine(position) {
    navigation.navigate("Footballers", {
      position: position,
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const viewShot = React.useRef();

  captureAndShareScreenshot = () => {
    viewShot.current.capture().then((uri) => {
      console.log("do something with ", uri);
      Sharing.shareAsync("file://" + uri);
    }),
      (error) =>
        alert(
          "Oops, algo de errado aconteceu. Tente novamente mais tarde!",
          error
        );
  };

  let goalkeeper = lineup.find((player) => player.position === "goalkeeper");
  let sides = lineup.filter((player) => player.position === "side");
  let defenders = lineup.filter((player) => player.position === "defender");
  let forwards = lineup.filter((player) => player.position === "forward");
  let midfielders = lineup.filter((player) => player.position === "midfielder");

  return (
    <View style={styles.container}>
      <View style={styles.lineupContainer}>
        <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
          <View style={styles.sideLinesContainer}>
            <View style={styles.forwardContainer}>
              <View style={styles.sectionContainer}>
                {forwards.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(forwards[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: forwards[0].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {forwards[0].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("forward");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {forwards.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(forwards[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: forwards[1].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {forwards[1].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("forward");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {forwards.length > 2 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(forwards[2].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: forwards[2].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {forwards[2].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("forward");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.midfielderContainer}>
              <View style={styles.sectionContainer}>
                {midfielders.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(midfielders[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: midfielders[0].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {midfielders[0].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("midfielder");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {midfielders.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(midfielders[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: midfielders[1].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {midfielders[1].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("midfielder");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {midfielders.length > 2 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(midfielders[2].id);
                      }}
                    >
                      {/* <View>
                      </View> */}
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: midfielders[2].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {midfielders[2].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("midfielder");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.defenderContainer}>
              <View style={styles.sectionContainer}>
                {sides.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(sides[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: sides[0].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>{sides[0].name}</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("side");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {defenders.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(defenders[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: defenders[0].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {defenders[0].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("defender");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {defenders.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(defenders[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: defenders[1].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {defenders[1].name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("defender");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {sides.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(sides[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: sides[1].image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>{sides[1].name}</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("side");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.goalkeeperContainer}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {goalkeeper ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removePlayerToLineup(goalkeeper.id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: goalkeeper.image,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {goalkeeper.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        positionDefine("goalkeeper");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={styles.containerButtonDelete}>
                {lineup.length > 0 ? (
                  <View style={styles.buttonDelete}>
                    <TouchableOpacity onPress={removeAllPlayers}>
                      <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../../../assets/lixeira.png")}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={{ width: 45, height: 40 }}></View>
                )}
              </View>
            </View>
          </View>
        </ViewShot>
        <TouchableOpacity
          onPress={() => {
            if (lineup.length === 11) {
              handleAsyncStorage();
            } else {
              alert(
                "Para salvar a escalação, você precisa ter 11 jogadores escalados."
              );
            }
          }}
          style={
            lineup.length === 11
              ? styles.saveButtonActive
              : styles.saveButtonDisabled
          }
        >
          <Text
            style={{
              fontSize: 20,
              color: lineup.length === 11 ? "#fff" : "#A9A9A9",
            }}
          >
            Salvar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (lineup.length === 11) {
              captureAndShareScreenshot();
            }
          }}
          style={
            lineup.length === 11
              ? styles.shareButtonActive
              : styles.buttonDisabled
          }
        >
          <Text
            style={{
              fontSize: 20,
              color: lineup.length === 11 ? "#fff" : "#A9A9A9",
            }}
          >
            Compartilhar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
