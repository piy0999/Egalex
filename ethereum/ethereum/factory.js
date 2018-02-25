import web3 from './web3';
import CaseFactory from './build/CaseFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CaseFactory.interface),
  '0x2F4cf19398F5Dfec81f785Bab87E33C81fb8Cf7a'
);

export default instance;
