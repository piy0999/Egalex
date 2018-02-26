<img src= "https://github.com/piy0999/Egalex/blob/master/Images/auction%20(1).png" width="128" height="128">



## Egalex

#### Lawyer Front-extends

A react web app to see and accept cases.

#### App

A react native app which helps register new cases. Has a sound recording feature which is sent to a node js backend and transcribed.

Run `npm start` inside app folder

#### Machine Learning

A ML model to transcribe audio to text.

#### Ethereum Backend

A fallback node server that calls the Case Factory on Rinkeby Network and creates a new case with details sent by the mobile app.

Inside ethereum folder, insert 12-word mnemonic and infura node link in `./ethereum/web3.js` and then Run `./node_modules/babel-cli/bin/babel-node.js --presets node6 ./server.js`
