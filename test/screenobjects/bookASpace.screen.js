
class bookASpace {

    get bookASpaceTile(){
        return $('//android.widget.TextView[@resource-id="react-native-text" and @text="Book a space"]')
    }
    get conferenceRoom(){
        return $('//android.view.ViewGroup[@resource-id="room_0_availableRoomsLineCell"]')
    }
    get workSpace(){
        return $('//android.view.ViewGroup[@resource-id="segmentedTab_Workspace"]')
    }
    get specificWorkSpace(){
        return $('//android.view.ViewGroup[@resource-id="room_0_availableWorkSpacesLineCell"]')
    }
    get dismissButton(){
        return $('//android.widget.Button[@content-desc="dismiss"]')
    }
    get bookNowButton(){
        return $('//android.widget.TextView[@text="Book now"]')
    }
    get closeButton(){
        return $('//android.widget.Button[@content-desc="Close"]')
    }
    get cancelButton(){
        return $('//android.widget.TextView[@text="Cancel booking"]')
    }
    get confirmCancelButton(){
        return $('//android.widget.Button[@content-desc="Yes, cancel it"]')
    }
    get backButton(){
        return $('//android.widget.Button[@content-desc="Back, double tap to navigate back to previous screen"]')
    }

    async bookConferenceRoom(){
        await this.bookASpaceTile.click();
        await this.conferenceRoom.click();
        await this.bookNowButton.click();
        await this.closeButton.click();
        await this.cancelButton.click();
        await this.confirmCancelButton.click();
        await this.backButton.click();
        await this.backButton.click();
        await expect(this.bookASpaceTile).toBeDisplayed();
        console.log('Booked a conference room & cancelled it');
    }

    async bookWorkSpace(){
        await this.bookASpaceTile.click();
        await this.workSpace.click();
        await this.specificWorkSpace.click();
        await this.dismissButton.click();
        await this.bookNowButton.click();
        await this.closeButton.click();
        await this.cancelButton.click();
        await this.confirmCancelButton.click();
        await this.backButton.click();
        await this.backButton.click();
        await expect(this.bookASpaceTile).toBeDisplayed();
        console.log('Booked a workSpace & cancelled it');
    }
}
module.exports = new bookASpace();
    

  