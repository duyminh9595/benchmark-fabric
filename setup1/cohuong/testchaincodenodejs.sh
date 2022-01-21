export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/../orderer/crypto-config/ordererOrganizations/thesis.com/orderers/orderer.thesis.com/msp/tlscacerts/tlsca.thesis.com-cert.pem
export PEER0_cohuong_CA=${PWD}/crypto-config/peerOrganizations/cohuong.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt
export PEER0_cohuong_CA=${PWD}/../cohuong/crypto-config/peerOrganizations/cohuong.thesis.com/peers/peer0.cohuong.thesis.com/tls/ca.crt
export FABRIC_CFG_PATH=${PWD}/../../artifacts/channel/config/


export CHANNEL_NAME=mychannel

setGlobalsForPeer0cohuong() {
    export CORE_PEER_LOCALMSPID="cohuongMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_cohuong_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/cohuong.thesis.com/users/Admin@cohuong.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:9051

}

setGlobalsForPeer1cohuong() {
    export CORE_PEER_LOCALMSPID="cohuongMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_cohuong_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/cohuong.thesis.com/users/Admin@cohuong.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:10051

}


CHANNEL_NAME="mychannel"
CC_RUNTIME_LANGUAGE="node"
VERSION="1"
CC_SRC_PATH="./../../artifacts/src/chaincodeonthayson"
CC_NAME="benchmark_nodejs"


packageChaincode() {
    rm -rf ${CC_NAME}.tar.gz
    setGlobalsForPeer0cohuong
    peer lifecycle chaincode package ${CC_NAME}.tar.gz \
        --path ${CC_SRC_PATH} --lang ${CC_RUNTIME_LANGUAGE} \
        --label ${CC_NAME}_${VERSION}
    echo "===================== Chaincode is packaged on peer0.cohuong ===================== "
}
packageChaincode

installChaincode() {
    setGlobalsForPeer0cohuong
    peer lifecycle chaincode install ${CC_NAME}.tar.gz
    echo "===================== Chaincode is installed on peer0.cohuong ===================== "

}

installChaincode

queryInstalled() {
    setGlobalsForPeer0cohuong
    peer lifecycle chaincode queryinstalled >&log.txt
    cat log.txt
    PACKAGE_ID=$(sed -n "/${CC_NAME}_${VERSION}/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
    echo PackageID is ${PACKAGE_ID}
    echo "===================== Query installed successful on peer0.cohuong on channel ===================== "
}

queryInstalled

approveForMycohuong() {
    setGlobalsForPeer0cohuong
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
approveForMycohuong

checkCommitReadyness() {
    setGlobalsForPeer0cohuong
    peer lifecycle chaincode checkcommitreadiness \
        --channelID $CHANNEL_NAME --name ${CC_NAME} --version ${VERSION} \
        --sequence ${VERSION} --output json --init-required
    echo "===================== checking commit readyness from org 1 ===================== "
}

checkCommitReadyness

