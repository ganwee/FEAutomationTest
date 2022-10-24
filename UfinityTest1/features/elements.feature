Feature: Elements
    Able to fill in and submit Full Name, Email, Current Address and Permanent Address

    Background:
        Given I have visited the QA Tools demo homepage on Chrome
        And I click on Elements Box

    Scenario: Fill up all fields correctly
        Given I click on Text Box
        When I submit the form with details
            | Full Name          | Gary           |
            | Email              | test@gmail.com |
            | Current Address    | 990 Address    |
            | Permanent Address  | 999 Address    |
        Then I should see the entered details inside a text box under the form
            | Full Name          | Gary           |
            | Email              | test@gmail.com |
            | Current Address    | 990 Address    |
            | Permanent Address  | 999 Address    |
    
    Scenario: Navigate to Check Box and extract Home to Desktop path
        Given I click on Check Box
        And I click on Arrow beside Home folder
        And I extract Home to Desktop path
        When I click Check Box of Commands
        Then I should see my selection results as commands

    Scenario: Answer question Do You Like This Site as Impressive
        Given I click on Radio Button
        When I select Radio Button option as Impressive
        Then I should see my selection results as Impressive

    Scenario: Add required details into Web Tables form and update salary of first created entry
        Given I click on Web Tables
        When I click on Add button
        And I submit form with details
            | First Name  | Gary           |
            | Last Name   | Good           |
            | Email       | test@test.com  |
            | Age         | 99             |
            | Salary      | 10000          |
            | Department  | Engineering    |
        Then I should see form submission added to the table
            | First Name  | Gary           |
            | Last Name   | Good           |
            | Email       | test@test.com  |
            | Age         | 99             |
            | Salary      | 10000          |
            | Department  | Engineering    |
        Given I search for first name of created entry
        And I click on edit button
        When I update salary
            | First Name  | Gary           |
            | Last Name   | Good           |
            | Email       | test@test.com  |
            | Age         | 99             |
            | Salary      | 99999          |
            | Department  | Engineering    |
        Then I should see updated salary in Web Tables
            | First Name  | Gary           |
            | Last Name   | Good           |
            | Email       | test@test.com  |
            | Age         | 99             |
            | Salary      | 99999          |
            | Department  | Engineering    |