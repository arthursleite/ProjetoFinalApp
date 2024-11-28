import React, { useContext, useEffect } from "react";
import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { EscalacaoContext } from "../../contexts/escalacao";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Escalacao({ navigation }) {
  const { escalacao, removerJogadorDaEscalacao, removerTodosOsJogadores, salvarEscalacao, carregarEscalacao } = useContext(EscalacaoContext);

  function definirPosicao(posicao) {
    navigation.navigate("Jogadores", {
      posicao: posicao,
    });
  }

  useEffect(() => {
    carregarEscalacao();
  }, []);

  const viewShot = React.useRef();

  printarECompartilhar = () => {
    viewShot.current.capture().then((uri) => {
      console.log("do something with ", uri);
      Sharing.shareAsync("file://" + uri);
    }),
      (error) =>
        alert(
          "Ops, algo de errado aconteceu. Tente novamente mais tarde!",
          error
        );
  };

  let goleiro = escalacao.find((jogador) => jogador.posicao === "goleiro");
  let laterais = escalacao.filter((jogador) => jogador.posicao === "lateral");
  let zagueiros = escalacao.filter((jogador) => jogador.posicao === "zagueiro");
  let meioCampistas = escalacao.filter((jogador) => jogador.posicao === "meio-campista");
  let atacantes = escalacao.filter((jogador) => jogador.posicao === "atacante");

  return (
    <View style={styles.container}>
      <View style={styles.lineupContainer}>
        <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
          <View style={styles.sideLinesContainer}>
            <View style={styles.forwardContainer}>
              <View style={styles.sectionContainer}>
                {atacantes.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(atacantes[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: atacantes[0].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {atacantes[0].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("atacante");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
                {atacantes.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(atacantes[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: atacantes[1].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {atacantes[1].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("atacante");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {atacantes.length > 2 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(atacantes[2].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: atacantes[2].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {atacantes[2].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("atacante");
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
                {meioCampistas.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(meioCampistas[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: meioCampistas[0].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {meioCampistas[0].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("meio-campista");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {meioCampistas.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(meioCampistas[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: meioCampistas[1].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {meioCampistas[1].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("meio-campista");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {meioCampistas.length > 2 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(meioCampistas[2].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: meioCampistas[2].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {meioCampistas[2].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("meio-campista");
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
                {laterais.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(laterais[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: laterais[0].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>{laterais[0].nome}</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("lateral");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {zagueiros.length > 0 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(zagueiros[0].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: zagueiros[0].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {zagueiros[0].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("zagueiro");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {zagueiros.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(zagueiros[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: zagueiros[1].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {zagueiros[1].nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("zagueiro");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {laterais.length > 1 ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(laterais[1].id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: laterais[1].imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>{laterais[1].nome}</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("lateral");
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
                {goleiro ? (
                  <View style={styles.footballer}>
                    <TouchableOpacity
                      style={styles.playerContainer}
                      onPress={() => {
                        removerJogadorDaEscalacao(goleiro.id);
                      }}
                    >
                      <Image
                        style={{ width: 55, height: 55 }}
                        source={{
                          uri: goleiro.imagem,
                        }}
                      ></Image>
                      <Text style={styles.footballerName}>
                        {goleiro.nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.footballerCircle}>
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        definirPosicao("goleiro");
                      }}
                    >
                      <Text style={styles.textAddButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={styles.containerButtonDelete}>
                {escalacao.length > 0 ? (
                  <View style={styles.buttonDelete}>
                    <TouchableOpacity onPress={removerTodosOsJogadores}>
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
            if (escalacao.length === 11) {
              salvarEscalacao();
            } else {
              alert(
                "Para salvar a escalação, você precisa ter 11 jogadores escalados."
              );
            }
          }}
          style={
            escalacao.length === 11
              ? styles.saveButtonActive
              : styles.saveButtonDisabled
          }
        >
          <Text
            style={{
              fontSize: 20,
              color: escalacao.length === 11 ? "#fff" : "#A9A9A9",
            }}
          >
            Salvar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (escalacao.length === 11) {
              printarECompartilhar();
            }
          }}
          style={
            escalacao.length === 11
              ? styles.shareButtonActive
              : styles.buttonDisabled
          }
        >
          <Text
            style={{
              fontSize: 20,
              color: escalacao.length === 11 ? "#fff" : "#A9A9A9",
            }}
          >
            Compartilhar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
