# install docker
https://docs.docker.com/engine/install/debian/
# install docker-compose
https://docs.docker.com/compose/install/
# install npm, nodejs,pythong,golang
sudo apt-get install nodejs
sudo apt-get install npm
sudo apt-get install python
sudo apt update

curl -O https://dl.google.com/go/go1.12.7.linux-amd64.tar.gz

tar xvf go1.12.7.linux-amd64.tar.gz
sudo chown -R root:root ./go
sudo mv go /usr/local

nano ~/.profile

export GOPATH=/usr/local/go
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
source ~/.profile
# install hyperledger fabric
curl -sSL https://bit.ly/2ysbOFE | bash -s
echo 'export PATH="$PATH:/usr/local/go/bin:/home/duyminh/fabric-samples/bin"' >> $HOME/.profile
source $HOME/.profile


sudo curl -L "https://github.com/docker/compose/releases/download/v1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose


# Replace with the latest version from https://github.com/docker/compose/releases/latest
DOCKER_COMPOSE_VERSION="2.1.1"
# For 64-bit OS use:
DOCKER_COMPOSE_ARCH="aarch64"
# For 32-bit OS use:
DOCKER_COMPOSE_ARCH="armv7"

sudo curl -L "https://github.com/docker/compose/releases/download/v${DOCKER_COMPOSE_VERSION}/docker-compose-linux-${DOCKER_COMPOSE_ARCH}" -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose