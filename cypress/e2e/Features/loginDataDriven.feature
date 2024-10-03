Feature: Login into Application

Scenario Outline: Login into Orange HRMS

    Given I am in login page
    When User enter username as '<username>' and password as '<password>'
    And I click on login button
    Examples: 
        |username   |password |
        |Admin      | admin123|
        |admin      | admin1  |
        |admins      | admin1  |
        |adminsd      | admin1  |
        |adminds     | admin1  |

