##### install docker
# set up the repository
sudo apt install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg-agent \
  software-properties-common

# add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -


# set up the stable repository
sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"

# install docker engine
apt update
apt install docker-ce docker-ce-cli containerd.io

# check the docker version
docker --version

# install docker-compose
https://docs.docker.com/compose/install/


export GOPATH=/usr/local/go
export PATH=$PATH:$GOPATH/bin:/home/ubuntu/fabric-samples/bin
# install npm, nodejs,pythong,golang
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install python
sudo apt update

curl -O https://dl.google.com/go/go1.12.7.linux-amd64.tar.gz

tar xvf go1.12.7.linux-amd64.tar.gz
sudo chown -R root:root ./go
sudo mv go /usr/local

vim ~/.bashrc
export GOPATH=/usr/local/go
export PATH=$PATH:$GOPATH/bin:/home/ubuntu/fabric-samples/bin
source ~/.profile
# install hyperledger fabric
curl -sSL https://bit.ly/2ysbOFE | bash -s
echo 'export PATH="$PATH:/usr/local/go/bin:/home/ubuntu/fabric-samples/bin"' >> $HOME/.profile
source $HOME/.profile


