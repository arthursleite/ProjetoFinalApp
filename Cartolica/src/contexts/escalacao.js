import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EscalacaoContext = createContext({});

function EscalacaoProvider({ children }) {
  const [escalacao, setEscalacao] = useState([]);

  function adicionarJogadorNaEscalacao(jogador) {
    setEscalacao([...escalacao, jogador]);
  }

  function removerJogadorDaEscalacao(jogadorId) {
    setEscalacao(escalacao.filter((jogador) => jogador.id !== jogadorId));
  }

  function removerTodosOsJogadores() {
    setEscalacao([]);
  }

  async function salvarEscalacao() {
    try {
      await AsyncStorage.setItem("@AppScc", JSON.stringify(escalacao));
      carregarEscalacao();
      alert("Jogadores escalados com sucesso!");
    } catch (error) {
      alert("Ocorreu um erro ao salvar a escalação. Tente novamente mais tarde.");
    }
  }

  async function carregarEscalacao() {
    try {
      const data = await AsyncStorage.getItem("@AppScc");
      if (data) {
        setEscalacao(JSON.parse(data));
      }
    } catch (error) {
      alert("Erro ao carregar a escalação!");
    }
  }

  return (
    <EscalacaoContext.Provider
      value={{
        escalacao,
        adicionarJogadorNaEscalacao,
        removerJogadorDaEscalacao,
        removerTodosOsJogadores,
        salvarEscalacao,
        carregarEscalacao,
        setEscalacao,
      }}
    >
      {children}
    </EscalacaoContext.Provider>
  );
}

export default EscalacaoProvider;
