export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/../orderer/crypto-config/ordererOrganizations/thesis.com/orderers/orderer.thesis.com/msp/tlscacerts/tlsca.thesis.com-cert.pem
export PEER0_nodeeu_CA=${PWD}/crypto-config/peerOrganizations/nodeeu.thesis.com/peers/peer0.nodeeu.thesis.com/tls/ca.crt
export FABRIC_CFG_PATH=${PWD}/../../artifacts/channel/config/

export CHANNEL_NAME=mychannel

setGlobalsForPeer0nodeeu() {
    export CORE_PEER_LOCALMSPID="nodeeuMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_nodeeu_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/nodeeu.thesis.com/users/Admin@nodeeu.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:9051

}
setGlobalsForPeer1nodeeu() {
    export CORE_PEER_LOCALMSPID="nodeeuMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_nodeeu_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/nodeeu.thesis.com/users/Admin@nodeeu.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:10051

}
fetchChannelBlock() {
    rm -rf ./channel-artifacts/*
    setGlobalsForPeer0nodeeu
    # Replace localhost with your orderer's vm IP address
    peer channel fetch 0 ./channel-artifacts/$CHANNEL_NAME.block -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.thesis.com \
        -c $CHANNEL_NAME --tls --cafile $ORDERER_CA
}
joinChannel() {
    setGlobalsForPeer0nodeeu
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block

    setGlobalsForPeer1nodeeu
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block

}

updateAnchorPeers() {
    setGlobalsForPeer0nodeeu
    # Replace localhost with your orderer's vm IP address
    peer channel update -o localhost:7050 --ordererTLSHostnameOverride orderer.thesis.com \
        -c $CHANNEL_NAME -f ./../../artifacts/channel/${CORE_PEER_LOCALMSPID}anchors.tx \
        --tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA

}

# updateAnchorPeers

fetchChannelBlock
joinChannel
updateAnchorPeers
