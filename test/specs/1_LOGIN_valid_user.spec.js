const Utils = require('../utils/utils');

describe('1_LOGIN_valid_user', () => {

  it('1_LOGIN_valid_user', async () => {
    await Utils.newSignIn();
  });

});
