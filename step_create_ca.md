# remove ca

cd /home/ubuntu/benchmark-fabric/setup1/thayson
rm -r -f ../thayson/crypto-config/
rm -r -f ../thayson/channel-artifacts/*
rm -r -f ../thayson/create-certificate-with-ca/fabric-ca/
rm -r -f ../cohuong/crypto-config/
rm -r -f ../cohuong/create-certificate-with-ca/fabric-ca/
rm -r -f ../orderer/crypto-config/
rm -r -f ../orderer/create-certificate-with-ca/fabric-ca/

rm -r -f ../node_japan/crypto-config/
rm -r -f ../node_japan/channel-artifacts/*
rm -r -f ../node_japan/create-certificate-with-ca/fabric-ca/
rm -r -f ../node_eu/channel-artifacts/*
rm -r -f ../node_eu/crypto-config/
rm -r -f ../node_eu/create-certificate-with-ca/fabric-ca/
rm -r -f ../node_aus/channel-artifacts/*
rm -r -f ../node_aus/crypto-config/
rm -r -f ../node_aus/create-certificate-with-ca/fabric-ca/

rm -r -f ../node_us/channel-artifacts/*
rm -r -f ../node_us/crypto-config/
rm -r -f ../node_us/create-certificate-with-ca/fabric-ca/
rm -r -f ../node_sing/channel-artifacts/*
rm -r -f ../node_sing/crypto-config/
rm -r -f ../node_sing/create-certificate-with-ca/fabric-ca/



# tạo ca
cd /home/ubuntu/benchmark-fabric/setup1/vm1/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../vm2/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../vm3/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../vm4/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../../artifacts/channel/
./create-artifacts.sh 


cd ../../node_aus/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../node_eu/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../node_japan/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../node_sing/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../node_us/create-certificate-with-ca/
docker-compose up -d
./create-certificate-with-ca.sh 

cd ../../../artifacts/channel/
./create-artifacts.sh 






