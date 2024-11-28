import React, { useState, useContext, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./style";
import { EscalacaoContext } from "../../contexts/escalacao";
import { goleiros, laterais, zagueiros, meioCampistas, atacantes } from "./list";

export default function Jogadores({ route }) {
  let posicao = route.params?.posicao;

  const { adicionarJogadorNaEscalacao, removerJogadorDaEscalacao, escalacao, setEscalacao } = useContext(EscalacaoContext);
  const [procurarJogador, setProcurarJogador] = useState("");
  const [listaJogadores, setListaJogadores] = useState(goleiros.concat(laterais, zagueiros, meioCampistas, atacantes));

  useEffect(() => {
    if (procurarJogador === "") {
      if (posicao === "goleiro") {
        setListaJogadores(goleiros);
      } else if (posicao === "lateral") {
        setListaJogadores(laterais);
      } else if (posicao === "meio-campista") {
        setListaJogadores(meioCampistas);
      } else if (posicao === "atacante") {
        setListaJogadores(atacantes);
      } else {
        setListaJogadores(
          goleiros.concat(laterais, zagueiros, meioCampistas, atacantes)
        );
      }
    } else {
      setListaJogadores(
        goleiros
          .concat(laterais, zagueiros, meioCampistas, atacantes)
          .filter((item) => {
            if (posicao) {
              if (
                item.nome.indexOf(procurarJogador) > -1 &&
                item.posicao === posicao
              ) {
                return true;
              } else {
                return false;
              }
            } else {
              if (item.nome.indexOf(procurarJogador) > -1) {
                return true;
              } else {
                return false;
              }
            }
          })
      );
    }
  }, [procurarJogador]);

  useEffect(() => {
    if (posicao === "goleiro") {
      setListaJogadores(goleiros);
    } else if (posicao === "lateral") {
      setListaJogadores(laterais);
    } else if (posicao === "zagueiro") {
      setListaJogadores(zagueiros);
    } else if (posicao === "meio-campista") {
      setListaJogadores(meioCampistas);
    } else if (posicao === "atacante") {
      setListaJogadores(atacantes);
    } else {
      setListaJogadores(
        goleiros.concat(laterais, zagueiros, meioCampistas, atacantes)
      );
    }
  }, [posicao]);

  const getNomePosicao = () => {
    if (posicao === "goleiro") {
      return <Text style={styles.textPosicao}>Goleiros</Text>;
    } else if (posicao === "lateral") {
      return <Text style={styles.textPosicao}> Laterais</Text>;
    } else if (posicao === "zagueiro") {
      return <Text style={styles.textPosicao}>Zagueiros</Text>;
    } else if (posicao === "meio-campista") {
      return <Text style={styles.textPosicao}> Meio-Campistas</Text>;
    } else if (posicao === "atacante") {
      return <Text style={styles.textPosicao}>Atacantes</Text>;
    } else {
      return <Text style={styles.textPosicao}>Jogadores</Text>;
    }
  };

  const goleiro = escalacao.find((jogador) => jogador.posicao === "goleiro");
  const lateraisEscalados = escalacao.filter((jogador) => jogador.posicao === "lateral");
  const zagueirosEscalados = escalacao.filter(
    (jogador) => jogador.posicao === "zagueiro"
  );
  const atacantesEscalados = escalacao.filter(
    (jogador) => jogador.posicao === "atacante"
  );
  const meioCampistasEscalados = escalacao.filter(
    (jogador) => jogador.posicao === "meio-campista"
  );

  function jogadorEstaEscalado(jogadorId) {
    if (escalacao.length > 0) {
      return escalacao.some((jogador) => jogador.id == jogadorId);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerNomePosicao}>
        {getNomePosicao()}
        {/* <Text style={styles.textPosicao}>{getNomePosicao}</Text> */}
        <View
          style={{
            marginTop: 15,
            backgroundColor: "#DCDCDC",
            width: "97%",
            padding: 10,
          }}
        >
          <TextInput
            value={procurarJogador}
            onChangeText={(t) => setProcurarJogador(t)}
            placeholder="Pesquise por um jogador"
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={listaJogadores}
          renderItem={(item) => {
            {
              jogadorEstaEscalado(item.item.id);
            }
            return (
              <View style={styles.containerJogador}>
                <View style={styles.playerContent}>
                  <Image
                    style={{ width: 55, height: 55 }}
                    source={{
                      uri: item.item.imagem,
                    }}
                  ></Image>
                  <Text style={styles.textName}> {item.item.nome}</Text>
                  {jogadorEstaEscalado(item.item.id) ? (
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => {
                        removerJogadorDaEscalacao(item.item.id);
                      }}
                    >
                      <Text style={styles.textAddButton}>REMOVER</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={
                        (goleiro && item.item.posicao == "goleiro") ||
                          (lateraisEscalados.length >= 2 &&
                            item.item.posicao == "lateral") ||
                          (meioCampistasEscalados.length >= 3 &&
                            item.item.posicao == "meio-campista") ||
                          (atacantesEscalados.length >= 3 &&
                            item.item.posicao == "atacante") ||
                          (zagueirosEscalados.length >= 2 &&
                            item.item.posicao == "zagueiro")
                          ? styles.disableButton
                          : styles.addButton
                      }
                      onPress={() => {
                        if (
                          (!goleiro && item.item.posicao == "goleiro") ||
                          (!(zagueirosEscalados.length >= 2) &&
                            item.item.posicao == "zagueiro") ||
                          (!(meioCampistasEscalados.length >= 3) &&
                            item.item.posicao == "meio-campista") ||
                          (!(lateraisEscalados.length >= 2) &&
                            item.item.posicao == "lateral") ||
                          (!(atacantesEscalados.length >= 3) &&
                            item.item.posicao == "atacante")
                        ) {
                          adicionarJogadorNaEscalacao(item.item);
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
