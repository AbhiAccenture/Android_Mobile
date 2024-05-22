const Utils = require('../utils/utils');
const parking = require('../screenobjects/parking.screen')

describe('3_ParkingTile', () => {

    it('3_ParkingTile', async () => {
        await Utils.newSignIn();
        await parking.parkingTile();
    });
  
  });