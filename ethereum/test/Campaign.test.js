const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CaseFactory.json');
const compiledLawCase = require('../ethereum/build/LawCase.json');

let accounts;
let factory;
let lawCaseAddress;
let lawCase;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods
    .addCase(
      'Kicked out unfairly',
      'On monday, I returned from work to find my room locked.'
    )
    .send({
      from: accounts[0],
      gas: '1000000'
    });

  const cases = await factory.methods.getCases().call();
  lawCaseAddress = cases[0];

  lawCase = await new web3.eth.Contract(
    JSON.parse(compiledLawCase.interface),
    lawCaseAddress
  );
});

describe('', () => {
  it('deploys a factory and a case', () => {
    assert.ok(factory.options.address);
    assert.ok(lawCase.options.address);
  });

  it('marks caller as the case client', async () => {
    const client = await lawCase.methods.client().call();
    assert.equal(accounts[0], client);
  });

  /*
  it('allows to add a case', async () => {
    await factory.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });

    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  it('requires a minimum contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        value: '5',
        from: accounts[1]
      });

      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods
      .createRequest('buy batteries', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });

    const request = await campaign.methods.requests(0).call();

    assert.equal('buy batteries', request.description);
  });

  it('processes request', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({ from: accounts[0], gas: '1000000' });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);
    console.log(balance);
    assert(balance > 104);
  });
	*/
});
