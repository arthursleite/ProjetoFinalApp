import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const EscalacaoContext = createContext({});

function LineupProvider({ children }) {
  const [lineup, setLineup] = useState([]);

  function addPlayerToLineup(footballer) {
    setLineup([...lineup, footballer]);
  }

  function removePlayerToLineup(playerId) {
    setLineup(lineup.filter((player) => player.id != playerId));
  }

  function removeAllPlayers() {
    setLineup([]);
  }

  async function handleAsyncStorage() {
    try {
      await AsyncStorage.setItem("@AppScc", JSON.stringify(lineup));
      getData();
      alert("Escalado com sucesso!");
    } catch (error) {
      alert("Algo de errado aconteceu, tente novamente mais tarde!");
    }
  }

  async function getData() {
    const data = await AsyncStorage.getItem("@AppScc");
    if (data) {
      setLineup(JSON.parse(data));
    }
  }

  return (
    <LineupContext.Provider
      value={{
        lineup,
        addPlayerToLineup,
        removePlayerToLineup,
        removeAllPlayers,
        handleAsyncStorage,
        getData,
        setLineup,
      }}
    >
      {children}
    </LineupContext.Provider>
  );
}

export default LineupProvider;
