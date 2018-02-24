const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
'grid choice foot sausage use entry vote label bundle solve cart fat',
'https://rinkeby.infura.io/89Ou2f86VrXtnkm0rbRO'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode})
		.send({gas: '1000000', from: accounts[0]});

	console.log('Contract deployed to', result.options.address);	
};
deploy();