'use strict';

// SDK Library to asset with writing the logic 
const { Contract } = require('fabric-contract-api');

class IOTContract extends Contract {

  constructor() {
    super('IOTContract');
    this.TxId = ''
  }

  async beforeTransaction(ctx) {
    // default implementation is do nothing
    this.TxId = ctx.stub.getTxID();
    console.log(`we can do some logging for ${this.TxId}  and many more !!`)
  }


  //dang ky nong trai
  async registerNongTrai(ctx, name, description, address, phone, email, website, facebook, logo
    , location) {
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();
    const nongtrai = {
      name, description, address, phone, email, website, facebook, logo
      , location, mspid,
      docType: 'NongTrai', idpeople
    };
    await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(nongtrai)));
    console.info('============= END : Create Nong Trai Thanh Cong ===========');
  }
  //querry nong trai
  async querryNongTrai(ctx, addressnongtrai) {
    const nongtraiAsBytes = await ctx.stub.getState(addressnongtrai);
    if (!nongtraiAsBytes || nongtraiAsBytes.length === 0) {
      throw new Error(`${nongtraiAsBytes} does not exist`);
    }
    console.log(nongtraiAsBytes.toString());
    return nongtraiAsBytes.toString();
  }
  //xem tất cả nông trại
  async xemTatCaNongTrai(ctx) {
    let queryString = {};
    queryString.selector = {};
    queryString.selector.docType = 'NongTrai'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //them sản phẩm vào nông trại
  async themsanphamnongtrai(ctx, addressnongtrai, name, description) {
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();
    const nongtraiAsBytes = await ctx.stub.getState(addressnongtrai);
    if (!nongtraiAsBytes || nongtraiAsBytes.length === 0) {
      throw new Error(`${nongtraiAsBytes} does not exist`);
    }
    const sanpham = {
      name, description, addressnongtrai, docType: 'Product', mspid, idpeople
    }
    await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(sanpham)));
    console.info('============= END : Create Nong San cho Nong Trai Thanh Cong ===========');
  }
  //xem tat ca san pham cua 1 nong trai
  async xemTatCaSanPhamCua1NongTrai(ctx, addressnongtrai) {
    let queryString = {};
    queryString.selector = {};
    queryString.selector.addressnongtrai = addressnongtrai
    queryString.selector.docType = 'Product'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //xem tat ca san pham co
  async xemTatCaSanPham(ctx) {
    let queryString = {};
    queryString.selector = {};
    queryString.selector.docType = 'Product'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //them 1 khu vuc vao 1 nong trai
  async addAreaToAFarm(ctx, name, description, addressfarm) {
    const nongtraiAsBytes = await ctx.stub.getState(addressfarm);
    if (!nongtraiAsBytes || nongtraiAsBytes.length === 0) {
      throw new Error(`${nongtraiAsBytes} does not exist`);
    }
    const nongtraiInfo = JSON.parse(nongtraiAsBytes.toString());
    const idpeople = await ctx.clientIdentity.getID();
    const mspid = await ctx.clientIdentity.getMSPID();
    if (nongtraiInfo.mspid === mspid) {
      const area = {
        name, description, addressfarm, docType: 'Area', mspid, idpeople
      }
      await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(area)));
      console.info('============= END : Create Khu Vuc cho Nong Trai Thanh Cong ===========');
    }
    else {
      throw new Error(`${nongtraiAsBytes} does not exist`);
    }
  }
  //xem tat ca khu vuc cua 1 node
  async xemTatCaKhuVucCua1Node(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'Area'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //xem tat ca khu vuc cua 1 nong trai
  async xemTatCaKhuVucCua1NongTrai(ctx, addressfarm) {
    let queryString = {};
    queryString.selector = {};
    queryString.selector.addressfarm = addressfarm
    queryString.selector.docType = 'Area'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //xem tat ca khu vuc co
  async xemTatCaArea(ctx) {
    let queryString = {};
    queryString.selector = {};
    queryString.selector.docType = 'Area'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //dang ky nguoi dung
  async registerUser(ctx, name, avatar, email, phone, address, facebook, role, portfolio, password) {
    const userAsBytes = await ctx.stub.getState(email);
    if (!userAsBytes || userAsBytes.length === 0) {
      const mspid = await ctx.clientIdentity.getMSPID();
      const idpeople = await ctx.clientIdentity.getID();
      const user = {
        name, avatar, email, phone, address, facebook, role, portfolio, mspid, password, docType: 'User', idpeople
      }
      await ctx.stub.putState(email, Buffer.from(JSON.stringify(user)));
      console.info(`${mspid} da dang ky user với email ${email} thành công`);
    }
    else {
      throw new Error(`${userAsBytes} exist in system`);
    }
  }
  //xem tat ca user da dang ky trong to chuc
  async xemTatCaUserCuaToChuc(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'User'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //query user
  async queryUser(ctx, email) {
    const mspid = await ctx.clientIdentity.getMSPID();
    const userAsBytes = await ctx.stub.getState(email);
    if (!userAsBytes || userAsBytes.length === 0) {
      throw new Error(`${userAsBytes} does not exist`);
    }
    const userInfo = JSON.parse(userAsBytes.toString());
    if (userInfo.mspid === mspid) {
      return userAsBytes.toString()
    }
    throw new Error(`${userAsBytes} does not exist in ${mspid}`);
  }
  //doi mat khau
  async changePassword(ctx, email, password) {
    const userAsBytes = await ctx.stub.getState(email);
    if (!userAsBytes || userAsBytes.length === 0) {
      throw new Error(`${userAsBytes} does not exist`);
    }
    const userInfo = JSON.parse(userAsBytes.toString());
    const mspid = await ctx.clientIdentity.getMSPID();
    if (userInfo.mspid === mspid) {
      userInfo.password = password;
      await ctx.stub.putState(email, Buffer.from(JSON.stringify(userInfo)));
      console.info('============= END : change Password User ===========');
    }
    else {
      throw new Error(`${userAsBytes} does not exist in ${mspid}`);
    }
  }

  //create planting season
  async createplantingseason(ctx, name, addressfarm, email) {
    const nongtraiAsBytes = await ctx.stub.getState(addressfarm);
    if (!nongtraiAsBytes || nongtraiAsBytes.length === 0) {
      throw new Error(`${nongtraiAsBytes} does not exist`);
    }
    const mspid = await ctx.clientIdentity.getMSPID();
    const nongtraiInfo = JSON.parse(nongtraiAsBytes.toString());
    if (nongtraiInfo.mspid === mspid) {
      const idpeople = await ctx.clientIdentity.getID();
      let _keyHelper = new Date();
      const plantingseason = {
        docType: 'PlantingSeason', name, txId: this.TxId, mspid, idpeople, datecreated: _keyHelper, addressfarm, email
      }
      try {
        // store the composite key with a the value
        let indexName = 'year~month~date~mspid~txid'
        let _keyYearAsString = _keyHelper.getFullYear().toString()
        let _keyMonthAsString = _keyHelper.getMonth().toString()
        let _keyDateAsString = _keyHelper.getDate().toString();

        let yearMonthIndexKey = await ctx.stub.createCompositeKey(indexName, [_keyYearAsString, _keyMonthAsString, _keyDateAsString, mspid, this.TxId]);

        //console.info(yearMonthIndexKey, _keyYearAsString, _keyMonthAsString, this.TxId);

        // store the new state
        await ctx.stub.putState(yearMonthIndexKey, Buffer.from(JSON.stringify(plantingseason)));

        // compose the return values
        return {
          key: _keyYearAsString + '~' + _keyMonthAsString + '~' + _keyDateAsString + '~' + mspid + '~' + this.TxId
        };

      } catch (e) {
        throw new Error(`The tx ${this.TxId} can not be stored: ${e}`);
      }
    }
    else {
      throw new Error(`${nongtraiAsBytes} does not exist in ${mspid}`);
    }
  }
  async getCsByYearMonthDate(ctx) {

    // we use the args option
    const args = ctx.stub.getArgs();

    // we split the key into single peaces
    const keyValues = args[1].split('~')

    // collect the keys
    let keys = []
    keyValues.forEach(element => keys.push(element))

    // do the query
    let resultsIterator = await ctx.stub.getStateByPartialCompositeKey('year~month~date~mspid~txid', keys);

    // prepare the result
    const allResults = [];
    while (true) {
      const res = await resultsIterator.next();

      if (res.value) {
        allResults.push(res.value.value.toString('utf8'));

      }


      if (res.done) {

        await resultsIterator.close();
        return allResults;
      }
    }
  }
  //get all plating season by msp
  async getAllPlantingSeasonByMsp(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'PlantingSeason'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //tao planting
  async createPlanting(ctx, plantingseason, email, source, description) {
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();
    const args = ctx.stub.getArgs();

    // we split the key into single peaces
    const keyValues = plantingseason.split('~')
    console.log(keyValues);
    // collect the keys
    let keys = []
    keyValues.forEach(element => keys.push(element))
    console.log(keys)

    let resultsIterator = await ctx.stub.getStateByPartialCompositeKey('year~month~date~mspid~txid', keys);

    while (true) {
      const res = await resultsIterator.next();

      if (res.value) {
        const resultInfo = JSON.parse(res.value.value.toString('utf8'));
        if (resultInfo.mspid === mspid) {
          const userAsBytes = await ctx.stub.getState(email);
          if (!userAsBytes || userAsBytes.length === 0) {
            throw new Error(`${userAsBytes} does not exist`);
          }
          const userInfo = JSON.parse(userAsBytes.toString());
          if (userInfo.mspid === mspid) {
            let _keyHelper = new Date();
            const doPlanting = {
              email, source, description, datecreated: _keyHelper, docType: 'DoPlanting', plantingseason, mspid, idpeople
            }
            await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(doPlanting)));
            console.info('============= END : Create Planting Thanh Cong ===========');
            return this.txId;
          }
          else {
            throw new Error(`${userAsBytes} does not exist in ${mspid}`);
          }
        }
        else {
          throw new Error(`${plantingseason} does not belong to ${mspid}`);
        }
      }
      else {
        throw new Error(`${plantingseason} khong ton tai`);
      }
    }
  }
  //get all planting by msp
  async getPlantingbymsp(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'DoPlanting'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //get all planting by msp and id planting season
  async getPlantingbymspandidplantingseason(ctx, plantingseason) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.plantingseason = plantingseason
    queryString.selector.docType = 'DoPlanting'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  async createFertilizing(ctx, plantingseason, email, fertilizerType, description) {
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();

    // we split the key into single peaces
    const keyValues = plantingseason.split('~')
    console.log(keyValues);
    // collect the keys
    let keys = []
    keyValues.forEach(element => keys.push(element))
    console.log(keys)

    let resultsIterator = await ctx.stub.getStateByPartialCompositeKey('year~month~date~mspid~txid', keys);

    while (true) {
      const res = await resultsIterator.next();

      if (res.value) {
        const resultInfo = JSON.parse(res.value.value.toString('utf8'));
        if (resultInfo.mspid === mspid) {
          const userAsBytes = await ctx.stub.getState(email);
          if (!userAsBytes || userAsBytes.length === 0) {
            throw new Error(`${userAsBytes} does not exist`);
          }
          const userInfo = JSON.parse(userAsBytes.toString());
          if (userInfo.mspid === mspid) {
            let _keyHelper = new Date();
            const doPlanting = {
              email, fertilizerType, description, datecreated: _keyHelper, docType: 'DoFertilizing', plantingseason, mspid, idpeople
            }
            await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(doPlanting)));
            console.info('============= END : Create Planting Thanh Cong ===========');
            return this.txId;
          }
          else {
            throw new Error(`${userAsBytes} does not exist in ${mspid}`);
          }
        }
        else {
          throw new Error(`${plantingseason} does not belong to ${mspid}`);
        }
      }
      else {
        throw new Error(`${plantingseason} khong ton tai`);
      }
    }
  }
  //get all fertilizing by msp
  async getFertilizingbymsp(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'DoFertilizing'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //get all fertilizing by msp and id planting season
  async getFertilizingbymspandidplantingseason(ctx, plantingseason) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.plantingseason = plantingseason
    queryString.selector.docType = 'DoFertilizing'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  async createCare(ctx, plantingseason, email, method, description) {
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();

    // we split the key into single peaces
    const keyValues = plantingseason.split('~')
    console.log(keyValues);
    // collect the keys
    let keys = []
    keyValues.forEach(element => keys.push(element))
    console.log(keys)

    let resultsIterator = await ctx.stub.getStateByPartialCompositeKey('year~month~date~mspid~txid', keys);

    while (true) {
      const res = await resultsIterator.next();

      if (res.value) {
        const resultInfo = JSON.parse(res.value.value.toString('utf8'));
        if (resultInfo.mspid === mspid) {
          const userAsBytes = await ctx.stub.getState(email);
          if (!userAsBytes || userAsBytes.length === 0) {
            throw new Error(`${userAsBytes} does not exist`);
          }
          const userInfo = JSON.parse(userAsBytes.toString());
          if (userInfo.mspid === mspid) {
            let _keyHelper = new Date();
            const doPlanting = {
              email, method, description, datecreated: _keyHelper, docType: 'DoCaring', plantingseason, mspid, idpeople
            }
            await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(doPlanting)));
            console.info('============= END : Create Planting Thanh Cong ===========');
            return this.txId;
          }
          else {
            throw new Error(`${userAsBytes} does not exist in ${mspid}`);
          }
        }
        else {
          throw new Error(`${plantingseason} does not belong to ${mspid}`);
        }
      }
      else {
        throw new Error(`${plantingseason} khong ton tai`);
      }
    }
  }
  //get all fertilizing by msp
  async getCaringbymsp(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'DoCaring'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //get all fertilizing by msp and id planting season
  async getCaringbymspandidplantingseason(ctx, plantingseason) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.plantingseason = plantingseason
    queryString.selector.docType = 'DoCaring'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  async createHarvesting(ctx, plantingseason, email, quantity, description, result) {
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();

    // we split the key into single peaces
    const keyValues = plantingseason.split('~')
    console.log(keyValues);
    // collect the keys
    let keys = []
    keyValues.forEach(element => keys.push(element))
    console.log(keys)

    let resultsIterator = await ctx.stub.getStateByPartialCompositeKey('year~month~date~mspid~txid', keys);

    while (true) {
      const res = await resultsIterator.next();

      if (res.value) {
        const resultInfo = JSON.parse(res.value.value.toString('utf8'));
        if (resultInfo.mspid === mspid) {
          const userAsBytes = await ctx.stub.getState(email);
          if (!userAsBytes || userAsBytes.length === 0) {
            throw new Error(`${userAsBytes} does not exist`);
          }
          const userInfo = JSON.parse(userAsBytes.toString());
          if (userInfo.mspid === mspid) {
            let _keyHelper = new Date();
            const doPlanting = {
              email, quantity, description, datecreated: _keyHelper, docType: 'DoHarvesting', plantingseason, mspid, idpeople, result
            }
            await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(doPlanting)));
            console.info('============= END : Create Planting Thanh Cong ===========');
            return this.txId;
          }
          else {
            throw new Error(`${userAsBytes} does not exist in ${mspid}`);
          }
        }
        else {
          throw new Error(`${plantingseason} does not belong to ${mspid}`);
        }
      }
      else {
        throw new Error(`${plantingseason} khong ton tai`);
      }
    }
  }
  //get all harvesting by msp
  async getHarvestingbymsp(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'DoHarvesting'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //get all harvesting by msp and id planting season
  async getHarvestingbymspandidplantingseason(ctx, plantingseason) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.plantingseason = plantingseason
    queryString.selector.docType = 'DoHarvesting'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //them thiet bi
  async addDevice(ctx, addressfarm, email, location, name, description) {
    const locationAsBytes = await ctx.stub.getState(location);
    if (!locationAsBytes || locationAsBytes.length === 0) {
      throw new Error(`${locationAsBytes} does not exist`);
    }
    const userAsBytes = await ctx.stub.getState(email);
    if (!userAsBytes || userAsBytes.length === 0) {
      throw new Error(`${userAsBytes} does not exist`);
    }
    const userInfo = JSON.parse(userAsBytes.toString());
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();
    const locationInfo = JSON.parse(locationAsBytes.toString());
    if (userInfo.mspid === mspid && locationInfo.mspid === mspid && locationInfo.addressfarm === addressfarm) {
      const device = {
        addressfarm, description, location, docType: 'Device', mspid, idpeople, name
      }
      await ctx.stub.putState(this.TxId, Buffer.from(JSON.stringify(device)));
      return this.txId
    }
    else {
      throw new Error(`Not exist`);
    }
  }
  //get all thiet bi base on mspid
  async getAllDeviceBaseOnMSP(ctx) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.docType = 'Device'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //get all thiet bi base on mspid and farm address
  async getAllDeviceBaseOnMSPAndFarmAddress(ctx, addressfarm) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.addressfarm = addressfarm
    queryString.selector.docType = 'Device'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  //get all thiet bi base on mspid and area address
  async getAllDeviceBaseOnMSPAndAreaAddress(ctx, location) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.location = location
    queryString.selector.docType = 'Device'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  async sendInfoToDevice(ctx, deviceid, nhietdo, doam) {
    const deviceAsBytes = await ctx.stub.getState(deviceid);
    if (!deviceAsBytes || deviceAsBytes.length === 0) {
      throw new Error(`${deviceAsBytes} does not exist`);
    }
    const mspid = await ctx.clientIdentity.getMSPID();
    const idpeople = await ctx.clientIdentity.getID();
    let _keyHelper = new Date();
    const dataDevice = {
      docType: 'DataDevice', txId: this.TxId, mspid, idpeople, datecreated: _keyHelper, nhietdo, doam, deviceid
    }
    try {
      // store the composite key with a the value
      let indexName = 'year~month~date~deviceid~txid'
      let _keyYearAsString = _keyHelper.getFullYear().toString()
      let _keyMonthAsString = _keyHelper.getMonth().toString()
      let _keyDateAsString = _keyHelper.getDate().toString();

      let yearMonthIndexKey = await ctx.stub.createCompositeKey(indexName, [_keyYearAsString, _keyMonthAsString, _keyDateAsString, deviceid, this.TxId]);

      //console.info(yearMonthIndexKey, _keyYearAsString, _keyMonthAsString, this.TxId);

      // store the new state
      await ctx.stub.putState(yearMonthIndexKey, Buffer.from(JSON.stringify(dataDevice)));

      // compose the return values
      return {
        key: _keyYearAsString + '~' + _keyMonthAsString + '~' + _keyDateAsString + '~' + deviceid + '~' + this.TxId
      };

    } catch (e) {
      throw new Error(`The tx ${this.TxId} can not be stored: ${e}`);
    }
  }
  async getInfoDeviceHasSend(ctx, deviceid) {
    let queryString = {};
    const mspid = await ctx.clientIdentity.getMSPID();
    queryString.selector = {};
    queryString.selector.mspid = mspid
    queryString.selector.deviceid = deviceid
    queryString.selector.docType = 'DataDevice'
    let queryResults = await this.getQueryResultForQueryString(ctx.stub, JSON.stringify(queryString));
    return queryResults; //shim.success(queryResults);
  }
  async getQueryResultForQueryString(stub, queryString) {

    console.info('- getQueryResultForQueryString queryString:\n' + queryString)
    let resultsIterator = await stub.getQueryResult(queryString);

    let results = await this.getAllResults(resultsIterator, false);

    //return Buffer.from(JSON.stringify(results));
    return results;
  }
  async getAllResults(iterator, isHistory) {
    let allResults = [];
    while (true) {
      let res = await iterator.next();

      if (res.value && res.value.value.toString()) {
        let jsonRes = {};
        console.log(res.value.value.toString('utf8'));

        if (isHistory && isHistory === true) {
          jsonRes.TxId = res.value.tx_id;
          jsonRes.Timestamp = res.value.timestamp;
          jsonRes.IsDelete = res.value.is_delete.toString();
          try {
            jsonRes.Value = JSON.parse(res.value.value.toString('utf8'));
          } catch (err) {
            console.log(err);
            jsonRes.Value = res.value.value.toString('utf8');
          }
        } else {
          jsonRes.Key = res.value.key;
          try {
            jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
          } catch (err) {
            console.log(err);
            jsonRes.Record = res.value.value.toString('utf8');
          }
        }
        allResults.push(jsonRes);
      }
      if (res.done) {
        console.log('end of data');
        await iterator.close();
        console.info(allResults);
        return allResults;
      }
    }
  }

}

module.exports = IOTContract