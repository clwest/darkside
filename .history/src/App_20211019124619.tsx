import React from 'react';
import { ChainId, DAppProvider } from "@usedapp/core"
import { Container } from "@material-ui/core"
import { Header } from "./components/Header"
import './App.css';

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby, 1337]
    }}>
      <Header />
      <Container maxWidth="md" />
    </DAppProvider>
  );
}

export default App;
