
class dining {

    get diningLocator(){
        return $('//android.widget.TextView[@resource-id="react-native-text" and @text="Dining"]')
    }
    get deliStation(){
        return $('//android.view.ViewGroup[@content-desc="station name: Deli Station - Online, press this item to check menu for this station"]')
    }
    get itemOrange(){
        return $('//android.view.ViewGroup[@content-desc="Orange. . $0.8, press this item to view item details"]')
    }
    get orderButton(){
        return $('//android.widget.Button[@content-desc="double tap to add 0.8 item to your cart and return to the item menu"]')
    }
    get checkOutButton(){
        return $('//android.widget.Button[@content-desc="double tap to go to your cart"]')
    }
    get paymentCardName(){
        return $('//android.widget.EditText[@content-desc="undefined Editbox, Text, Enter your name"]')
    }
    get paymentCardNumber(){
        return $('(//android.widget.Button[@content-desc="Select room"])[1]/android.view.ViewGroup')
    }
    get paymentCardExpiry(){
        return $('//android.widget.EditText[@content-desc="Expiration Date , text field, double tap to edit"]')
    }
    get paymentCardCvv(){
        return $('//android.widget.EditText[@content-desc="undefined Editbox, Text, XXX"]')
    }
    get cvvField(){
        return $('//android.widget.TextView[@content-desc="CVV"]')
    }
    get orderButton(){
        return $('//android.widget.Button[@content-desc="double tap to pay and place order"]')
    } 
    // get submitRequest(){
    //     return $('//android.widget.Button[@content-desc="Submit request"]')
    // } 
    // get backToHomeButton(){
    //     return $('//android.widget.Button[@content-desc="Back to home"]')
    // }

    async diningTile(){
        await this.diningLocator.click();
        await this.deliStation.click();
        await this.itemOrange.click();
        await this.orderButton.click();
        await this.checkOutButton.click();
        await this.paymentCardName.click();
        await this.paymentCardName.setValue("Karunakar Reddy");
        await this.paymentCardNumber.click();
        await this.paymentCardNumber.setValue("4012000033330026");
        await this.paymentCardExpiry.click();
        await this.paymentCardExpiry.setValue("1127");
        await this.paymentCardCvv.click();
        await this.paymentCardCvv.setValue("333");
        await this.cvvField.click();
        await this.orderButton.click();
    }
}
module.exports = new dining();
    

  