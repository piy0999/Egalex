const HDWalletProvider = require('truffle-hdwallet-provider');
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new HDWalletProvider();
  //fill with mnemoic
  //fill infura node link
  web3 = new Web3(provider);
}

export default web3;
