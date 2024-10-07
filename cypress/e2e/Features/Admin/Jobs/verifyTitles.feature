Feature: Feature name


Scenario: Verify Add New Job Title
    Given I am in login page
    # When I enter valid username and password
    When I enter "Admin" in username field
    And I enter "admin123" in password field
    # And I enter 123 in password field
    And I click on login button
    And user navigate to job title
    And user enter all the job details and click on save button


