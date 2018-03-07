echo '1. Setting up ubuntu locale...'
export LC_ALL="en_US.UTF-8"
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
sudo dpkg-reconfigure locales
git config credential.helper store
echo '2. Cloning github...'
git clone https://github.com/piy0999/Egalex
echo '3. Installing python3 pip...'
sudo apt install python3-pip
echo '4. Installing packages...'
sudo pip3 install -r ~/Egalex/firm_node/multichain/requirements.txt
echo '5. Installing multichain...'
cd ~/tmp
wget https://www.multichain.com/download/multichain-1.0.4.tar.gz
tar -xvzf multichain-1.0.4.tar.gz
cd multichain-1.0.4
sudo mv multichaind multichain-cli multichain-util /usr/local/bin
cd ~
echo '6. Connecting to multichain chain...'
multichaind chain1@$1
multichaind chain1 -daemon
echo '7. Opening ports...'
sudo ufw allow 22
sudo ufw allow 5000
sudo ufw enable
echo '8. Setting up local credentials for multichain...'
port=`grep default-rpc-port ~/.multichain/chain1/params.dat | grep -oP '[0-9]{4}'`
password=`grep rpcpassword  ~/.multichain/chain1/multichain.conf | cut -d'=' -f2`
cat >~/Egalex/firm_node/multichain/API/credentials.json <<EOF
    {
      "rpcuser": "multichainrpc",
      "rpcpasswd": "$password",
      "rpchost": "localhost",
      "rpcport": "$port",
      "chainname": "chain1"
    }
EOF
echo '9. Starting flask server...'
cd ~/Egalex/firm_node/multichain/API
python3 app.py
