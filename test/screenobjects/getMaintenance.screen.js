const bookASpace = require("../screenobjects/bookASpace.screen");
const utils = require("../utils/utils")

class getMaintenance {

    get getMaintenanceLocator(){
        return $('//android.widget.TextView[@resource-id="react-native-text" and @text="Get maintenance"]')
    }
    get requestButton(){
        return $('//android.widget.Button[@content-desc="Make a request"]')
    }
    get findBuildingName(){
        return $('//android.widget.EditText[@content-desc="Building name, Select building name"]')
    }
    get particularBuilding(){
        return $('(//android.widget.Button[@content-desc="Select building"])[3]/android.view.ViewGroup')
    }
    get findRoomName(){
        return $('//android.widget.EditText[@content-desc="Room name, Select room name"]')
    }
    get particularRoom(){
        return $('(//android.widget.Button[@content-desc="Select room"])[1]/android.view.ViewGroup')
    }
    get nextButton(){
        return $('//android.widget.Button[@content-desc="Next"]')
    }
    get descriptionField(){
        return $('//android.widget.EditText[@content-desc="Please describe the issue"]')
    }
    get blankWhiteScreen(){
        return $('//android.widget.ScrollView[@resource-id="scrollView"]/android.view.ViewGroup')
    }
    get continueButton(){
        return $('//android.widget.Button[@content-desc="Continue"]')
    } 
    get reviewButton(){
        return $('//android.widget.Button[@content-desc="Go to review"]')
    }
    get submitRequest(){
        return $('//android.widget.Button[@content-desc="Submit request"]')
    } 
    get backToHomeButton(){
        return $('//android.widget.Button[@content-desc="Back to home"]')
    }

    async getMaintenanceTile(){
        await this.getMaintenanceLocator.click();
        await this.requestButton.click();
        await this.findBuildingName.click();
        await this.particularBuilding.click();
        await this.particularBuilding.click();//
        await expect(this.findBuildingName).toBeDisplayed();
        await utils.swipeDownUntilElementIsVisible(this.findRoomName);
        await this.findRoomName.click();
        await this.particularRoom.click();
        await this.particularRoom.click();//
        await expect(this.findBuildingName).toBeDisplayed();
        await utils.swipeDownUntilElementIsVisible(this.nextButton);
        await this.nextButton.click();
        await this.descriptionField.click();
        await this.descriptionField.setValue("Testing, Please ignore");
        await this.blankWhiteScreen.click();
        await this.continueButton.click();
        await this.nextButton.click();
        await this.reviewButton.click();
        await utils.swipeDownUntilElementIsVisible(this.submitRequest);
        await this.submitRequest.click();
        await this.backToHomeButton.click();
        await bookASpace.backButton.click();
        await expect(this.getMaintenanceLocator).toBeDisplayed();
        console.log('New Request of Get Maintenance is submitted.');
    }

}
module.exports = new getMaintenance();
    

  