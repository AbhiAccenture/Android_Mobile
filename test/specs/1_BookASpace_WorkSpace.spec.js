const Utils = require('../utils/utils');
const bookASpace = require("../screenobjects/bookASpace.screen");

describe('1_BOOKASpace_WorkSpace', () => {

    it('1_BOOKASpace_WorkSpace', async () => {
        await Utils.newSignIn(); 
        await bookASpace.bookWorkSpace();
    });
  
  });