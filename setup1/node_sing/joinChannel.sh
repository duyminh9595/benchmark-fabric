export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/../orderer/crypto-config/ordererOrganizations/thesis.com/orderers/orderer.thesis.com/msp/tlscacerts/tlsca.thesis.com-cert.pem
export PEER0_node_sing_CA=${PWD}/crypto-config/peerOrganizations/node_sing.thesis.com/peers/peer0.node_sing.thesis.com/tls/ca.crt
export FABRIC_CFG_PATH=${PWD}/../../artifacts/channel/config/

export CHANNEL_NAME=mychannel

setGlobalsForPeer0node_sing() {
    export CORE_PEER_LOCALMSPID="node_singMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_node_sing_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/node_sing.thesis.com/users/Admin@node_sing.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:9051

}
setGlobalsForPeer1node_sing() {
    export CORE_PEER_LOCALMSPID="node_singMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_node_sing_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/node_sing.thesis.com/users/Admin@node_sing.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:10051

}
fetchChannelBlock() {
    rm -rf ./channel-artifacts/*
    setGlobalsForPeer0node_sing
    # Replace localhost with your orderer's vm IP address
    peer channel fetch 0 ./channel-artifacts/$CHANNEL_NAME.block -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.thesis.com \
        -c $CHANNEL_NAME --tls --cafile $ORDERER_CA
}
joinChannel() {
    setGlobalsForPeer0node_sing
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block

    setGlobalsForPeer1node_sing
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block

}

updateAnchorPeers() {
    setGlobalsForPeer0node_sing
    # Replace localhost with your orderer's vm IP address
    peer channel update -o localhost:7050 --ordererTLSHostnameOverride orderer.thesis.com \
        -c $CHANNEL_NAME -f ./../../artifacts/channel/${CORE_PEER_LOCALMSPID}anchors.tx \
        --tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA

}

# updateAnchorPeers

fetchChannelBlock
joinChannel
updateAnchorPeers