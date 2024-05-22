const Utils = require('../utils/utils');
const expenseReports = require('../screenobjects/expenseReports.screen')

describe('5_ExpenseReports', () => {

    it('5_ExpenseReportsTile', async () => {
        await Utils.newSignIn(); 
        await expenseReports.expenseReportsTile();
    });
});