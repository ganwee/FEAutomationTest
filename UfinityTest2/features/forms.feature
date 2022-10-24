Feature: Forms
    Able to fill in form and submit relevant details

    Background:
        Given I have visited the QA Tools demo homepage on Chrome
        And I click on Forms Box
        And I click on Practice Form

    Scenario: Fill up all fields correctly without last name
        When I submit the form with details without last name
        Then I should see the error in Last Name field
        
    Scenario: Fill up last name correctly
        When I submit the form with all details correctly
        Then I should see Thanks for submitting the form page
        
    