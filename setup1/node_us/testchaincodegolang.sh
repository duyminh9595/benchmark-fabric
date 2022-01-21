export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/../orderer/crypto-config/ordererOrganizations/thesis.com/orderers/orderer.thesis.com/msp/tlscacerts/tlsca.thesis.com-cert.pem
export PEER0_node_us_CA=${PWD}/crypto-config/peerOrganizations/node_us.thesis.com/peers/peer0.node_us.thesis.com/tls/ca.crt
export FABRIC_CFG_PATH=${PWD}/../../artifacts/channel/config/


export CHANNEL_NAME=mychannel

setGlobalsForPeer0node_us() {
    export CORE_PEER_LOCALMSPID="node_usMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_node_us_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/node_us.thesis.com/users/Admin@node_us.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:7051
}

setGlobalsForPeer1node_us() {
    export CORE_PEER_LOCALMSPID="node_usMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_node_us_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/node_us.thesis.com/users/Admin@node_us.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:8051

}


presetup() {
    echo Vendoring Go dependencies ...
    pushd /home/ubuntu/IOT_BlockChain/artifacts/src/benchmark_go
    go mod vendor
    popd
    echo Finished vendoring Go dependencies
}
presetup

CHANNEL_NAME="mychannel"
CC_RUNTIME_LANGUAGE="golang"
VERSION="1"
CC_SRC_PATH="/home/ubuntu/IOT_BlockChain/artifacts/src/benchmark_go"
CC_NAME="benchmark_go"


packageChaincode() {
    rm -rf ${CC_NAME}.tar.gz
    setGlobalsForPeer0node_us
    peer lifecycle chaincode package ${CC_NAME}.tar.gz \
        --path ${CC_SRC_PATH} --lang ${CC_RUNTIME_LANGUAGE} \
        --label ${CC_NAME}_${VERSION}
    echo "===================== Chaincode is packaged on peer0.node_us ===================== "
}
packageChaincode

installChaincode() {
    setGlobalsForPeer0node_us
    peer lifecycle chaincode install ${CC_NAME}.tar.gz
    echo "===================== Chaincode is installed on peer0.node_us ===================== "

}

installChaincode

queryInstalled() {
    setGlobalsForPeer0node_us
    peer lifecycle chaincode queryinstalled >&log.txt
    cat log.txt
    PACKAGE_ID=$(sed -n "/${CC_NAME}_${VERSION}/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
    echo PackageID is ${PACKAGE_ID}
    echo "===================== Query installed successful on peer0.node_us on channel ===================== "
}

queryInstalled

approveForMynode_us() {
    setGlobalsForPeer0node_us
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
approveForMynode_us

checkCommitReadyness() {
    setGlobalsForPeer0node_us
    peer lifecycle chaincode checkcommitreadiness \
        --channelID $CHANNEL_NAME --name ${CC_NAME} --version ${VERSION} \
        --sequence ${VERSION} --output json --init-required
    echo "===================== checking commit readyness from org 1 ===================== "
}

checkCommitReadyness

