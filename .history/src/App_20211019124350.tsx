import React from 'react';
import { ChainId, DAppProvider } from "@usedapp/core"
import { Header } from "./components/Header"
import './App.css';

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan][ChainId.Rinkeby]
    }}>
    </DAppProvider>
  );
}

export default App;
