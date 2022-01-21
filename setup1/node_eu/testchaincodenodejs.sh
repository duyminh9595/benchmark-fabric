export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/../orderer/crypto-config/ordererOrganizations/thesis.com/orderers/orderer.thesis.com/msp/tlscacerts/tlsca.thesis.com-cert.pem
export PEER0_node_eu_CA=${PWD}/crypto-config/peerOrganizations/node_eu.thesis.com/peers/peer0.node_eu.thesis.com/tls/ca.crt
export PEER0_cohuong_CA=${PWD}/../cohuong/crypto-config/peerOrganizations/cohuong.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt
export FABRIC_CFG_PATH=${PWD}/../../artifacts/channel/config/


export CHANNEL_NAME=mychannel

setGlobalsForPeer0node_eu() {
    export CORE_PEER_LOCALMSPID="node_euMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_node_eu_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/node_eu.thesis.com/users/Admin@node_eu.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:7051
}

setGlobalsForPeer1node_eu() {
    export CORE_PEER_LOCALMSPID="node_euMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_node_eu_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/node_eu.thesis.com/users/Admin@node_eu.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:8051

}


CHANNEL_NAME="mychannel"
CC_RUNTIME_LANGUAGE="node"
VERSION="1"
CC_SRC_PATH="./../../artifacts/src/chaincodeonthayson"
CC_NAME="benchmark_nodejs"


packageChaincode() {
    rm -rf ${CC_NAME}.tar.gz
    setGlobalsForPeer0node_eu
    peer lifecycle chaincode package ${CC_NAME}.tar.gz \
        --path ${CC_SRC_PATH} --lang ${CC_RUNTIME_LANGUAGE} \
        --label ${CC_NAME}_${VERSION}
    echo "===================== Chaincode is packaged on peer0.node_eu ===================== "
}
packageChaincode

installChaincode() {
    setGlobalsForPeer0node_eu
    peer lifecycle chaincode install ${CC_NAME}.tar.gz
    echo "===================== Chaincode is installed on peer0.node_eu ===================== "

}

installChaincode

queryInstalled() {
    setGlobalsForPeer0node_eu
    peer lifecycle chaincode queryinstalled >&log.txt
    cat log.txt
    PACKAGE_ID=$(sed -n "/${CC_NAME}_${VERSION}/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
    echo PackageID is ${PACKAGE_ID}
    echo "===================== Query installed successful on peer0.node_eu on channel ===================== "
}

queryInstalled

approveForMynode_eu() {
    setGlobalsForPeer0node_eu
    # set -x
    # Replace localhost with your orderer's vm IP address
    peer lifecycle chaincode approveformyorg -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.thesis.com --tls \
        --cafile $ORDERER_CA --channelID $CHANNEL_NAME --name ${CC_NAME} --version ${VERSION} \
        --init-required --package-id ${PACKAGE_ID} \
        --sequence ${VERSION}
    # set +x

    echo "===================== chaincode approved from org 1 ===================== "

}

queryInstalled
approveForMynode_eu

checkCommitReadyness() {
    setGlobalsForPeer0node_eu
    peer lifecycle chaincode checkcommitreadiness \
        --channelID $CHANNEL_NAME --name ${CC_NAME} --version ${VERSION} \
        --sequence ${VERSION} --output json --init-required
    echo "===================== checking commit readyness from org 1 ===================== "
}

checkCommitReadyness
