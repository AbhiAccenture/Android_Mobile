const Utils = require('../utils/utils');
const getMaintenance = require('../screenobjects/getMaintenance.screen')

describe('2_GetMaintenanceTile', () => {

    it('2_GetMaintenanceTile', async () => {
        await Utils.newSignIn(); 
        await getMaintenance.getMaintenanceTile();
    });
  
  });