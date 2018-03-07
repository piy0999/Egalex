echo '1. Setting up ubuntu locale...'
export LC_ALL="en_US.UTF-8"
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
sudo dpkg-reconfigure locales
git config credential.helper store
echo '2. Cloning github...'
git clone https://github.com/piy0999/CreditSense-Private.git
echo '3. Installing python3 pip...'
sudo apt install python3-pip
echo '4. Installing packages...'
sudo pip3 install -r ~/CreditSense-Private/bank_node/requirements.txt
echo '5. Installing multichain...'
cd ~/tmp
wget https://www.multichain.com/download/multichain-1.0.4.tar.gz
tar -xvzf multichain-1.0.4.tar.gz
cd multichain-1.0.4
sudo mv multichaind multichain-cli multichain-util /usr/local/bin
cd ~
echo '6. Creating multichain chain and stream...'
multichain-util create chain1
sed -i -e 's/anyone-can-connect = false/anyone-can-connect = true/g' ~/.multichain/chain1/params.dat
sed -i -e 's/anyone-can-send = false/anyone-can-send = true/g' ~/.multichain/chain1/params.dat
sed -i -e 's/anyone-can-receive = false/aanyone-can-receive = true/g' ~/.multichain/chain1/params.dat
multichaind chain1 -daemon
multichain-cli chain1 create strm1
echo '7. Opening ports...'
sudo ufw allow 22
sudo ufw allow 5000
sudo ufw enable
echo '8. Setting up local credentials for multichain...'
port=`grep default-rpc-port ~/.multichain/chain1/params.dat | grep -oP '[0-9]{4}'`
password=`grep rpcpassword  ~/.multichain/chain1/multichain.conf | cut -d'=' -f2`
cat >~/CreditSense-Private/bank_node/API/credentials.json <<EOF
    {
      "rpcuser": "multichainrpc",
      "rpcpasswd": "$password",
      "rpchost": "localhost",
      "rpcport": "$port",
      "chainname": "chain1"
    }
EOF
echo '9. Starting flask server...'
cd ~/CreditSense-Private/bank_node/API
python3 app.py
