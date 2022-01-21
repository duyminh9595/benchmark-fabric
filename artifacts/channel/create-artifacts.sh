
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

CHANNEL_THAYSON="channelthayson"

echo $CHANNEL_THAYSON

CHANEL_COHUONG="channelcohuong"

echo $CHANEL_COHUONG

# Generate channel configuration block
configtxgen -profile BasicChannel -configPath . -outputCreateChannelTx ./mychannel.tx -channelID $CHANNEL_NAME


configtxgen -profile ChannelOnlyThaySon -configPath . -outputCreateChannelTx ./channelthayson.tx -channelID $CHANNEL_THAYSON


configtxgen -profile ChannelOnlyCoHuong -configPath . -outputCreateChannelTx ./channelcohuong.tx -channelID $CHANEL_COHUONG

echo "#######    Generating anchor peer update for thaysonMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./thaysonMSPanchors.tx -channelID $CHANNEL_NAME -asOrg thaysonMSP

echo "#######    Generating anchor peer update for cohuongMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./cohuongMSPanchors.tx -channelID $CHANNEL_NAME -asOrg cohuongMSP

echo "#######    Generating anchor peer update for node_usMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./node_usMSPanchors.tx -channelID $CHANNEL_NAME -asOrg node_usMSP

echo "#######    Generating anchor peer update for node_singMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./node_singMSPanchors.tx -channelID $CHANNEL_NAME -asOrg node_singMSP

echo "#######    Generating anchor peer update for node_japanMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./node_japanMSPanchors.tx -channelID $CHANNEL_NAME -asOrg node_japanMSP

echo "#######    Generating anchor peer update for node_euMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./node_euMSPanchors.tx -channelID $CHANNEL_NAME -asOrg node_euMSP

echo "#######    Generating anchor peer update for node_ausMSP  ##########"
configtxgen -profile BasicChannel -configPath . -outputAnchorPeersUpdate ./node_ausMSPanchors.tx -channelID $CHANNEL_NAME -asOrg node_ausMSP


