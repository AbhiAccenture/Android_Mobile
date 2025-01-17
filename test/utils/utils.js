const LoginScreen = require("../screenobjects/login.screen");
const bookASpace = require("../screenobjects/bookASpace.screen");

class Utils {
  async swipe(direction) {
      const size = await driver.getWindowRect();
      console.log(`SCREEN SIZE: ${size.width}x${size.height}`);
      let start_y, start_x, end_x, end_y;
      switch (direction) {
        case "down":
          start_y = size['height'] * 0.8
          start_x = size['width'] * 0.5
          end_x = size['width'] * 0.5
          end_y = size['height'] * 0.1
          break;
        case "right":
          start_y = size['height'] * 0.5
          start_x = size['width'] * 0.01
          end_x = size['width'] * 0.5
          end_y = start_y
      }
      await driver.performActions([
        {
          // a. Create the event                    
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            // b. Move finger into start position                        
            { type: 'pointerMove', duration: 0, x: start_x, y: start_y },
            // c. Finger comes down into contact with screen                        
            { type: 'pointerDown', button: 0 },
            // d. Pause for a little bit                        
            { type: 'pause', duration: 100 },
            // e. Finger moves to end position                        
            //    We move our finger from the center of the element to the                        
            //    starting position of the element.                        
            //    Play with the duration to make the swipe go slower / faster                        
            { type: 'pointerMove', duration: 1000, x: end_x, y: end_y },
            // f. Finger gets up, off the screen                        
            { type: 'pointerUp', button: 0 },
          ],
        },
      ]);
  }

  async swipeDownUntilElementIsVisible(elementLocator, maximumSwipes=2) {
    var currentSwipes = 0;
    while(! await (elementLocator).isExisting() && currentSwipes < maximumSwipes){
      console.log(`Element not visible, swiping down`);
      await this.swipe("down");
      currentSwipes++;
    }
  }

  getElementWithText(text) {
    return $(`//*[contains(@text,"${text}") or contains(@label,"${text}")]`);
  }

  async newSignIn() {
        
    //await LoginScreen.allowButton.click();
    await LoginScreen.signInButton.click();
    await LoginScreen.permissionButton.click();
    await LoginScreen.permissionButton.click();
    //await LoginScreen.permissionAllowButton.click();
    await LoginScreen.permissionButton.click();
    //await LoginScreen.allowButton.click();
    //await LoginScreen.permissionButton.click();
    //const clientId = browser.config.clientId;
    //const clientSecret = browser.config.clientSecret;
    await expect(bookASpace.bookASpaceTile).toBeDisplayed();
    console.log('signed in, able to see the DashBoard!');
}
}
module.exports = new Utils();
  