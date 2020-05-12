var employeeManagerPage = {}
module.exports = {

    beforeEach: browser => {
        employeeManagerPage = browser.page.employeeManagerPageObject()
        employeeManagerPage.navigate()
    },

    after: browser => {
        employeeManagerPage.end()
    },

    'Test 1: Delete an employee card': browser => {
        employeeManagerPage
            .waitForElementVisible('ul[class = "listContainer"]', 50000)
            .deleteAnEmployeeCard(browser)
    },

    'Test 2: Edit an employee card': browser => {
        var editEmployeeField = require('../testAssets/employeeToBeEdited1')

        employeeManagerPage
            .click('@secondToLastEmployeeListed')
            .editEmployee(editEmployeeField.name, editEmployeeField.phone, editEmployeeField.email, editEmployeeField.title)
    },

    'Test 3: Create 5 employee cards': browser => {
        var employeesToBeAdded = require('../testAssets/employeeManager5EmployeesArray')

        employeesToBeAdded.forEach(function (e) {
            employeeManagerPage.create5Employees(e.name, e.phone, e.email, e.title)
        })
    },
    
    'Test 4: Confirm changes not saved if cancel button is clicked': browser => {
        employeeManagerPage
            .changesNotSavedIfCancelIsClicked()
    },

    'Test 5: Employee card changes saved after errors are fixed': browser => {
        var fixedErrorsAndSavedChanged = require('../testAssets/employeeToBeEdited2')

        employeeManagerPage
            .changesSavedAfterErrorsFixed(fixedErrorsAndSavedChanged.name, fixedErrorsAndSavedChanged.phone, fixedErrorsAndSavedChanged.email, fixedErrorsAndSavedChanged.title)
    },
    
    'Test 6: Verify that inputs filled incorrectly have red underline represent by class name .invalidInfo which is added': browser => {
        employeeManagerPage
            .IncorrectlyFilledFields()
    },

    'Test 7: Search Input by Name will not return any employees if no employee matches the search input text': browser => {
        employeeManagerPage
            .testASearchThatDoesNotMatchEmployee("HighlyUnlikelySearchTermForEmployeee111222333444")
    },
    'Test 8: Filtering search input by Name will return an employee if an employee name matches the text entered': browser => {
        employeeManagerPage
            .testASearchThatDoesMatchAnEmployee("Annie Edison")
    },
    'Test 9: Verify that changes made on an employee card persist even when user closes window and opens the application in a new browser session': browser => {
        var SavedEmployeeChangesOnNewTab = require('../testAssets/employeeToBeEdited3')

        employeeManagerPage
            .reloadAPage(SavedEmployeeChangesOnNewTab.name, SavedEmployeeChangesOnNewTab.phone, SavedEmployeeChangesOnNewTab.email, SavedEmployeeChangesOnNewTab.title)
    },
    'Test 10: Verifies that all employee cards will load and be visible after the clear button next to the search employees button is clicked': browser => {
        employeeManagerPage
            .testTheClearButtonFunctionality('HighlyUnlikelySearchTermForEmployeee111222333444')
    },
}
    

