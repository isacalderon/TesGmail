Feature: Protractor and cucumber Gmail login
  Scenario: Gmail sign page
    Given I'm on Gmail page
    When Enter data in textbox
    When Enter password
    Then Validate data in textbox