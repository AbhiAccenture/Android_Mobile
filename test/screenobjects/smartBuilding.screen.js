const bookASpace = require("./bookASpace.screen");
const utils = require("../utils/utils")

class smartBuilding {

    get smartBuildingLocator(){
        return $('')
    }
    get reviewExpenseReport(){
        return $('(//android.widget.TextView[@text="In Review expense report"])[1]')
    }
    get inReviewID(){
        return $('//android.view.View[@content-desc="Card Annual Fees"]')
    }
    get filterOption(){
        return $('//android.widget.Button[@content-desc="Click here to open the filter options, double tap to open the filter"]')
    }
    get filterReportStatus(){
        return $('//android.widget.Button[@content-desc="Report status, 1 of 2"]')
    }
    get filterSubmitDate(){
        return $('//android.widget.Button[@content-desc="Submit date, 2 of 2"]')
    }
    get reviewExpenseReportSubmitData(){
        return $('//android.widget.TextView[@text="In Review expense report"]')
    }
    
    async expenseReportsTile() {
        await utils.swipeDownUntilElementIsVisible(this.expenseReportsLocator);
        await this.expenseReportsLocator.click();
        await this.reviewExpenseReport.click();
        await expect(this.inReviewID).toBeDisplayed();
        await bookASpace.backButton.click();
        await this.filterOption.click();
        await this.filterReportStatus.click();
        await this.reviewExpenseReport.click();
        await expect(this.inReviewID).toBeDisplayed();
        await bookASpace.backButton.click();
        await this.filterOption.click();
        await this.filterSubmitDate.click();
        await this.reviewExpenseReportSubmitData.click();
        await bookASpace.backButton.click();
        await bookASpace.backButton.click();
        console.log('Expenses Report Execution is done.');
    }
}
module.exports = new smartBuilding();