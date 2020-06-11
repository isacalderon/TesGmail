Feature: Protractor and cucumber Gmail login
  Scenario: Gmail sign page
    Given I'm on Gmail page
    When Enter data in textbox
    When Enter password
    Then Validate data in URL

  Scenario: I am on gmail now I'll send you an email
     Given navigate to button new
     When Enter the destinatary email the subject and message
     When I click the button Send
     Then I Validate that I send the email

   Scenario: I discard the draft
     Given navigate to button new again
     When Enter my data email and subject again
     When I erase the draft
     Then I hope the message 

 