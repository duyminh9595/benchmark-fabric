
chmod -R 0755 ./crypto-config
# Delete existing artifacts
rm -rf ./crypto-config
rm genesis.block mychannel.tx
rm -rf ../../channel-artifacts/*

#Generate Crypto artifactes for organizations
# cryptogen generate --config=./crypto-config.yaml --output=./crypto-config/



# System channel
SYS_CHANNEL="sys-channel"

# channel name defaults to "mychannel"
CHANNEL_NAME="mychannel"

echo $CHANNEL_NAME

# Generate System Genesis block
configtxgen -profile OrdererGenesis -configPath . -channelID $SYS_CHANNEL  -outputBlock ./genesis.block


# Generate channel configuration block
configtxgen -profile BasicChannel -configPath . -outputCreateChannelTx ./mychannel.tx -channelID $CHANNEL_NAME


echo "#######    Generating anchor peer update for thaysonMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./thaysonMSPanchors.tx -channelID $CHANNEL_NAME -asOrg thaysonMSP

echo "#######    Generating anchor peer update for cohuongMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./cohuongMSPanchors.tx -channelID $CHANNEL_NAME -asOrg cohuongMSP

echo "#######    Generating anchor peer update for node_usMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./nodeusMSPanchors.tx -channelID $CHANNEL_NAME -asOrg nodeusMSP

echo "#######    Generating anchor peer update for node_singMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./nodesingMSPanchors.tx -channelID $CHANNEL_NAME -asOrg nodesingMSP

echo "#######    Generating anchor peer update for node_japanMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./nodejapanMSPanchors.tx -channelID $CHANNEL_NAME -asOrg nodejapanMSP

echo "#######    Generating anchor peer update for node_euMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./nodeeuMSPanchors.tx -channelID $CHANNEL_NAME -asOrg nodeeuMSP

echo "#######    Generating anchor peer update for nodeausMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./nodeausMSPanchors.tx -channelID $CHANNEL_NAME -asOrg nodeausMSP


