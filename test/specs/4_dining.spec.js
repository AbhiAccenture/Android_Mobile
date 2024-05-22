const Utils = require('../utils/utils');
const dining = require('../screenobjects/dining.screen');

describe('4_diningTile', () => {

    it('4_diningTile', async () => {
        await Utils.newSignIn(); 
        await dining.diningTile();
    });
  
  });