import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./style";
import { LineupContext } from "../../contexts/lineup";
import { goalkeepers, sides, defenders, forwards, midfielders } from "./list";

export default function Footballers({ route }) {
  let position = route.params?.position;

  const { addPlayerToLineup, removePlayerToLineup, lineup, setLineup } =
    useContext(LineupContext);
  const [searchPlayer, setSearchPlayer] = useState("");
  const [listPlayers, setListPlayers] = useState(
    goalkeepers.concat(sides, defenders, midfielders, forwards)
  );

  useEffect(() => {
    if (searchPlayer === "") {
      if (position === "goalkeeper") {
        setListPlayers(goalkeepers);
      } else if (position === "side") {
        setListPlayers(sides);
      } else if (position === "midfielder") {
        setListPlayers(midfielders);
      } else if (position === "forward") {
        setListPlayers(forwards);
      } else {
        setListPlayers(
          goalkeepers.concat(sides, defenders, midfielders, forwards)
        );
      }
    } else {
      setListPlayers(
        goalkeepers
          .concat(sides, defenders, midfielders, forwards)
          .filter((item) => {
            if (position) {
              if (
                item.name.indexOf(searchPlayer) > -1 &&
                item.position === position
              ) {
                return true;
              } else {
                return false;
              }
            } else {
              if (item.name.indexOf(searchPlayer) > -1) {
                return true;
              } else {
                return false;
              }
            }
          })
      );
    }
  }, [searchPlayer]);

  useEffect(() => {
    if (position === "goalkeeper") {
      setListPlayers(goalkeepers);
    } else if (position === "side") {
      setListPlayers(sides);
    } else if (position === "defender") {
      setListPlayers(defenders);
    } else if (position === "midfielder") {
      setListPlayers(midfielders);
    } else if (position === "forward") {
      setListPlayers(forwards);
    } else {
      setListPlayers(
        goalkeepers.concat(sides, defenders, midfielders, forwards)
      );
    }
  }, [position]);

  const getPositionName = () => {
    if (position === "goalkeeper") {
      return <Text style={styles.textPosition}>Goleiros</Text>;
    } else if (position === "side") {
      return <Text style={styles.textPosition}> Laterais</Text>;
    } else if (position === "defender") {
      return <Text style={styles.textPosition}>Zagueiros</Text>;
    } else if (position === "midfielder") {
      return <Text style={styles.textPosition}> Meio-Campistas</Text>;
    } else if (position === "forward") {
      return <Text style={styles.textPosition}>Atacantes</Text>;
    } else {
      return <Text style={styles.textPosition}>Jogadores</Text>;
    }
  };

  const goalkeeper = lineup.find((player) => player.position === "goalkeeper");
  const sidesLineup = lineup.filter((player) => player.position === "side");
  const defendersLineup = lineup.filter(
    (player) => player.position === "defender"
  );
  const forwardsLineup = lineup.filter(
    (player) => player.position === "forward"
  );
  const midfieldersLineup = lineup.filter(
    (player) => player.position === "midfielder"
  );

  function playerExistsInLineup(playerId) {
    if (lineup.length > 0) {
      return lineup.some((player) => player.id == playerId);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerPositionName}>
        {getPositionName()}
        {/* <Text style={styles.textPosition}>{getPositionName}</Text> */}
        <View
          style={{
            marginTop: 15,
            backgroundColor: "#DCDCDC",
            width: "97%",
            padding: 10,
          }}
        >
          <TextInput
            value={searchPlayer}
            onChangeText={(t) => setSearchPlayer(t)}
            placeholder="Pesquise por um jogador"
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={listPlayers}
          renderItem={(item) => {
            {
              playerExistsInLineup(item.item.id);
            }
            return (
              <View style={styles.playerContainer}>
                <View style={styles.playerContent}>
                  <Image
                    style={{ width: 55, height: 55 }}
                    source={{
                      uri: item.item.image,
                    }}
                  ></Image>
                  <Text style={styles.textName}> {item.item.name}</Text>
                  {playerExistsInLineup(item.item.id) ? (
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => {
                        removePlayerToLineup(item.item.id);
                      }}
                    >
                      <Text style={styles.textAddButton}>REMOVER</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={
                        (goalkeeper && item.item.position == "goalkeeper") ||
                        (sidesLineup.length >= 2 &&
                          item.item.position == "side") ||
                        (midfieldersLineup.length >= 3 &&
                          item.item.position == "midfielder") ||
                        (forwardsLineup.length >= 3 &&
                          item.item.position == "forward") ||
                        (defendersLineup.length >= 2 &&
                          item.item.position == "defender")
                          ? styles.disableButton
                          : styles.addButton
                      }
                      onPress={() => {
                        if (
                          (!goalkeeper && item.item.position == "goalkeeper") ||
                          (!(defendersLineup.length >= 2) &&
                            item.item.position == "defender") ||
                          (!(midfieldersLineup.length >= 3) &&
                            item.item.position == "midfielder") ||
                          (!(sidesLineup.length >= 2) &&
                            item.item.position == "side") ||
                          (!(forwardsLineup.length >= 3) &&
                            item.item.position == "forward")
                        ) {
                          addPlayerToLineup(item.item);
                        }
                      }}
                    >
                      <Text style={styles.textAddButton}>ADICIONAR</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}
