Feature: Forms
    Able to fill in form and submit relevant details

    Background:
        Given I have visited the QA Tools demo homepage on Chrome
        And I click on Forms Box

    Scenario: Fill up all fields correctly
        Given I click on Practice Form
        When I submit the form with details
        Then I should see Thanks for submitting the form page
        
    