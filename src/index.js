import React from 'react';
import './index.css';
// import { WagmiConfig } from "wagmi";
import App from './App';
import { client } from './utils/wagmi';
import { WagmiConfig } from 'wagmi'
import { ConnectKitProvider } from 'connectkit';

// import { client } from "../src/utils/wagmi";
// import { ConnectKitProvider } from "connectkit";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <WagmiConfig client={client}>
      <ConnectKitProvider theme="retro">
    <App />
    </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-
