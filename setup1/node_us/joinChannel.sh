export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/../orderer/crypto-config/ordererOrganizations/thesis.com/orderers/orderer.thesis.com/msp/tlscacerts/tlsca.thesis.com-cert.pem
export PEER0_nodeus_CA=${PWD}/crypto-config/peerOrganizations/nodeus.thesis.com/peers/peer0.nodeus.thesis.com/tls/ca.crt
export FABRIC_CFG_PATH=${PWD}/../../artifacts/channel/config/

export CHANNEL_NAME=mychannel

setGlobalsForPeer0nodeus() {
    export CORE_PEER_LOCALMSPID="nodeusMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_nodeus_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/nodeus.thesis.com/users/Admin@nodeus.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:19051

}
setGlobalsForPeer1nodeus() {
    export CORE_PEER_LOCALMSPID="nodeusMSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_nodeus_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/crypto-config/peerOrganizations/nodeus.thesis.com/users/Admin@nodeus.thesis.com/msp
    export CORE_PEER_ADDRESS=localhost:20051

}
fetchChannelBlock() {
    rm -rf ./channel-artifacts/*
    setGlobalsForPeer0nodeus
    # Replace localhost with your orderer's vm IP address
    peer channel fetch 0 ./channel-artifacts/$CHANNEL_NAME.block -o 130.211.113.30:7050 \
        --ordererTLSHostnameOverride orderer.thesis.com \
        -c $CHANNEL_NAME --tls --cafile $ORDERER_CA
}
joinChannel() {
    setGlobalsForPeer0nodeus
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block

    setGlobalsForPeer1nodeus
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block

}

updateAnchorPeers() {
    setGlobalsForPeer0nodeus
    # Replace localhost with your orderer's vm IP address
    peer channel update -o 130.211.113.30:7050 --ordererTLSHostnameOverride orderer.thesis.com \
        -c $CHANNEL_NAME -f ./../../artifacts/channel/${CORE_PEER_LOCALMSPID}anchors.tx \
        --tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA

}

# updateAnchorPeers

fetchChannelBlock
joinChannel
updateAnchorPeers
