#Employee Manager v2 Test Plan
##Overview:

An employee management application is being tested to determine its ability to keep track of employee ids, names, phone numbers, and titles, as well as changes to those categories(except employee id).

The application is also able to filter employees by name, title, and phone number. New employees can be added as well.

The information stored in the application will be saved in a database. Users should be able to find their changes saved when they open the application in a new window.

##Links

[Application](https://devmountain-qa.github.io/employee-manager-v2/build/index.html)

[Trello board](https://trello.com/b/invvSZ7p/employeer-manager-v11)

[github](https://github.com/jytcr127/Employee-Manager-v2)

[Postman collection](https://github.com/jytcr127/Employee-Manager-v2/blob/master/Employee%20Manager%20API%20practice.postman_collection.json)
	

##What’s included:
Feature: Click employee name from employee list to bring up card with ids in ascending order, name, phone number, email address, and title
Method: Click on employee names from employee list to verify that cards are loaded with id numbers in ascending order
Test Number: 3
Feature: Employee name, phone number, email, and title is editable when card is clicked
Method: Replace name, phone number, and title of employee with different values
Test Number: 3
Feature: Manually typed changes will only save after the save button is clicked
Method: Click on the save button after replacing name, phone number, and title of employee with different values
Test Number: 3
Feature: Cancel button will revert employee card values back to most recently saved version
Method: Click on the clear button after replacing name, phone number, and title of employee to verify that information is reset to most recently saved version
Test Number: 3
Feature: Name on Employee Card (1-30 characters long)
Method: Type a name with 0 characters in length, type in a name with more than 30 characters in length
Test Number: 2
Feature: Phone number on Employee Card (10 digits in length)
Method: Type in phone numbers with less than or greater than 10 digits in length
Test Number: 2
Feature: Title on Employee Card(1-30 characters long)
Method: Type in titles with less than 1 or greater than 30 characters in length
Test Number: 2
Feature: Invalid fields are underlined in red
Method: Type in invalid field to verify it is underlined in red
Test Number: 2
Feature: Fields cannot be saved while invalid
Method: Click the save button while an input field is empty or invalid
Test Number: 2
Feature: Add employee
Method: Click add employee button, fill out required information, save. Employee information should be saved after application is refreshed in browser
Test Number: 1
Feature: Search employee by name, phone number, and title
Method: Click on search input, enter values to search in employee database
Test Number: 1
Feature: Email in Employee card
Method:Verify that card only accepts valid email addresses, verify card only takes up to 30 characters in length
Test Number: 1

##What is not included:

The Employee List will reside in a database and be accessed through API integration.
The API endpoint is currently (https://peaceful-inlet-88854.herokuapp.com/api/employees)
Basic API documentation is as follows:
GET: will return an array of employees
POST: will add an employee if the Body of the request contains a JSON with the properties id, name, phone, email, and title
PUT: will edit an existing employee when sent to api/employees/{employeeId} with parameters of name, phone, email, and title
Note, ID is not editable
DELETE: will delete an existing employee when the request is sent to api/employees/{employeeId}
Any request will return an array of the current employees in the database

##Test Criteria: 

1. Delete button removes an employee card

Is the employee card still visible in the list of employee fields after the delete button is clicked?

2. All fields except for ID are editable

Can I erase fields that are not ID?
Can I change the values for phone number, name, email,  and title

3. The “Add Employee” feature lets users create a new card representing an additional employee

Will clicking the “add employee” button generate a new card?
4. The cancel button will revert the employee’s file back to the most recently saved version

If I click the cancel button, are my unsaved changes reverted back to the previous values on the employee card?

5. Corrections to invalid inputs are saved after user fixes issues and clicks the save button

Are the corrections saved onto the employee card when the user clicks on the car again?

6. Invalid inputs are underlined in red until fixed or user clicks a different employee card

Does the red underline disappear after the invalid input is fixed or after the save button is clicked?

What happens if the user never fixes the input and simply clicks another employee card?

7. Filter input filters employees based on value entered into input field and returns nothing if search input value does not correspond to any employee card

Is the user shown a blank list if their search input does not match any employee?

8. Filter input filters employees based on value entered into input field and returns employee cards that match search input value

Does the input value entered into the input field match any employee cards that are still on the screen?

Is the deletion permanent?

9. When saving a change, it will persist as you access other records and navigate back to the desired employee

Does the field values save changes made by the user?
Can I access the card with new information after clicking on another card?


10. Clear button will make the filter search input value blank and all employees in database should be visible in a list

What happens if I enter a value in the filter search input that does not match any employee and then click the clear button?


##Acceptance Criteria

Employee List
The application will load a simulated list of employees, and allow modifications to each. Clicking the employee from the list to the side will bring their file up in the editor.

Add Employee
Add Employee option at the bottom will allow a new employee record to be created, defaulting with the name and title “New Employee”, phone number (111)111-1111, and an ID number one greater than the last employee created, so that IDs are never repeated.

Selected Employee
Your employee will consist of:
ID
Name
Phone
Title

All fields except for ID are editable.
ID - Should be whole numbers between 0 and 9999 Name - Any characters allowed, to a maximum of 30 characters Phone - Must be a 10 digit phone number
Accepted as regular digits or formatted as a US number
If entered as the former will be displayed as the latter Title - Any characters allowed, to a maximum of 30 characters Email - Any valid email address, to a maximum of 30 characters
Save, Cancel, Delete
Save: When saving a change, it will persist as you access other records and navigate back to the desired employee.
If there are unacceptable entries in the fields, an error message will pop up advising the users as to the errors they need to fix.
Cancel: The cancel button will revert the employee’s file back to the most recently saved version.
Delete: The delete button will remove the employee record, and is irriversable. A dialogue asking the user to confirm their desire to remove the record will be presented.
The save and cancel buttons will only be accessible when modifications have been made.
Search
The search bar will compare any inputs to all fields on all employees, and filter the employee list for any employee that has at least one match.
The clear button will empty the search field and revert to display ALL employees.
Adding, modifying, or deleting employees while the search field is populated will update the results.

##Entry Criteria: 


Acceptance Criteria provided

Tests have been created

Main functions of application are defined

##Exit Criteria:

All employee cards contain correct fields, values, and functions

Feature pass test cases

Budget runs out

##Other details:
A modern browser(after I.E 8) should be used to test the application. Google Chrome is recommended. 
Tester should have node and git installed

##Bugs

Bug 1: The email address field input field will accept a value greater than 30 characters with no error message. The field value will appear to be saved if the user never reloads the page. However,  if the page is reloaded, the change is not saved.

Documentation Requirements: Email - Any valid email address, to a maximum of 30 characters

Bug 2: The title  input field will accept a value greater than 30. If the save button is clicked, the user will get no error message and the title appears to be saved. However, when the user clicks the card again  after clicking a different card, the value will be reverted back to the original title

Documentation Requirements: Title - Any characters allowed, to a maximum of 30 characters 

Bug 3: The “Add employee” functionality stops working if another card was previously generated with default values

Documentation Requirements: “Add Employee” option at the bottom will allow a new employee record to be created, defaulting with the name and title “New Employee”, phone number (111)111-1111, and an ID number one greater than the last employee created, so that IDs are never repeated.

Bug 4: If a user enters a value greater than 30 characters in the name field, they will get an error message for both the name field, which is expected, as well as the title field, which is unexpected

Documentation Requirements: Name - Any characters allowed, to a maximum of 30 characters. Title - Any characters allowed, to a maximum of 30 characters 
