var employeeManagerCommands = {
    clickEmployee: function (employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.api.useCss()
        return this
    },
    editEmployee: function (employeeName, employeePhone, employeeEmail, employeeTitle) {
        if (employeeName) {
        this
            .clearValue('@nameField')
            .setValue('@nameField', employeeName)
        }
        if (employeePhone) {
        this
            .clearValue('@phoneField')
            .setValue('@phoneField', employeePhone)
        }
        if (employeeEmail) {
        this
            .clearValue('@emailField')
            .setValue('@emailField', employeeEmail)
        }
        if (employeeTitle) {
        this
            .clearValue('@titleField')
            .setValue('@titleField', employeeTitle)
        }
        this
            .click('@saveButton')
        this
            .expect.element('@nameField').value.to.equal(employeeName)
        this
            .expect.element('@phoneField').value.to.equal(employeePhone)
        this
            .expect.element('@emailField').value.to.equal(employeeEmail)
        this
            .expect.element('@titleField').value.to.equal(employeeTitle)
        return this
    },
    deleteAnEmployeeCard: function (browser) {
        this
            .click('@lastEmployeeListed')
            .clearValue('@nameField')
            .setValue('@nameField', 'This will be deleted')
            .click('@saveButton')
            .pause(3000)
            .expect.element('@nameField').value.to.equal('This will be deleted')
        this
            .click('@secondToLastEmployeeListed')
            .pause(3000)
            .click('@lastEmployeeListed')
            .pause(3000)
            .click('@deleteButton')
        browser
            .acceptAlert()
            .pause(3000)
        this
            .click('@lastEmployeeListed')
            .pause(3000)
            .expect.element('@nameField').value.to.not.equal('This will be deleted')
    },
    addAnEmployeeCard: function () {
        this   
            .click('@addEmployeeButton')
            .pause(3000)
            .click('@lastEmployeeListed')
            .expect.element('@nameField').value.to.equal('New Employee')
        this
            .expect.element('@phoneField').value.to.equal('1111111111')
        this
            .expect.element('@emailField').value.to.equal('abc')
        this
            .expect.element('@titleField').value.to.equal('New Employee')
        
    },
    changesNotSavedIfCancelIsClicked: function () {
        let name = ''
        this
            .click('@lastEmployeeListed')
            .useCss()
            .clearValue('@nameField')
            .setValue('@nameField', name)
            .setValue('@phoneField', '1234567891')
            .setValue('@emailField', 'Shirleytemple@temple.com')
            .setValue('@titleField', 'Dog Whisperer')
            .click('@cancelButton')
            .expect.element('@nameField').value.to.not.equal(name);
    },
    changesSavedAfterErrorsFixed: function (name, phoneNumber, email, title) {
        this
            .click('@lastEmployeeListed')
            .clearValue('@nameField')
            .setValue('@nameField', '')
            .clearValue('@phoneField')
            .setValue('@phoneField', '')
            .clearValue('@titleField')
            .setValue('@titleField', '')
            .click('@saveButton')
            .clearValue('@nameField')
            .setValue('@nameField', name)
            .clearValue('@phoneField')
            .setValue('@phoneField', phoneNumber)
            .clearValue('@titleField')
            .setValue('@titleField', title)
            .clearValue('@emailField')
            .setValue('@emailField', email)
            .click('@saveButton')
            .pause(1000)
            .click('@secondToLastEmployeeListed')
            .click('@lastEmployeeListed')
            .pause(2000)
            .expect.element('@nameField').value.to.equal(name)
        this
            .expect.element('@phoneField').value.to.equal(phoneNumber)
        this
            .expect.element('@titleField').value.to.equal(title)
        this
            .expect.element('@emailField').value.to.equal(email)
        this
            .end()
    },
    IncorrectlyFilledFields: function () {
        this
            .click('@secondToLastEmployeeListed')
            .clearValue('@nameField')
            .setValue('@nameField', 'aaaaabbbbbbbbbccccccccccdddddddddeeeeeeeefffffffffggggggggggg')
            .click('@saveButton')
            .assert.domPropertyEquals('input[name = "nameEntry"]', 'classList', ['materialInput', 'invalidInfo'])
    },
    testASearchThatDoesNotMatchEmployee: function (nameToTest) {
        this
            .setValue('@searchBox', nameToTest)
            .expect.element('@firstEmployeeResultFromFilterSearch').text.to.equal('+ Add Employee')
    },
    testASearchThatDoesMatchAnEmployee: function (nameToTest) {
        this
            .clearValue('@searchBox')
            .setValue('@searchBox', nameToTest)
            .expect.element('@firstEmployeeResultFromFilterSearch').text.to.equal('Annie Edison')
    },
    reloadAPage: function (name, phoneNumber, email, title) {
        this
            .click('@lastEmployeeListed')
            .clearValue('@nameField')
            .setValue('@nameField', name)
            .clearValue('@phoneField')
            .setValue('@phoneField', phoneNumber)
            .clearValue('@emailField')
            .setValue('@emailField', email)
            .clearValue('@titleField')
            .setValue('@titleField', title)
            .click('@saveButton')
            .pause(5000)
        this
            .api.refresh()
        this
            .click('@lastEmployeeListed')
            .expect.element('@nameField').to.have.value.that.equals(name)
        this
            .click('@lastEmployeeListed')
            .expect.element('@emailField').to.have.value.that.equals(email)
        this
            .click('@lastEmployeeListed')
            .expect.element('@titleField').to.have.value.that.equals(title)
        this
            .click('@lastEmployeeListed')
            .expect.element('@phoneField').to.have.value.that.equals(phoneNumber)
    },
    testTheClearButtonFunctionality: function (highlyUnlikelyEmployeeName) {
        this
            .setValue('@searchBox', highlyUnlikelyEmployeeName)
            .click('@firstEmployeeResultFromFilterSearch')
            .pause(3000)
            .expect.element('@employeeInfoCard').text.to.contain("No Employee Selected")
        this
            .click('@clearButton')
            .click('@firstEmployeeResultFromFilterSearch')
            .pause(3000)
            .expect.element('@employeeInfoCard').text.to.not.contain("No Employee Selected")
    },
    create5Employees: function (employeeName, employeePhone, employeeEmail, employeeTitle) {
        this
            .click('@addEmployeeButton')
            .pause(3000)
            .click('@lastEmployeeListed')
            .clearValue('@nameField')
            .setValue('@nameField', employeeName)
            .clearValue('@phoneField')
            .setValue('@phoneField', employeePhone)
            .clearValue('@emailField')
            .setValue('@emailField', employeeEmail)
            .clearValue('@titleField')
            .setValue('@titleField', employeeTitle)
            .click('@saveButton')
        this
            .expect.element('@nameField').to.have.value.that.equals(employeeName)
        this
            .expect.element('@phoneField').to.have.value.that.equals(employeePhone)
        this
            .expect.element('@emailField').to.have.value.that.equals(employeeEmail)
        this
            .expect.element('@titleField').to.have.value.that.equals(employeeTitle)
        return this
    }
    }



module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManagerCommands],
    elements: {
        versionNumber: 'footer',
        addButton: 'li[name="addEmployee"]',
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        clearButton: 'button[name = "clearSearch"]',
        employeeInfoCard: 'div[class = "infoCard"]',
        nameToTestInSearchInput1: "BlackPantherAntman",
        nameToTestInSearchInput2: "Annie Edison",
        cardTitle: '#employeeTitle',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        emailField: 'input[name="emailEntry"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn',
        deleteButton: 'button[name = "delete"]',
        searchBox: 'input[name = "searchBox"]',
        employeeList: 'ul[class = "listContainer"]',
        cancelButton: 'button[name = "cancel"]',
        lastEmployeeListed: {
            selector: '//ul/li[position()=last()-1]',
            locateStrategy: 'xpath'
        },
        addEmployeeButton: {
            selector: '//ul/li[position()=last()]',
            locateStrategy: 'xpath'
        },
        secondToLastEmployeeListed: {
            selector: '//ul/li[position()=last()-2]',
            locateStrategy: 'xpath'
        },
        firstEmployeeResultFromFilterSearch: {
            selector: '//ul/li[2]',
            locateStrategy:'xpath'
        }
    }
}

