# first step
docker exec -it cli bash

# second step
export CORE_PEER_LOCALMSPID="thaysonMSP"
export CORE_PEER_TLS_ROOTCERT_FILE=/etc/hyperledger/channel/crypto-config/peerOrganizations/thayson.thesis.com/peers/peer0.thayson.thesis.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/channel/crypto-config/peerOrganizations/thayson.thesis.com/users/Admin@thayson.thesis.com/msp
export CORE_PEER_ADDRESS=peer0.thayson.thesis.com:7051
export CHANNEL_NAME="mychannel"
export CC_NAME="benchmark_nodejs"
export ORDERER_CA=/etc/hyperledger/channel/crypto-config/ordererOrganizations/thesis.com/orderers/orderer.thesis.com/msp/tlscacerts/tlsca.thesis.com-cert.pem
export VERSION="1"

# third step
peer lifecycle chaincode commit -o orderer.thesis.com:7050 --ordererTLSHostnameOverride orderer.thesis.com \
--tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA \
--channelID $CHANNEL_NAME --name ${CC_NAME} \
--peerAddresses peer0.thayson.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/thayson.thesis.com/peers/peer0.thayson.thesis.com/tls/ca.crt \
--peerAddresses peer0.cohuong.thesis.com:9051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/cohuong.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_us.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_us.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_sing.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_sing.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_japan.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_japan.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_eu.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_eu.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_aus.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_aus.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--version ${VERSION} --sequence ${VERSION} --init-required

# fourth step
peer chaincode invoke -o orderer.thesis.com:7050 \
--ordererTLSHostnameOverride orderer.thesis.com \
--tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA \
-C $CHANNEL_NAME -n ${CC_NAME} \
--peerAddresses peer0.thayson.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/thayson.thesis.com/peers/peer0.thayson.thesis.com/tls/ca.crt \
--peerAddresses peer0.cohuong.thesis.com:9051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/cohuong.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_us.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_us.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_sing.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_sing.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_japan.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_japan.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_eu.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_eu.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_aus.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_aus.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
-c '{"Args":["adddata","1","this is first data"]}' --isInit

for (( i = 0; i <= 100; i++ )) \
do \
peer chaincode invoke -o orderer.thesis.com:7050 \
--ordererTLSHostnameOverride orderer.thesis.com \
--tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA \
-C $CHANNEL_NAME -n ${CC_NAME} \
--peerAddresses peer0.thayson.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/thayson.thesis.com/peers/peer0.thayson.thesis.com/tls/ca.crt \
--peerAddresses peer0.cohuong.thesis.com:9051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/cohuong.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_us.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_us.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_sing.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_sing.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_japan.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_japan.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_eu.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_eu.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
--peerAddresses peer0.node_aus.thesis.com:7051 --tlsRootCertFiles /etc/hyperledger/channel/crypto-config/peerOrganizations/node_aus.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt \
-c '{"Args":["adddata","1","this is test data"]}'
done \


