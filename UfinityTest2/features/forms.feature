Feature: Forms
    Able to fill in form and submit relevant details

    Background:
        Given I have visited the QA Tools demo homepage on Chrome
        And I click on Forms Box
        And I click on Practice Form

    Scenario: Fill up all fields correctly without last name
        When I fill the form with details without last name and city state
        And I submit the form after clicking widgets and filling in the remaining details
        Then I should see the error in Last Name field
        
        When I fill up last name correctly and resubmit the form
        Then I should see Thanks for submitting the form page
        
        When I click on close button
        Then I should see Practice Form page
    