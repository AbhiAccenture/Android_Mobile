const Utils = require('../utils/utils');
const bookASpace = require("../screenobjects/bookASpace.screen");

describe('1_BOOKASpace_Conference', () => {

    it('1_BOOKASpace_Conference', async () => {
        await Utils.newSignIn();
        await bookASpace.bookConferenceRoom();
    });
  
  });