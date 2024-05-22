const bookASpace = require("../screenobjects/bookASpace.screen");
const utils = require("../utils/utils")


class parking {

    get parkingTileLocator(){
        return $('(//android.widget.TextView[@text="Parking"][1])')
    }
    get registerNextButton(){
        return $('//android.widget.TextView[@text="Next"]') 
    }
    get beginRegistrationButton(){
        return $('//android.widget.Button[@resource-id="button"]') 
    }
    get registerButton(){
        return $('//android.widget.TextView[@text="Register"]')
    }
    get findVehicleButton(){
        return $('//android.widget.TextView[@text="Find vehicle"]')
    }
    get parkButton(){
        return $('//android.widget.TextView[@text="Park"]')
    }
    get parkingGarage(){
        return $('(//android.view.ViewGroup[@resource-id="titleBarContainer"])[2]')
    }
    get compact(){
        return $('(//android.view.ViewGroup[@resource-id="titleBarContainer"])[3]')
    }
    get registerButton(){
        return $('//android.widget.TextView[@text="Register"]')
    } 
    get registerVehicle(){
        return $('//android.widget.Button[@resource-id="button"]')
    }
    get vehicleType(){
        return $('(//android.view.ViewGroup[@resource-id="undefinedPicker"])[1]/android.view.ViewGroup')
    }
    get vehicleTypeCar(){
        return $('//android.widget.Button[@content-desc="Car, 1 of 4"]')
    }
    get vehicleMake(){
        return $('//android.widget.EditText[@content-desc="Enter a Make Editbox, Text, E.g., Kia, Honda, or Ford"]')
    }
    get vehicleModel(){
        return $('//android.widget.EditText[@content-desc="Enter a Model Editbox, Text, E.g., Soul, Prius, or Malibu"]')
    }
    get vehicleInfo(){ //
        return $('//android.widget.TextView[@content-desc="Model"]')
    }
    get vehicleYear(){
        return $('//android.widget.EditText[@content-desc="Enter a Year Editbox, Text, E.g., 2020"]')
    }
    get vehicleColor(){
        return $('(//android.view.ViewGroup[@resource-id="undefinedPicker"])[2]/android.view.ViewGroup')
    }
    get vehicleColorBlack(){
        return $('//android.widget.Button[@content-desc="Black, 1 of 14"]')
    } 
    get vehicleLicense(){
        return $('//android.widget.EditText[@content-desc="Enter a License plate # Editbox, Text, "]')
    }
    get vehicleState(){
        return $('(//android.view.ViewGroup[@resource-id="undefinedPicker"])[2]/android.view.ViewGroup')
    } 
    get vehicleStateAB(){
        return $('//android.widget.Button[@content-desc="AB, 1 of 77"]')
    }
    get vehicleRegistration(){
        return $('(//android.view.ViewGroup[@resource-id="undefinedPicker"])[3]/android.view.ViewGroup')
    }
    get vehicleRegistrationPersonal(){
        return $('//android.widget.Button[@content-desc="Personal, 1 of 5"]')
    }
    get vehicleParking(){
        return $('(//android.view.ViewGroup[@resource-id="undefinedPicker"])[4]/android.view.ViewGroup')
    }
    get vehicleParking1(){
        return $('//android.widget.Button[@content-desc="1, 1 of 314"]')
    }
    get vehicleParkingConditions(){
        return $('//android.widget.TextView[@text=""]')
    }
    get next(){
        return $('//android.widget.TextView[@text="Next"]')
    }
    get submit(){
        return $('//android.widget.TextView[@text="Submit"]')
    }
    get vehicleVerification(){
        return $('(//android.view.ViewGroup[@resource-id="VehicleOverviewContainer"])[2]')
    } 
    get removeVehicle(){
        return $('android.widget.TextView[@resource-id="buttonText" and @text="Remove"]') //(//android.widget.Button[@resource-id="button"])[1]//
    }
    get removeConfirmation(){
        return $('//android.widget.Button[@content-desc="Remove"]')
    }
    get doneButton(){
        return $('//android.widget.TextView[@text="Done"]')
    }
	
    async parkingTile(){
        await this.parkingTileLocator.click();
        // await this.registerNextButton.click();
        // await this.registerNextButton.click();
        // await this.beginRegistrationButton.click();
        //await this.registerButton.click();
        await expect(this.findVehicleButton).toBeDisplayed();
        await this.findVehicleButton.click();
        await expect(this.registerButton).toBeDisplayed();
        await this.registerButton.click();
        await expect(this.registerVehicle).toBeDisplayed();
        await this.registerVehicle.click();
        await this.vehicleType.click();
        await this.vehicleTypeCar.click();
        await this.vehicleMake.click();
        await this.vehicleMake.setValue("Ford 6G");
        await this.vehicleModel.click();
        await this.vehicleModel.setValue("Malibu Diesel");
        await this.vehicleInfo.click();
        await this.vehicleYear.click();
        await this.vehicleYear.setValue("2023");
        await this.vehicleInfo.click();
        await this.vehicleColor.click();
        await this.vehicleColorBlack.click();
        await this.vehicleLicense.click();
        await this.vehicleLicense.setValue("TS 1962");
        await this.vehicleInfo.click();
        await this.vehicleState.click();
        await this.vehicleStateAB.click();
        await this.vehicleRegistration.click();
        await this.vehicleRegistrationPersonal.click();
        await this.vehicleParking.click();
        await this.vehicleParking1.click();
        await expect(this.vehicleParking).toBeDisplayed();
        await utils.swipeDownUntilElementIsVisible(this.vehicleParkingConditions);
        await this.vehicleParkingConditions.click();
        await this.next.click();
        await this.submit.click();
        await this.doneButton.click();
        await expect(this.parkButton).toBeDisplayed();
        await this.parkButton.click();
       await bookASpace.backButton.click();
        await expect(this.parkingTileLocator).toBeDisplayed();
        console.log('Parking Tile Execution is done.');
    }
}
module.exports = new parking();
    

  