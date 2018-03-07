<img src= "https://github.com/piy0999/Egalex/blob/master/images/auction%20(1).png" width="128" height="128">

## Egalex

<i> Enhancing acces to Justice ! </i>

The Project workflow is as follows:

About the project

Law firms already do pro bono work but many times they find it hard to find cases or underprivileged people find it hard to reach these firms.

We wanted to connect these two but in a way which is convenient and easy for both without us being the middlemen. The idea was to create a healthy competition between law firms. Like a sports competition but for CSR. Every two months rankings would be updated to see who's doing the most CSR work. A system like this requires somebody to organize all this so it's expensive time and money wise. We thought we can use automation to organize this and blockchain to make this cheap and decentralized.

All the law firm has to do is to just keep up a node in a private network of law firms. Any law firm can add or take cases to/from the network based on their demand/supply through a convenient web app.

Moreover, underprivileged people can also add their case to the network through a mobile app in which they just have to voice record their story.

To process this audio, we created an <b> in-house speech-to-text model </b>. After transcribing the story we push the person's ask for help to the network with a summary of his story and contact details. We did it for English to English but this could work for any language so it's really useful for people like refugees.

#### Lawyer Front-end

A react web app to see and accept cases.

#### App

A react native app which helps register new cases. Has a sound recording feature which is sent to a node js backend and transcribed.

Run `npm start` inside app folder

#### Machine Learning

A ML model to transcribe audio to text.

#### Ethereum Backend

A fallback node server that calls the Case Factory on Rinkeby Network and creates a new case with details sent by the mobile app.

Inside ethereum folder, insert 12-word mnemonic and infura node link in `./ethereum/web3.js` and then Run `./node_modules/babel-cli/bin/babel-node.js --presets node6 ./server.js`
